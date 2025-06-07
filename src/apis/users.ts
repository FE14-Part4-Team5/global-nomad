import axios from 'axios';
import * as UsersType from '@/types/api/usersType';

const BASE_URL = process.env.VITE_BASE_URL || '';

/*회원가입*/
const signUp = async (
  params: UsersType.SignUpParams,
  body: UsersType.SignUpRequest
): Promise<UsersType.SignUpResponse> => {
  try {
    const { teamId } = params;
    const response = await axios.post<UsersType.SignUpResponse>(
      `${BASE_URL}/${teamId}/users`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('회원가입 실패:', error);
    throw new Error(error.response?.data?.message || '회원가입 중 오류가 발생했습니다.');
  }
};

/*내 정보 조회*/
const getMe = async (
  params: UsersType.GetMeParams,
  accessToken: string
): Promise<UsersType.GetMeResponse> => {
  try {
    const { teamId } = params;
    const response = await axios.get<UsersType.GetMeResponse>(`${BASE_URL}/${teamId}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error('내 정보 조회 실패:', error);
    throw new Error(error.response?.data?.message || '내 정보 조회 중 오류가 발생했습니다.');
  }
};

/*내 정보 수정*/
const updateMe = async (
  params: UsersType.PatchMeParams,
  body: UsersType.PatchMeRequest,
  accessToken: string
): Promise<UsersType.PatchMeResponse> => {
  try {
    const { teamId } = params;
    const response = await axios.put<UsersType.PatchMeResponse>(
      `${BASE_URL}/${teamId}/users/me`,
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
    console.error('내 정보 수정 실패:', error);
    throw new Error(error.response?.data?.message || '내 정보 수정 중 오류가 발생했습니다.');
  }
};

/*프로필 이미지 url 생성*/
const createProfileImageUrl = async (
  params: UsersType.CreateImageUrlParams,
  body: UsersType.CreateImageUrlRequest,
  accessToken: string
): Promise<UsersType.CreateImageUrlResponse> => {
  try {
    const { teamId } = params;

    const formData = new FormData();
    formData.append('image', body.image);

    const response = await axios.post<UsersType.CreateImageUrlResponse>(
      `${BASE_URL}/${teamId}/users/me/image`,
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
    console.error('프로필 이미지 URL 생성 실패:', error);
    throw new Error(
      error.response?.data?.message || '프로필 이미지 URL 생성 중 오류가 발생했습니다.'
    );
  }
};

export const usersService = {
  signUp,
  getMe,
  updateMe,
  createProfileImageUrl,
};
