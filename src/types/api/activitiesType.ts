/*GET activities, 체험 리스트 조회*/
export interface GetActivitiesParams {
  teamId: string;
  method: 'offset' | 'cursor';
  cursorId?: number;
  category?: '문화 · 예술' | '식음료' | '스포츠' | '투어' | '관광' | '웰빙';
  keyword?: string;
  sort?: 'most_reviewed' | 'price_asc' | 'price_desc' | 'latest';
  page?: number;
  size?: number;
}

export interface Activity {
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
}

export interface GetActivitiesResponse {
  cursorId: number;
  totalCount: number;
  activities: Activity[];
}

/*POST activities, 체험 등록*/
export interface CreateActivityParams {
  teamId: string;
}

export interface ActivitySchedule {
  date: string;
  startTime: string;
  endTime: string;
}

export interface CreateActivityRequest {
  title: string;
  category: '문화 · 예술' | '식음료' | '스포츠' | '투어' | '관광' | '웰빙';
  description: string;
  address: string;
  price: number;
  schedules: ActivitySchedule[];
  bannerImageUrl: string;
  subImageUrls: string[];
}

export interface ActivitySubImage {
  imageUrl: string;
  id: number;
}

export interface ScheduleTime {
  id: number;
  startTime: string;
  endTime: string;
}

export interface ActivityScheduleWithTime {
  date: string;
  times: ScheduleTime[];
}

export interface CreateActivityResponse {
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
  subImages: ActivitySubImage[];
  schedules: ActivityScheduleWithTime[];
}

/*GET activityId, 체험 상세 조회*/
export interface GetActivityIdParams {
  teamId: string;
  activityId: number;
}

export interface ActivityScheduleWithId extends ActivitySchedule {
  id: number;
}

export interface GetActivityIdResponse {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImages: ActivitySubImage[];
  schedules: ActivityScheduleWithId[];
  reviewCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

/*GET available-schedule, 체험 예약 가능일 조회*/
export interface GetAvailableScheduleParams {
  teamId: string;
  activityId: number;
  year: string;
  month: string;
}

export type GetAvailableScheduleResponse = ActivityScheduleWithTime[];

/*GET reviews, 체험 리뷰 조회*/
export interface GetReviewsParams {
  teamId: string;
  activityId: number;
  page?: number;
  size?: number;
}

export interface Review {
  id: number;
  user: ReviewWithUser;
  activityId: number;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewWithUser {
  profileImageUrl: string;
  nickname: string;
  id: number;
}

export interface GetReviewsResponse {
  averageRating: number;
  totalCount: number;
  reviews: Review[];
}

/*POST reservations, 체험 예약 신청*/
export interface CreateReservationParams {
  teamId: string;
  activityId: number;
}

export interface CreateReservationRequest {
  scheduleId: number;
  headCount: number;
}

export interface CreateReservationResponse {
  id: number;
  teamId: string;
  userId: number;
  activityId: number;
  scheduleId: number;
  status: 'pending' | 'confirmed' | 'canceled';
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

/*POST activities image, 체험 이미지 URL 생성*/
export interface CreateActivityImageParams {
  teamId: string;
}

export interface CreateActivityImageRequest {
  image: File;
}

export interface CreateActivityImageResponse {
  activityImageUrl: string;
}
