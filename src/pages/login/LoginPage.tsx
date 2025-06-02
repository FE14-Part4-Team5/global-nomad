import { useState } from 'react';
import styles from './LoginPage.module.css';
import Input from '../../components/input/Input';
import Button from '@/components/button/Button';
import { Link } from 'react-router-dom';

interface LoginProps {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  onOauthLogin?: () => void;
  errorMessage?: string;
}

const Login = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isSubmitting = false,
  onOauthLogin,
  errorMessage = '',
}: LoginProps) => {
  return (
    <div className={styles.loginContainer}>
      {/*logo*/}
      <div className={styles.loginTitle}>GlobalNomad</div>
      <Input
        title="이메일"
        type="email"
        isError={false /*error 상태값 넣기*/}
        errorMessage={errorMessage}
        placeholder="이메일을 입력해 주세요"
        value={email}
        onChange={e => onEmailChange(e.target.value)}
      />
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
      <Button>로그인하기</Button>
      <div className={styles.loginDivider}>
        <span className={styles.dividerText}>or</span>
      </div>
      <Button>카카오 로그인</Button>
      <div>
        회원이 아니신가요?
        <Link to="/signup" className={styles.signupLink}>
          회원가입하기
        </Link>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // 로그인 로직 추가
    // 예시: 로그인 API 호출 후 성공/실패 처리
    setTimeout(() => {
      setIsSubmitting(false);
      // 로그인 성공 시 리다이렉트 또는 상태 업데이트
    }, 1000);
  };

  return (
    <Login
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
    />
  );
};

export default LoginPage;
