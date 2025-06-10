import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { GetMeResponse } from '@/types/api/usersType';
import type { MyProfileFormValues } from './useMyProfileUpdateForm';

export const useFormChangeChecker = (userData: GetMeResponse | undefined) => {
  const { watch } = useFormContext<MyProfileFormValues>();
  const [isFormChanged, setIsFormChanged] = useState(false);

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
