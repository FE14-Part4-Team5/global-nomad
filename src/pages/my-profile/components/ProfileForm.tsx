import Input from '@/components/input/Input';
import styles from './ProfileForm.module.css';
import Button from '@/components/button/Button';
import clsx from 'clsx';
import MyExperiencesHeader from '@/components/my-experiences-header/MyExperiencesHeader';
import { useMyProfileUpdateForm, type MyProfileFormValues } from '@/hooks/useMyProfileUpdateForm';

interface MyProfileFormProps {
  onClick: () => void;
  onSubmit: (data: MyProfileFormValues) => void;
}

const ProfileForm = ({ onClick, onSubmit }: MyProfileFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useMyProfileUpdateForm();

  return (
    <div className={styles.userInfoContainer}>
      <MyExperiencesHeader title="내 정보" subTitle="닉네임과 비밀번호를 수정하실 수있습니다." />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <Input
            title="닉네임"
            placeholder="정만철"
            isError={!!errors.nickname}
            errorMessage={errors.nickname?.message}
            {...register('nickname')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input title="이메일" placeholder="codeit@codeit.com" disabled />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type="password"
            title="비밀번호"
            placeholder="8자 이상 입력해주세요"
            isError={!!errors.newPassword}
            errorMessage={errors.newPassword?.message}
            showEyeIcon={true}
            {...register('newPassword')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호를 한번 더 입력해주세요"
            isError={!!errors.newConfirmPassword}
            errorMessage={errors.newConfirmPassword?.message}
            showEyeIcon={true}
            {...register('newConfirmPassword')}
          />
        </div>

        <div className={styles.formButtomWrapper}>
          <Button
            type="button"
            isActive={true}
            onClick={onClick}
            variant="secondary"
            className={clsx(styles.cancleButton, styles.commonProfileButton)}
          >
            취소하기
          </Button>
          <Button
            type="submit"
            isActive={isValid}
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
