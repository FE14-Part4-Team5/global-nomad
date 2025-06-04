import SideNavigation from '@/components/side-navigation/SideNavigation';
import profileImg from '@/assets/icons/profile_size=lg.svg';
import styles from './MyProfilePage.module.css';
import ProfileForm from './components/ProfileForm';
import { useState, type ChangeEvent } from 'react';

const VALIDATION_RULES = {
  nickname: {
    validate: (value: string) => value.length <= 10,
    errorMessage: '10자 이하로 작성해주세요',
  },
  password: {
    validate: (value: string) => value.length >= 8,
    errorMessage: '8자 이상 입력해주세요',
  },
  confirmPassword: {
    validate: (value: string, password: string) => value === password,
    errorMessage: '비밀번호가 일치하지 않습니다.',
  },
} as const;

const INIT_FORM_VALUES = {
  nickname: '',
  password: '',
  confirmPassword: '',
};

type FormFields = keyof typeof INIT_FORM_VALUES;

const MyProfilePage = () => {
  const [profileForm, setProfileForm] = useState(INIT_FORM_VALUES);
  const [errorMessages, setErrorMessages] = useState({
    nickname: '',
    password: '',
    confirmPassword: '',
  });
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'password' && validateConfirmPassword) {
      setErrorMessages(prev => ({
        ...prev,
        confirmPassword:
          profileForm.confirmPassword === value ? '' : '비밀번호가 일치하지 않습니다.',
      }));
    }
  };
  const validateField = (name: FormFields, value: string) => {
    const rule = VALIDATION_RULES[name];
    if (!rule) return '';
    if (rule.validate(value, profileForm.password)) return '';
    return rule.errorMessage;
  };

  const handleInputBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setValidateConfirmPassword(true);
    }

    setErrorMessages(prev => ({
      ...prev,
      [name]: validateField(name as FormFields, value),
    }));
  };

  const isFormValid = () => {
    if (
      profileForm.nickname === '' &&
      profileForm.password === '' &&
      profileForm.confirmPassword === ''
    ) {
      return false;
    }

    if (profileForm.nickname !== '' && profileForm.nickname.length >= 10) {
      return false;
    }
    if (profileForm.password !== '') {
      if (profileForm.password.length < 8) return false;
      if (profileForm.confirmPassword !== profileForm.password) return false;
    }
    if (profileForm.password === '' && profileForm.confirmPassword !== '') {
      return false;
    }

    return true;
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) return console.log(`프로필 변경(임시) 닉네임 : ${profileForm.nickname}`);
  };

  const handleProfileImageUpload = (file: File) => {
    console.log('이미지 업로드:', file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideNavigationWrapper}>
        <SideNavigation defaultImage={profileImg} onImageUpload={handleProfileImageUpload} />
      </div>
      <ProfileForm
        nickname={profileForm.nickname}
        password={profileForm.password}
        confirmPassword={profileForm.confirmPassword}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        errors={errorMessages}
        isFormValid={isFormValid()}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default MyProfilePage;
