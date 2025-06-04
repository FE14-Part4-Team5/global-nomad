import { useQuery } from '@tanstack/react-query';
import { getMyprofile } from '@/pages/my-experiences/example/example';
import type { UserProfile } from '@/pages/my-experiences/example/example';

export const useMyProfile = (teamId: string) => {
  return useQuery<UserProfile>({
    queryKey: ['myProfile', teamId],
    queryFn: () => getMyprofile(teamId),
  });
};
