import type { OAuthApp, TokenPair, UserSummary } from './sharedType';

/*POST oauth apps, OAuth 앱 등록*/
export interface OAuthParams {
  teamId: string;
}

export interface OAuthRequest {
  appKey: string;
  provider: 'google' | 'kakao';
}

export type OAuthResponse = OAuthApp;

/*POST oauth signup provider, 간편 회원가입*/
export interface OAuthSignupProviderParams {
  teamId?: string;
  provider: 'google' | 'kakao';
}

export interface OAuthSignupProviderRequest {
  nickname: string;
  redirectUri?: string;
  token: string;
}

export interface OAuthSignupProviderResponse extends TokenPair {
  user: UserSummary;
}

/*POST oauth signin provider, 간편 로그인*/
export interface OAuthSigninProviderParams {
  teamId?: string;
  provider: 'google' | 'kakao';
}

export interface OAuthSigninProviderRequest {
  redirectUri?: string;
  token: string;
}

export interface OAuthSigninProviderResponse extends TokenPair {
  user: UserSummary;
}
