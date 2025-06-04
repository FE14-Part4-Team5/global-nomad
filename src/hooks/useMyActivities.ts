import { useQuery } from '@tanstack/react-query';
import { getMyActivities } from '@/pages/my-experiences/example/example';
import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';

export const useMyActivities = (teamId: string) => {
  return useQuery<{ activities: MyExperienceCardProps[] }>({
    queryKey: ['myActivity', teamId],
    queryFn: () => getMyActivities(teamId),
  });
};
