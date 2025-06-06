import SideNavigation from '@/components/side-navigation/SideNavigation';
import profileImg from '@/assets/icons/profile_size=lg.svg';
import styles from './MyProfilePage.module.css';
import ProfileForm from './components/ProfileForm';
import type { MyProfileFormValues } from '@/hooks/useMyProfileUpdateForm';
import { useNavigate } from 'react-router-dom';

const MyProfilePage = () => {
  const navigate = useNavigate();
  const handleProfileSubmit = async (data: MyProfileFormValues) => {
    console.log(`제출 완료 ${data.nickname} ${data.newPassword} ${data.newConfirmPassword}`);
  };

  const handleCancelUpdate = () => {
    //임시
    console.log('취소');
    navigate(-1);
  };
  const handleProfileImageUpload = (file: File) => {
    console.log('이미지 업로드:', file);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sideNavigationWrapper}>
        <SideNavigation defaultImage={profileImg} onImageUpload={handleProfileImageUpload} />
      </div>
      <div className={styles.profileFormWrapper}>
        <ProfileForm onClick={handleCancelUpdate} onSubmit={handleProfileSubmit} />
      </div>
    </div>
  );
};
export default MyProfilePage;
