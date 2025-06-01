import { useState } from 'react';
import Input from './components/input/Input';
import Button from './components/button/Button';

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('text');
  const [value3, setValue3] = useState('text');

  return (
    <>
      {/* 기본 */}
      <Input
        title="title"
        placeholder="text"
        value={value1}
        onChange={e => setValue1(e.target.value)}
        padding="1.6rem 2rem"
        maxWidth="35rem"
      />

      <Input
        title="title"
        value={value2}
        onChange={e => setValue2(e.target.value)}
        padding="1.6rem 2rem"
        maxWidth="35rem"
      />

      <Input
        title="title"
        value={value3}
        onChange={e => setValue3(e.target.value)}
        isError={true}
        errorMessage="message"
        showEyeIcon={true}
        padding="1.6rem 2rem"
        maxWidth="35rem"
        type="password"
      />

      <Button
        variant="primary"
        isActive={true}
        icon={
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
            width={15}
            height={15}
          />
        }
        padding="0.5rem 1.5rem"
      >
        이미지 아이콘
      </Button>
    </>
  );
}

export default App;
