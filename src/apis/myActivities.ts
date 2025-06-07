import axios from 'axios';
import * as MyActivitiesType from '@/types/api/myActivitiesType';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

/*내 체험 리스트 조회*/
const getMyActivities = async (
  params: MyActivitiesType.MyActivitiesParams,
  accessToken: string
): Promise<MyActivitiesType.MyActivitiesResponse> => {
  try {
    const { teamId } = params;

    const response = await axios.get<MyActivitiesType.MyActivitiesResponse>(
      `${BASE_URL}/${teamId}/my-activities`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 체험 리스트 조회 실패:', error);
    throw new Error(error.response?.data?.message || '내 체험 리스트 조회 중 오류가 발생했습니다.');
  }
};

/*내 체험 월별 예약 현황 조회*/
const getReservationDashboard = async (
  params: MyActivitiesType.ReservationDashboardParams,
  accessToken: string
): Promise<MyActivitiesType.ReservationDashboardResponse> => {
  try {
    const { teamId, activityId, ...query } = params;

    const response = await axios.get<MyActivitiesType.ReservationDashboardResponse>(
      `${BASE_URL}/${teamId}/my-activities/${activityId}/reservation-dashboard`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 체험 월별 예약 현황 조회 실패:', error);
    throw new Error(
      error.response?.data?.message || '내 체험 월별 예약 현황 조회 중 오류가 발생했습니다.'
    );
  }
};

/*내 체험 날짜별 예약 정보(신청, 승인, 거절)가 있는 스케줄 조회*/
const getReservedSchedule = async (
  params: MyActivitiesType.ReservedScheduleParams,
  accessToken: string
): Promise<MyActivitiesType.ReservedScheduleResponse> => {
  try {
    const { teamId, activityId, ...query } = params;

    const response = await axios.get<MyActivitiesType.ReservedScheduleResponse>(
      `${BASE_URL}/${teamId}/my-activities/${activityId}/reserved-schedule`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 체험 날짜별 예약 정보 조회 실패:', error);
    throw new Error(
      error.response?.data?.message || '내 체험 날짜별 예약 정보 조회 중 오류가 발생했습니다.'
    );
  }
};

/*내 체험 예약 시간대별 예약 내역 조회*/
const getReservations = async (
  params: MyActivitiesType.ReservationsParams,
  accessToken: string
): Promise<MyActivitiesType.GetReservationsResponse> => {
  try {
    const { teamId, activityId, ...query } = params;

    const response = await axios.get<MyActivitiesType.GetReservationsResponse>(
      `${BASE_URL}/${teamId}/my-activities/${activityId}/reservations`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 체험 예약 시간대별 예약 내역 조회 실패:', error);
    throw new Error(
      error.response?.data?.message ||
        '내 체험 예약 시간대별 예약 내역 조회 중 오류가 발생했습니다.'
    );
  }
};

/*내 체험 예약 상태(승인, 거절) 업데이트*/
const updateReservation = async (
  params: MyActivitiesType.UpdateReservationParams,
  body: MyActivitiesType.UpdateReservationRequest,
  accessToken: string
): Promise<MyActivitiesType.UpdateReservationResponse> => {
  try {
    const { teamId, activityId, reservationId } = params;

    const response = await axios.patch<MyActivitiesType.UpdateReservationResponse>(
      `${BASE_URL}/${teamId}/my-activities/${activityId}/reservations/${reservationId}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 체험 예약 상태 업데이트 실패:', error);
    throw new Error(
      error.response?.data?.message || '내 체험 예약 상태 업데이트 중 오류가 발생했습니다.'
    );
  }
};

/*내 체험 삭제*/
const deleteActivity = async (
  params: MyActivitiesType.DeleteActivityParams,
  accessToken: string
): Promise<void> => {
  try {
    const { teamId, activityId } = params;

    await axios.delete(`${BASE_URL}/${teamId}/my-activities/${activityId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error: any) {
    console.error('내 체험 삭제 실패:', error);
    throw new Error(error.response?.data?.message || '내 체험 삭제 중 오류가 발생했습니다.');
  }
};

/*내 체험 수정*/
const updateActivity = async (
  params: MyActivitiesType.UpdateActivityParams,
  body: MyActivitiesType.UpdateActivityRequest,
  accessToken: string
): Promise<MyActivitiesType.UpdateActivityResponse> => {
  try {
    const { teamId, activityId } = params;

    const response = await axios.patch<MyActivitiesType.UpdateActivityResponse>(
      `${BASE_URL}/${teamId}/my-activities/${activityId}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 체험 수정 실패:', error);
    throw new Error(error.response?.data?.message || '내 체험 수정 중 오류가 발생했습니다.');
  }
};

export const myActivitiesService = {
  getMyActivities,
  getReservationDashboard,
  getReservedSchedule,
  getReservations,
  updateReservation,
  deleteActivity,
  updateActivity,
};
