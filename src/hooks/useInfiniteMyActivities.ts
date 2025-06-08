import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getMyActivities } from '@/pages/my-experiences/example/example';
import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';

export const useInfiniteMyActivities = (teamId: string) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['myActivity', teamId],
    queryFn: async ({ pageParam }): Promise<ActivitiesResponse> =>
      getMyActivities(teamId, pageParam as number),
    getNextPageParam: lastPage => (lastPage.activities.length > 0 ? lastPage.cursorId : undefined),
    initialPageParam: 0,
  });
};

export type ActivitiesResponse = {
  cursorId: number;
  totalCount: number;
  activities: MyExperienceCardProps[];
};
