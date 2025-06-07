import axios from 'axios';
import * as MyReservationsType from '@/types/api/myReservationsType';

const BASE_URL = process.env.VITE_BASE_URL || '';

/*내 예약 리스트 조회*/
const getMyReservations = async (
  params: MyReservationsType.MyReservationsParams,
  accessToken: string
): Promise<MyReservationsType.GetMyReservationsResponse> => {
  try {
    const { ...query } = params;

    const response = await axios.get<MyReservationsType.GetMyReservationsResponse>(
      `${BASE_URL}/my-reservations`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 예약 리스트 조회 실패:', error);
    throw new Error(error.response?.data?.message || '내 예약 리스트 조회 중 오류가 발생했습니다.');
  }
};

/*내 예약 수정(취소)*/
const updateMyReservation = async (
  params: MyReservationsType.UpdateMyReservationParams,
  accessToken: string
): Promise<MyReservationsType.UpdateMyReservationResponse> => {
  try {
    const { reservationId } = params;

    const response = await axios.patch<MyReservationsType.UpdateMyReservationResponse>(
      `${BASE_URL}/my-reservations/${reservationId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 예약 수정(취소) 실패:', error);
    throw new Error(error.response?.data?.message || '내 예약 수정(취소) 중 오류가 발생했습니다.');
  }
};

/*내 예약 리뷰 작성*/
const createMyReservationReview = async (
  params: MyReservationsType.CreateMyReservationReviewParams,
  accessToken: string
): Promise<MyReservationsType.CreateMyReservationReviewResponse> => {
  try {
    const { reservationId } = params;

    const response = await axios.post<MyReservationsType.CreateMyReservationReviewResponse>(
      `${BASE_URL}/my-reservations/${reservationId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 예약 리뷰 작성 실패:', error);
    throw new Error(error.response?.data?.message || '내 예약 리뷰 작성 중 오류가 발생했습니다.');
  }
};

export const myReservationsService = {
  getMyReservations,
  updateMyReservation,
  createMyReservationReview,
};
