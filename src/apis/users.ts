import axios from 'axios';
import axiosInstance from '@/apis/axiosInstance';
import * as UsersType from '@/types/api/usersType';

const BASE_URL = import.meta.env.VITE_BASE_URL || '';

/* 회원가입*/
const signUp = async (body: UsersType.SignUpRequest): Promise<UsersType.SignUpResponse> => {
  try {
    const response = await axios.post<UsersType.SignUpResponse>(`${BASE_URL}/users`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error: any) {
    console.error('회원가입 실패:', error);
    throw new Error(error.message || '회원가입 중 오류가 발생했습니다.');
  }
};

/* 내 정보 조회 */
const getMe = async (): Promise<UsersType.GetMeResponse> => {
  try {
    const response = await axiosInstance.get<UsersType.GetMeResponse>('/users/me');
    return response.data;
  } catch (error: any) {
    console.error('내 정보 조회 실패:', error);
    throw new Error(error.message || '내 정보 조회 중 오류가 발생했습니다.');
  }
};

/* 내 정보 수정 */
const updateMe = async (body: UsersType.PatchMeRequest): Promise<UsersType.PatchMeResponse> => {
  try {
    const response = await axiosInstance.patch<UsersType.PatchMeResponse>('/users/me', body);
    return response.data;
  } catch (error: any) {
    console.error('내 정보 수정 실패:', error);
    throw new Error(error.message || '내 정보 수정 중 오류가 발생했습니다.');
  }
};

/* 프로필 이미지 url 생성 */
const createProfileImageUrl = async (
  body: UsersType.CreateImageUrlRequest
): Promise<UsersType.CreateImageUrlResponse> => {
  try {
    const formData = new FormData();
    formData.append('image', body.image);

    const response = await axiosInstance.post<UsersType.CreateImageUrlResponse>(
      '/users/me/image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('프로필 이미지 URL 생성 실패:', error);
    throw new Error(error.message || '프로필 이미지 URL 생성 중 오류가 발생했습니다.');
  }
};

export const usersService = {
  signUp,
  getMe,
  updateMe,
  createProfileImageUrl,
};
