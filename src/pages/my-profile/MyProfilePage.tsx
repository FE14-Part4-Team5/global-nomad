import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useUpdateMyProfileMutation } from '@/hooks/useUpdateProfile';
import { useCreateImageUrlMutation } from '@/hooks/useCreateImageUrl';
import { useMyProfile } from '@/hooks/useMyProfile';
import { useMyProfileUpdateForm, type MyProfileFormValues } from '@/hooks/useMyProfileUpdateForm';
import useViewPortSize from '@/hooks/useViewPortSize';
import ExampleLogin from '@/pages/my-experiences/example/ExampleLogin';
import SideNavigation from '@/components/side-navigation/SideNavigation';
import ProfileForm from './components/ProfileForm';
import defaultProfileImg from '@/assets/icons/profile_size=lg.svg';
import styles from './MyProfilePage.module.css';

const MyProfilePage = () => {
  const methods = useMyProfileUpdateForm();
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const location = useLocation();
  const { mutate: updateMutate } = useUpdateMyProfileMutation();
  const { mutate: createMutate } = useCreateImageUrlMutation();
  const { viewportSize } = useViewPortSize();
  const teamId = '14-5';
  const {
    data: userData,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useMyProfile(teamId);
  const [profileImageUrl, setProfileImageUrl] = useState(userData?.profileImageUrl || '');
  const isProfileChanged = !!profileImageUrl && profileImageUrl !== userData?.profileImageUrl;

  useEffect(() => {
    if (location.pathname === '/my-profile' && viewportSize === 'mobile') {
      setIsEdit(prev => !prev);
    }
  }, [location.pathname, viewportSize]);
  if (isProfileLoading) return <ExampleLogin />;
  if (isProfileError) return <ExampleLogin />;

  const handleCancelUpdate = () => {
    setIsEdit(prev => !prev);
  };

  const handleProfileSubmit = async (data: MyProfileFormValues) => {
    updateMutate(
      {
        nickname: data.nickname,
        newPassword: data.newPassword,
        profileImageUrl: profileImageUrl,
      },
      {
        onSuccess: async () => {
          //toast 기능 추가 고민중
          await queryClient.invalidateQueries({ queryKey: ['myProfile'] });
          methods.reset({
            nickname: '',
            newPassword: '',
            newConfirmPassword: '',
          });
          setIsEdit(prev => !prev);
        },
        onError: () => {
          //toast 기능 추가 고민중
          console.error();
        },
      }
    );
  };

  const handleProfileImageUpload = (file: File) => {
    createMutate(
      { image: file },
      {
        onSuccess: data => {
          setProfileImageUrl(data.profileImageUrl);
        },
        onError: () => {
          console.error();
        },
      }
    );
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        {(viewportSize !== 'mobile' || !isEdit) && (
          <div className={styles.sideNavigationWrapper}>
            <SideNavigation
              defaultImage={userData?.profileImageUrl || defaultProfileImg}
              onImageUpload={handleProfileImageUpload}
              onNavItemClick={() => setIsEdit(true)}
            />
          </div>
        )}
        {(viewportSize !== 'mobile' || isEdit) && (
          <div className={styles.profileFormWrapper}>
            <ProfileForm
              onClick={handleCancelUpdate}
              onSubmit={handleProfileSubmit}
              userData={userData}
              isProfileChanged={isProfileChanged}
            />
          </div>
        )}
      </div>
    </FormProvider>
  );
};
export default MyProfilePage;
