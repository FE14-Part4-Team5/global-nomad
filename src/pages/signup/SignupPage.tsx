import { useState } from 'react';
import styles from './SignupPage.module.css';
import Input from '../../components/input/Input';
import Button from '@/components/button/Button';
import { Link } from 'react-router-dom';
import Logo_horizontal from '@/assets/icons/logo_horizontal.svg';
import KakaoIcon from '@/assets/icons/icon_kakao.svg';

interface SignupProps {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  onEmailChange: (value: string) => void;
  onNicknameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  onOauthSignup?: () => void;
  errorMessage?: string;
}

const Signup = ({
  email,
  nickname,
  password,
  confirmPassword,
  onEmailChange,
  onNicknameChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
  isSubmitting = false,
  onOauthSignup,
  errorMessage = '',
}: SignupProps) => {
  return (
    <div className={styles.signupContainer}>
      <img src={Logo_horizontal} alt="회원가입 로고" className={styles.signupLogo} />
      <div className={styles.inputWrapper}>
        <Input
          title="이메일"
          type="email"
          isError={false /*error 상태값 넣기*/}
          errorMessage={errorMessage}
          placeholder="이메일을 입력해 주세요"
          value={email}
          onChange={e => onEmailChange(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          title="닉네임"
          type="text"
          isError={false /*error 상태값 넣기*/}
          errorMessage={errorMessage}
          placeholder="닉네임을 입력해 주세요"
          value={nickname}
          onChange={e => onNicknameChange(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          title="비밀번호"
          type="password"
          isError={false /*error 상태값 넣기*/}
          errorMessage={errorMessage}
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          onChange={e => onPasswordChange(e.target.value)}
          showEyeIcon={true}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          title="비밀번호 확인"
          type="password"
          isError={false /*error 상태값 넣기*/}
          errorMessage={errorMessage}
          placeholder="비밀번호를 입력해 주세요"
          value={confirmPassword}
          onChange={e => onConfirmPasswordChange(e.target.value)}
          showEyeIcon={true}
        />
      </div>
      <Button padding="1.75rem 28.6rem" className={styles.signupButton}>
        회원가입하기
      </Button>
      <div className={styles.signupDivider}>
        <span className={styles.dividerText}>SNS 계정으로 회원가입하기</span>
      </div>
      <Button
        padding="1.5rem 26.3rem"
        variant="secondary"
        icon={<img src={KakaoIcon} alt="카카오 아이콘" width={24} height={24} />}
        onClick={onOauthSignup}
        isActive={true}
        className={styles.kakaoButton}
      >
        카카오 회원가입
      </Button>
      <div className={styles.loginContainer}>
        회원이신가요?
        <Link to="/login" className={styles.loginLink}>
          로그인하기
        </Link>
      </div>
    </div>
  );
};

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleNicknameChange = (value: string) => {
    setNickname(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // 회원가입 로직 추가
    // 예시: 회원가입 API 호출 후 성공/실패 처리
    setTimeout(() => {
      setIsSubmitting(false);
      // 회원가입 성공 시 리다이렉트 또는 상태 업데이트
    }, 1000);
  };

  return (
    <Signup
      email={email}
      nickname={nickname}
      password={password}
      confirmPassword={confirmPassword}
      onEmailChange={handleEmailChange}
      onNicknameChange={handleNicknameChange}
      onConfirmPasswordChange={handleConfirmPasswordChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
    />
  );
};

export default Signup;
