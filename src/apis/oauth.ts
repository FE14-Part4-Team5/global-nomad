import axiosInstance from '@/apis/axiosInstance';
import * as OAuthType from '@/types/api/oauthType';
import { AxiosError } from 'axios';

/* 간편 로그인 APP 등록/수정 */
const OAuthApps = async (body: OAuthType.OAuthRequest): Promise<OAuthType.OAuthResponse> => {
  try {
    const response = await axiosInstance.post<OAuthType.OAuthResponse>('/oauth/apps', body);

    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.error('간편 로그인 APP 등록/수정 실패:', err);
    throw new Error(err.message || '간편 로그인 APP 등록/수정 중 오류가 발생했습니다.');
  }
};

/* 간편 회원가입 */
const OAuthSignUp = async (
  params: OAuthType.OAuthSignupProviderParams,
  body: OAuthType.OAuthSignupProviderRequest
): Promise<OAuthType.OAuthSignupProviderResponse> => {
  try {
    const { provider } = params;
    const response = await axiosInstance.post<OAuthType.OAuthSignupProviderResponse>(
      `/oauth/sign-up/${provider}`,
      body
    );

    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<{ message?: string }>;
    console.error('간편 회원가입 실패:', err);
    throw new Error(err.response?.data?.message || '간편 회원가입 중 오류가 발생했습니다.');
  }
};

/* 간편 로그인 */
const OAuthSignIn = async (
  params: OAuthType.OAuthSigninProviderParams,
  body: OAuthType.OAuthSigninProviderRequest
): Promise<OAuthType.OAuthSigninProviderResponse> => {
  try {
    const { provider } = params;
    const response = await axiosInstance.post<OAuthType.OAuthSigninProviderResponse>(
      `/oauth/sign-in/${provider}`,
      body
    );

    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<{ message?: string }>;
    console.error('간편 로그인 실패:', err);
    throw new Error(err.response?.data?.message || '간편 로그인 중 오류가 발생했습니다.');
  }
};

export const oauthService = {
  OAuthApps,
  OAuthSignUp,
  OAuthSignIn,
};
