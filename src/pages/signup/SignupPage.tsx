import { useState } from 'react';
import Signup from '@/pages/signup/components/Signup';
import { usersService } from '@/apis/users';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/modal/modal';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const navigate = useNavigate();

  const isValidEmail = (email: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const response = await usersService.signUp({
        email,
        nickname,
        password,
      });

      console.log('회원가입 성공:', response);
      setIsSuccessModalOpen(true);
    } catch (error: any) {
      setErrorMessage(error.message || '로그인에 실패했습니다.');
      setIsErrorModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailBlur = () => {
    if (!email) setEmailError('이메일을 입력해 주세요.');
    else if (!isValidEmail(email)) setEmailError('이메일 형식이 올바르지 않습니다.');
    else setEmailError('');
  };

  const handleNicknameBlur = () => {
    if (!nickname.trim()) setNicknameError('닉네임을 입력해 주세요.');
    else setNicknameError('');
  };

  const handlePasswordBlur = () => {
    if (!password) setPasswordError('비밀번호를 입력해 주세요.');
    else if (password.length < 8) setPasswordError('비밀번호는 8자 이상이어야 합니다.');
    else setPasswordError('');
  };

  const handleConfirmPasswordBlur = () => {
    if (!confirmPassword) setConfirmPasswordError('비밀번호 확인을 입력해 주세요.');
    else if (confirmPassword !== password) setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    else setConfirmPasswordError('');
  };

  const isFormValid =
    isValidEmail(email) &&
    nickname.trim() !== '' &&
    password.length >= 8 &&
    password === confirmPassword;

  return (
    <>
      <Signup
        email={email}
        nickname={nickname}
        password={password}
        confirmPassword={confirmPassword}
        onEmailChange={setEmail}
        onNicknameChange={setNickname}
        onPasswordChange={setPassword}
        onConfirmPasswordChange={setConfirmPassword}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        emailError={emailError}
        nicknameError={nicknameError}
        passwordError={passwordError}
        confirmPasswordError={confirmPasswordError}
        onEmailBlur={handleEmailBlur}
        onNicknameBlur={handleNicknameBlur}
        onPasswordBlur={handlePasswordBlur}
        onConfirmPasswordBlur={handleConfirmPasswordBlur}
        isFormValid={isFormValid}
      />
      {isSuccessModalOpen && (
        <Modal
          isOpen={isSuccessModalOpen}
          onClose={() => {
            setIsSuccessModalOpen(false);
            navigate('/login');
          }}
        >
          가입에 성공하였습니다.
        </Modal>
      )}

      {isErrorModalOpen && (
        <Modal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)}>
          {errorMessage}
        </Modal>
      )}
    </>
  );
};

export default SignupPage;
