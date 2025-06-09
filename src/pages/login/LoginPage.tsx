import { useState } from 'react';
import Login from '@/pages/login/components/Login';
import { authService } from '@/apis/auth';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/modal/modal';
import { AxiosError } from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  //   const handleKakaoLogin = () => {
  //   window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // };

  const isValidEmail = (email: string) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError('');
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError('');
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('이메일을 입력해 주세요.');
    } else if (!isValidEmail(email)) {
      setEmailError('이메일 형식으로 작성해 주세요.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError('비밀번호를 입력해 주세요.');
    } else if (password.length < 8) {
      setPasswordError('비밀번호는 8자 이상 입력해 주세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await authService.login({ email, password });
      console.log('로그인 성공:', response);

      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      navigate('/');
    } catch (error: unknown) {
      const err = error as AxiosError;
      setErrorMessage(err.message || '로그인에 실패했습니다.');
      setIsErrorModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    isValidEmail(email) && password.length >= 8 && email.trim() !== '' && password.trim() !== '';

  return (
    <>
      <Login
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        emailError={emailError}
        passwordError={passwordError}
        onEmailBlur={handleEmailBlur}
        onPasswordBlur={handlePasswordBlur}
        isFormValid={isFormValid}
      />
      {isErrorModalOpen && (
        <Modal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)}>
          {errorMessage}
        </Modal>
      )}
    </>
  );
};

export default LoginPage;
