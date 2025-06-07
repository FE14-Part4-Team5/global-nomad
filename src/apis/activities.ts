import axios from 'axios';
import * as ActivitiesType from '@/types/api/activitiesType';

const BASE_URL = process.env.VITE_BASE_URL || '';

/*체험 리스트 조회*/
const getActivities = async (
  params: ActivitiesType.GetActivitiesParams,
  accessToken: string
): Promise<ActivitiesType.GetActivitiesResponse> => {
  try {
    const { teamId, ...query } = params;

    const response = await axios.get<ActivitiesType.GetActivitiesResponse>(
      `${BASE_URL}/${teamId}/activities`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('체험 리스트 조회 실패:', error);
    throw new Error(error.response?.data?.message || '체험 리스트 조회 중 오류가 발생했습니다.');
  }
};

/*체험 등록*/
const createActivity = async (
  params: ActivitiesType.CreateActivityParams,
  body: ActivitiesType.CreateActivityRequest,
  accessToken: string
): Promise<ActivitiesType.CreateActivityResponse> => {
  try {
    const { teamId } = params;

    const response = await axios.post<ActivitiesType.CreateActivityResponse>(
      `${BASE_URL}/${teamId}/activities`,
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
    console.error('체험 등록 실패:', error);
    throw new Error(error.response?.data?.message || '체험 등록 중 오류가 발생했습니다.');
  }
};

/*체험 상세 조회*/
const getActivityId = async (params: ActivitiesType.GetActivityIdParams, accessToken: string) => {
  try {
    const { teamId, activityId } = params;

    const response = await axios.get<ActivitiesType.GetActivityIdResponse>(
      `${BASE_URL}/${teamId}/activities/${activityId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('체험 상세 조회 실패:', error);
    throw new Error(error.response?.data?.message || '체험 상세 조회 중 오류가 발생했습니다.');
  }
};

/*체험 예약 가능일 조회*/
const getActivityAvailableSchedule = async (
  params: ActivitiesType.GetAvailableScheduleParams,
  accessToken: string
): Promise<ActivitiesType.GetAvailableScheduleResponse> => {
  try {
    const { teamId, activityId, ...query } = params;

    const response = await axios.get<ActivitiesType.GetAvailableScheduleResponse>(
      `${BASE_URL}/${teamId}/activities/${activityId}/available-schedule`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('체험 예약 가능일 조회 실패:', error);
    throw new Error(
      error.response?.data?.message || '체험 예약 가능일 조회 중 오류가 발생했습니다.'
    );
  }
};

/*체험 리뷰 조회*/
const getReviews = async (
  params: ActivitiesType.GetReviewsParams,
  accessToken: string
): Promise<ActivitiesType.GetReviewsResponse> => {
  try {
    const { teamId, activityId, ...query } = params;

    const response = await axios.get<ActivitiesType.GetReviewsResponse>(
      `${BASE_URL}/${teamId}/activities/${activityId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('체험 리뷰 조회 실패:', error);
    throw new Error(error.response?.data?.message || '체험 리뷰 조회 중 오류가 발생했습니다.');
  }
};

/*체험 예약 신청*/
const createReservations = async (
  params: ActivitiesType.CreateReservationParams,
  body: ActivitiesType.CreateReservationRequest,
  accessToken: string
): Promise<ActivitiesType.CreateReservationResponse> => {
  try {
    const { teamId, activityId } = params;
    const response = await axios.post<ActivitiesType.CreateReservationResponse>(
      `${BASE_URL}/${teamId}/activities/${activityId}/reservations`,
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
    console.error('체험 예약 신청 실패:', error);
    throw new Error(error.response?.data?.message || '체험 예약 신청 중 오류가 발생했습니다.');
  }
};

/*체험 이미지 URL 생성*/
const getActivityImageUrl = async (
  params: ActivitiesType.CreateActivityImageParams,
  body: ActivitiesType.CreateActivityImageRequest,
  accessToken: string
): Promise<ActivitiesType.CreateActivityImageResponse> => {
  try {
    const { teamId } = params;

    const formData = new FormData();
    formData.append('image', body.image);

    const response = await axios.post<ActivitiesType.CreateActivityImageResponse>(
      `${BASE_URL}/${teamId}/activities/image`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('체험 이미지 URL 생성 실패:', error);
    throw new Error(
      error.response?.data?.message || '체험 이미지 URL 생성 중 오류가 발생했습니다.'
    );
  }
};

export const activitiesService = {
  getActivities,
  createActivity,
  getActivityId,
  getActivityAvailableSchedule,
  getReviews,
  createReservations,
  getActivityImageUrl,
};
