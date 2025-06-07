import axios from 'axios';
import * as AuthType from '@/types/api/authType';

const BASE_URL = process.env.VITE_BASE_URL || '';

/*로그인*/
const login = async (
  params: AuthType.LoginParams,
  body: AuthType.LoginRequest,
  accessToken: string
): Promise<AuthType.LoginResponse> => {
  try {
    const { teamId } = params;
    const response = await axios.post<AuthType.LoginResponse>(
      `${BASE_URL}/${teamId}/auth/login`,
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
    console.error('로그인 실패:', error);
    throw new Error(error.response?.data?.message || '로그인 중 오류가 발생했습니다.');
  }
};

const tokens = async (
  params: AuthType.TokenParams,
  accessToken: string
): Promise<AuthType.TokenResponse> => {
  try {
    const { teamId } = params;
    const response = await axios.post<AuthType.TokenResponse>(
      `${BASE_URL}/${teamId}/auth/tokens`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('토큰 갱신 실패:', error);
    throw new Error(error.response?.data?.message || '토큰 갱신 중 오류가 발생했습니다.');
  }
};

export const authService = {
  login,
  tokens,
};
