import axiosInstance from '@/apis/axiosInstance';
import * as MyNotificationsType from '@/types/api/myNotificationsType';
import { AxiosError } from 'axios';

/* 내 알림 리스트 조회 */
const getMyNotifications = async (
  params: MyNotificationsType.MyNotificationsParams
): Promise<MyNotificationsType.GetMyNotificationsResponse> => {
  try {
    const response = await axiosInstance.get<MyNotificationsType.GetMyNotificationsResponse>(
      '/my-notifications',
      {
        params,
      }
    );
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<{ message?: string }>;
    console.error('내 알림 리스트 조회 실패:', err);
    throw new Error(err.response?.data?.message || '내 알림 리스트 조회 중 오류가 발생했습니다.');
  }
};

/* 내 알림 삭제 */
const deleteNotification = async (
  params: MyNotificationsType.DeleteNotificationParams
): Promise<void> => {
  try {
    const { notificationId } = params;
    await axiosInstance.delete(`/my-notifications/${notificationId}`);
  } catch (error: unknown) {
    const err = error as AxiosError<{ message?: string }>;
    console.error('내 알림 삭제 실패:', err);
    throw new Error(err.response?.data?.message || '내 알림 삭제 중 오류가 발생했습니다.');
  }
};

export const myNotificationsService = {
  getMyNotifications,
  deleteNotification,
};
