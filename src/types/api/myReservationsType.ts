/*GET my-reservations, 내 예약 리스트 조회*/
export interface MyReservationsParams {
  teamId: string;
  cursorId?: number;
  size?: number;
  status: 'pending' | 'confirmed' | 'declined' | 'canceled' | 'completed';
}

export interface ReservationActivity {
  bannerImageUrl: string;
  title: string;
  id: number;
}

export interface Reservation {
  id: number;
  teamId: string;
  userId: number;
  activity: ReservationActivity;
  scheduleId: number;
  status: 'pending' | 'confirmed' | 'declined' | 'canceled' | 'completed';
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetMyReservationsResponse {
  cursorId: number;
  reservations: Reservation[];
  totalCount: number;
}

/*PATCH reservationId, 내 예약 수정(취소)*/
export interface UpdateMyReservationParams {
  teamId: string;
  reservationId: number;
}

export interface UpdateMyReservationRequest {
  status: 'canceled';
}

export interface UpdateMyReservationResponse {
  id: number;
  teamId: string;
  userId: number;
  activityId: number;
  scheduleId: number;
  status: 'pending' | 'confirmed' | 'completed' | 'canceled';
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

/*POST reviews, 내 예약 리뷰 작성*/
export interface CreateMyReservationReviewParams {
  teamId: string;
  reservationId: number;
}

export interface CreateMyReservationReviewRequest {
  rating: number;
  content: string;
}

export interface CreateMyReservationReviewResponse {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  content: string;
  rating: number;
  userId: number;
  activityId: number;
  teamId: string;
  id: number;
}
