import { login } from './example';

const ExampleLogin = () => {
  const teamId = 'team5';
  const handleLogin = async () => {
    try {
      const result = await login('chlrnjswls@naver.com', 'chlrnjswls', teamId);
      console.log('로그인 성공:', result);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  return <button onClick={handleLogin}>로그인</button>;
};

export default ExampleLogin;
