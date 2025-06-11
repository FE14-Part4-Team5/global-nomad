import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { myActivitiesService } from '@/apis/myActivities';
import type { MyActivitiesResponse } from '@/types/api/myActivitiesType';

export const useInfiniteMyActivities = ({ size = 5 }: { size?: number }) => {
  return useSuspenseInfiniteQuery<MyActivitiesResponse, Error>({
    queryKey: ['myActivities', size],
    queryFn: async ({ pageParam }) => {
      const params: { size: number; cursorId?: number } = { size };
      if (typeof pageParam === 'number' && pageParam > 0) {
        params.cursorId = pageParam;
      }
      return myActivitiesService.getMyActivities(params);
    },
    getNextPageParam: lastPage => (lastPage.activities.length > 0 ? lastPage.cursorId : undefined),
    initialPageParam: 0,
  });
};
