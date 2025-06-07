import SideNavigation from '@/components/side-navigation/SideNavigation';
import profileImg from '@/assets/icons/profile_size=lg.svg';
import styles from './MyProfilePage.module.css';
import ProfileForm from './components/ProfileForm';
import type { MyProfileFormValues } from '@/hooks/useMyProfileUpdateForm';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MyProfilePage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (location.pathname === '/my-profile' && !isDesktop) {
      setIsEdit(true);
    }
  }, [location.pathname, isDesktop]);

  const handleProfileSubmit = async (data: MyProfileFormValues) => {
    console.log(`제출 완료 ${data.nickname} ${data.newPassword} ${data.newConfirmPassword}`);
    setIsEdit(false);
  };

  const handleCancelUpdate = () => {
    console.log('취소');
    setIsEdit(false);
  };

  const handleProfileImageUpload = (file: File) => {
    console.log('이미지 업로드:', file);
  };

  return (
    <div className={styles.container}>
      {(isDesktop || !isEdit) && (
        <div className={styles.sideNavigationWrapper}>
          <SideNavigation
            defaultImage={profileImg}
            onImageUpload={handleProfileImageUpload}
            onNavItemClick={() => setIsEdit(true)}
          />
        </div>
      )}
      {(isDesktop || isEdit) && (
        <div className={styles.profileFormWrapper}>
          <ProfileForm onClick={handleCancelUpdate} onSubmit={handleProfileSubmit} />
        </div>
      )}
    </div>
  );
};

export default MyProfilePage;
