import Input from '@/components/Input/Input';
import styles from './ProfileForm.module.css';
import Button from '@/components/Button/Button';
import clsx from 'clsx';
import type { ChangeEvent } from 'react';
interface ProfileFormProps {
  nickname: string;
  password: string;
  confirmPassword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: { nickname: string; password: string; confirmPassword: string };
  isFormValid: boolean;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}
const ProfileForm = ({
  nickname,
  password,
  confirmPassword,
  onChange,
  onBlur,
  errors,
  isFormValid,
  onSubmit,
}: ProfileFormProps) => {
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.descriptionWrapper}>
        <h1 className={styles.userInfoTitle}>내 정보</h1>
        <p className={styles.userInfoDescription}>닉네임과 비밀번호를 수정하실 수있습니다.</p>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          title="닉네임"
          name="nickname"
          placeholder="정만철"
          padding="1.6rem 2rem"
          value={nickname}
          onChange={onChange}
          onBlur={onBlur}
          isError={!!errors.nickname}
          errorMessage={errors.nickname}
        />
        <Input title="이메일" padding="1.6rem 2rem" placeholder="codeit@codeit.com" />
        <Input
          type="password"
          title="비밀번호"
          name="password"
          placeholder="8자 이상 입력해주세요"
          padding="1.6rem 2rem"
          value={password}
          onChange={onChange}
          onBlur={onBlur}
          isError={!!errors.password}
          errorMessage={errors.password}
          showEyeIcon={true}
        />
        <Input
          type="password"
          title="비밀번호 확인"
          name="confirmPassword"
          padding="1.6rem 2rem"
          placeholder="비밀번호를 한번 더 입력해주세요"
          value={confirmPassword}
          onChange={onChange}
          onBlur={onBlur}
          isError={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
          showEyeIcon={true}
        />

        <div className={styles.formButtomWrapper}>
          <Button
            type="button"
            isActive={true}
            variant="secondary"
            className={clsx(styles.cancleButton, styles.commonProfileButton)}
          >
            취소하기
          </Button>
          <Button
            type="submit"
            isActive={isFormValid}
            variant="primary"
            className={clsx(styles.submitButton, styles.commonProfileButton)}
          >
            저장하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
