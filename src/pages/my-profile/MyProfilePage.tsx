import SideNavigation from '@/components/side-navigation/SideNavigation';
import profileImg from '@/assets/icons/profile_size=lg.svg';
import styles from './MyProfilePage.module.css';
import ProfileForm from './components/ProfileForm';
import type { MyProfileFormValues } from '@/hooks/useMyProfileForm';
const MyProfilePage = () => {
  const handleProfileSubmit = async (data: MyProfileFormValues) => {
    console.log(`제출 완료 ${data.nickname} ${data.newPassword} ${data.newConfirmPassword}`);
  };

  const handleProfileImageUpload = (file: File) => {
    console.log('이미지 업로드:', file);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sideNavigationWrapper}>
        <SideNavigation defaultImage={profileImg} onImageUpload={handleProfileImageUpload} />
      </div>
      <ProfileForm onSubmit={handleProfileSubmit} />
    </div>
  );
};
export default MyProfilePage;
