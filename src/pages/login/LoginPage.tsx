import { useState } from 'react';
import Login from '@/pages/login/components/Login';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log('로그인 API 넣어야 함', { email, password, isSubmitting });
    setTimeout(() => {
      setIsSubmitting(false);
      // 로그인 성공 시 리다이렉트 또는 상태 업데이트
    }, 1000);
  };

  const isFormValid =
    isValidEmail(email) && password.length >= 8 && email.trim() !== '' && password.trim() !== '';

  return (
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
  );
};

export default LoginPage;
