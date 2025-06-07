import axios from 'axios';
import * as OAuthType from '@/types/api/oauthType';

const BASE_URL = process.env.VITE_BASE_URL || '';

/*간편 로그인 APP 등록/수정*/
const OAuthApps = async (
  params: OAuthType.OAuthParams,
  body: OAuthType.OAuthRequest,
  accessToken: string
): Promise<OAuthType.OAuthResponse> => {
  try {
    const { teamId } = params;
    const response = await axios.post<OAuthType.OAuthResponse>(
      `${BASE_URL}/${teamId}/oauth/apps`,
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
    console.error('간편 로그인 APP 등록/수정 실패:', error);
    throw new Error(
      error.response?.data?.message || '간편 로그인 APP 등록/수정 중 오류가 발생했습니다.'
    );
  }
};

/*간편 회원가입*/
const OAuthSignUp = async (
  params: OAuthType.OAuthSignupProviderParams,
  body: OAuthType.OAuthSignupProviderRequest,
  accessToken: string
): Promise<OAuthType.OAuthSignupProviderResponse> => {
  try {
    const { teamId, provider } = params;
    const response = await axios.post<OAuthType.OAuthSignupProviderResponse>(
      `${BASE_URL}/${teamId}/oauth/sign-up/${provider}`,
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
    console.error('간편 회원가입 실패:', error);
    throw new Error(error.response?.data?.message || '간편 회원가입 중 오류가 발생했습니다.');
  }
};

/*간편 로그인*/
const OAuthSignIn = async (
  params: OAuthType.OAuthSigninProviderParams,
  body: OAuthType.OAuthSigninProviderRequest,
  accessToken: string
): Promise<OAuthType.OAuthSigninProviderResponse> => {
  try {
    const { teamId, provider } = params;
    const response = await axios.post<OAuthType.OAuthSigninProviderResponse>(
      `${BASE_URL}/${teamId}/oauth/sign-in/${provider}`,
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
    console.error('간편 로그인 실패:', error);
    throw new Error(error.response?.data?.message || '간편 로그인 중 오류가 발생했습니다.');
  }
};

export const oauthService = {
  OAuthApps,
  OAuthSignUp,
  OAuthSignIn,
};
