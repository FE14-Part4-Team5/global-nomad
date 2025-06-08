import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import {
  getExperienceDetail,
  getExperienceReviews,
  reserveExperience,
  deleteExperience,
} from '@/pages/detail/example/example';

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

export interface ExperienceDetailProps {
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
  return useQuery<ExperienceDetailProps>({
    queryKey: ['experienceDetail', teamId, activityId],
    queryFn: () => getExperienceDetail(teamId, activityId),
  });
};

export const useReserveExperience = (teamId: string, activityId: number) => {
  return useMutation({
    mutationFn: (payload: ReserveExperiencePayload) =>
      reserveExperience(teamId, activityId, payload),
  });
};

export const useDeleteExperience = (teamId: string, activityId: number) => {
  return useMutation({
    mutationFn: () => deleteExperience(teamId, activityId),
  });
};

export const useExperienceReviews = (teamId: string, activityId: number, page = 1, size = 3) => {
  return useQuery<ReviewResponse>({
    queryKey: ['experienceReviews', teamId, activityId, page, size],
    queryFn: () => getExperienceReviews(teamId, activityId, page, size),
  });
};
