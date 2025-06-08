import { usersService } from '@/pages/my-profile/example/user.service';
import type {
  CreateImageUrlRequest,
  CreateImageUrlResponse,
} from '@/pages/my-profile/example/usertypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateImageUrlMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<CreateImageUrlResponse, Error, CreateImageUrlRequest>({
    mutationFn: async (body: CreateImageUrlRequest) => {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('Access token is missing');
      return usersService.createProfileImageUrl(body, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] });
    },
  });
};
