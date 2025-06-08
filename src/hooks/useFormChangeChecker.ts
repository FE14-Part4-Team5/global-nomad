import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { UserProfile } from '@/pages/my-experiences/example/example';
import type { MyProfileFormValues } from './useMyProfileUpdateForm';

export const useFormChangeChecker = (userData: UserProfile | undefined) => {
  const { watch } = useFormContext<MyProfileFormValues>();
  const [isFormChanged, setIsFormChanged] = useState(false);
  console.log(`${userData?.nickname} 과  ${userData?.profileImageUrl}`);
  useEffect(() => {
    const subscription = watch(values => {
      const nickname = values.nickname;
      const newPassword = values.newPassword;
      const newConfirmPassword = values.newConfirmPassword;

      const isNicknameChanged = nickname && nickname !== userData?.nickname;
      const isNewPasswordChanged = newPassword && newPassword === newConfirmPassword;
      setIsFormChanged(!!(isNicknameChanged || isNewPasswordChanged));
    });

    return () => subscription.unsubscribe();
  }, [watch, userData]);
  return isFormChanged;
};
