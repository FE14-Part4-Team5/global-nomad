import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { activitiesService } from '@/apis/activities';
import { myActivitiesService } from '@/apis/myActivities';

export interface SubImage {
  id: number;
  imageUrl: string;
}

export interface Schedule {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

export interface ExperienceResponse {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
  subImages: SubImage[];
  schedules: Schedule[];
}

export interface ReserveExperiencePayload {
  scheduleId: number;
  headCount: number;
}

export interface Review {
  id: number;
  user: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  activityId: number;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewResponse {
  averageRating: number;
  totalCount: number;
  reviews: Review[];
}

export const useExperienceDetail = (teamId: string, activityId: number) => {
  return useQuery<ExperienceResponse>({
    queryKey: ['experienceDetail', teamId, activityId],
    queryFn: () => activitiesService.getActivityId({ teamId, activityId }),
  });
};

export const useReserveExperience = (teamId: string, activityId: number) => {
  return useMutation({
    mutationFn: (payload: ReserveExperiencePayload) =>
      activitiesService.createReservations({ teamId, activityId }, payload),
  });
};

export const useDeleteExperience = (teamId: string, activityId: number) => {
  return useMutation({
    mutationFn: () => myActivitiesService.deleteActivity({ teamId, activityId }),
  });
};

export const useExperienceReviews = (teamId: string, activityId: number, page = 1, size = 3) => {
  return useQuery<ReviewResponse>({
    queryKey: ['experienceReviews', teamId, activityId, page, size],
    queryFn: () => activitiesService.getReviews({ teamId, activityId, page, size }),
    placeholderData: keepPreviousData,
  });
};
