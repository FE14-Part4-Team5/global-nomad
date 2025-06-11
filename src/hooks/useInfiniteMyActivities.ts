import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { myActivitiesService } from '@/apis/myActivities';
import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';

export const useInfiniteMyActivities = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['myActivity'],
    queryFn: async ({ pageParam }): Promise<ActivitiesResponse> =>
      myActivitiesService.getMyActivities(pageParam as number),
    getNextPageParam: lastPage => (lastPage.activities.length > 0 ? lastPage.cursorId : undefined),
    initialPageParam: 0,
  });
};

export type ActivitiesResponse = {
  cursorId: number;
  totalCount: number;
  activities: MyExperienceCardProps[];
};
