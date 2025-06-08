/*GET my-activities, 내 체험 리스트 조회*/
export interface MyActivitiesParams {
  teamId: string;
  cursorId?: number;
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
export interface MyActivitiesResponse {
  cursorId: number;
  totalCount: number;
  activities: Activity[];
}

/*GET reservation-dashboard, 내 체험 월별 예약 현황 조회*/
export interface ReservationDashboardParams {
  teamId: string;
  activityId: number;
  year: string;
  month: string;
}

export interface ReservationsWithDashboard {
  completed: number;
  confirmed: number;
  pending: number;
}

export interface ReservationDashboardResponse {
  date: string;
  reservations: ReservationsWithDashboard;
}

/*GET reserved-schedule, 내 체험 날짜별 예약 정보(신청, 승인, 거절)가 있는 스케줄 조회*/
export interface ReservedScheduleParams {
  teamId: string;
  activityId: number;
  date: string;
}

export interface ReservedScheduleWithCount {
  declined: number;
  confirmed: number;
  pending: number;
}

export interface ReservedScheduleResponse {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: ReservedScheduleWithCount;
}

/*GET reservations, 내 체험 예약 시간대별 예약 내역 조회 */
export interface ReservationsParams {
  teamId: string;
  activityId: number;
  cursorId?: number;
  size?: number;
  scheduleId: number;
  status: 'pending' | 'confirmed' | 'declined';
}

export interface Reservation {
  id: number;
  nickname: string;
  userId: number;
  teamId: string;
  activityId: number;
  scheduleId: number;
  status: string;
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetReservationsResponse {
  cursorId: number;
  totalCount: number;
  reservations: Reservation[];
  message: string;
}

/*PATCH reservationId, 내 체험 예약 상태(승인, 거절) 업데이트*/
export interface UpdateReservationParams {
  teamId: string;
  activityId: number;
  reservationId: number;
}

export interface UpdateReservationRequest {
  status: 'confirmed' | 'declined' | 'pending';
}

export interface UpdateReservationResponse {
  id: number;
  teamId: string;
  userId: number;
  activityId: number;
  scheduleId: number;
  status: 'pending' | 'confirmed' | 'declined';
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  message: string;
}

/*DELETE activityId, 내 체험 삭제*/
export interface DeleteActivityParams {
  teamId: string;
  activityId: number;
}

/*PATCH activityId, 내 체험 수정*/
export interface UpdateActivityParams {
  teamId: string;
  activityId: number;
}

export interface ScheduleToAdd {
  date: string;
  startTime: string;
  endTime: string;
}

export interface UpdateActivityRequest {
  title: string;
  category: '문화 · 예술' | '식음료' | '스포츠' | '투어' | '관광' | '웰빙';
  description: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImageIdsToRemove: number[];
  subImageUrlsToAdd: string[];
  scheduleIdsToRemove: number[];
  schedulesToAdd: ScheduleToAdd[];
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

export interface UpdateActivityResponse {
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
