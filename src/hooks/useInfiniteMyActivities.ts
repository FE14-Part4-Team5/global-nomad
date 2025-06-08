import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyActivities } from '@/pages/my-experiences/example/example';
import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';

export const useInfiniteMyActivities = (teamId: string) => {
  return useInfiniteQuery<ActivitiesResponse, Error, ActivitiesResponse, [string, string]>({
    queryKey: ['myActivity', teamId],
    queryFn: ({ pageParam }) => getMyActivities(teamId, pageParam as number),
    getNextPageParam: lastPage => (lastPage.activities.length > 0 ? lastPage.cursorId : undefined),
    initialPageParam: 0,
  });
};

export type ActivitiesResponse = {
  cursorId: number;
  totalCount: number;
  activities: MyExperienceCardProps[];
};
