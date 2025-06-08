import axios from 'axios';
import * as MyNotificationsType from '@/types/api/myNotificationsType';

const BASE_URL = import.meta.env.VITE_BASE_URL || '';

/*내 알림 리스트 조회*/
const getMyNotifications = async (
  params: MyNotificationsType.MyNotificationsParams,
  accessToken: string
): Promise<MyNotificationsType.GetMyNotificationsResponse> => {
  try {
    const { ...query } = params;

    const response = await axios.get<MyNotificationsType.GetMyNotificationsResponse>(
      `${BASE_URL}/my-notifications`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('내 알림 리스트 조회 실패:', error);
    throw new Error(error.response?.data?.message || '내 알림 리스트 조회 중 오류가 발생했습니다.');
  }
};

/*내 알림 삭제*/
const deleteNotification = async (
  params: MyNotificationsType.DeleteNotificationParams,
  accessToken: string
): Promise<void> => {
  try {
    const { notificationId } = params;

    await axios.delete(`${BASE_URL}/my-notifications/${notificationId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error: any) {
    console.error('내 알림 삭제 실패:', error);
    throw new Error(error.response?.data?.message || '내 알림 삭제 중 오류가 발생했습니다.');
  }
};

export const myNotificationsService = {
  getMyNotifications,
  deleteNotification,
};
