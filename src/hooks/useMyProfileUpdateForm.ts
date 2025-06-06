import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const myProfileSchema = z
  .object({
    nickname: z.string().max(10, { message: '10자 이하로 작성해주세요' }),
    newPassword: z.string().min(8, { message: '8자 이상 입력해주세요' }),
    newConfirmPassword: z.string(),
  })
  .refine(data => data.newPassword === data.newConfirmPassword, {
    path: ['newConfirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type MyProfileFormValues = z.infer<typeof myProfileSchema>;

export const useMyProfileUpdateForm = () => {
  return useForm<MyProfileFormValues>({
    resolver: zodResolver(myProfileSchema),
    mode: 'onBlur',
    defaultValues: {
      nickname: '',
      newPassword: '',
      newConfirmPassword: '',
    },
  });
};
