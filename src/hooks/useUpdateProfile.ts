import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usersService } from '@/pages/my-profile/example/user.service';
import type { PatchMeRequest, PatchMeResponse } from '@/pages/my-profile/example/usertypes';

export const useUpdateMyProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<PatchMeResponse, Error, PatchMeRequest>({
    mutationFn: async (body: PatchMeRequest) => {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('Access token is missing');
      return usersService.updateMe(body, token);
    },
    onSuccess: body => {
      console.log(`쿼리-저장 완료: ${body.nickname} ${body.profileImageUrl}`);

      queryClient.invalidateQueries({ queryKey: ['myProfile'] });
    },
    onError: () => {
      console.log('쿼리-저장 실패');
    },
  });
};
