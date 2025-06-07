/*POST oauth apps, OAuth 앱 등록*/
export interface OAuthParams {
  teamId: string;
}

export interface OAuthRequest {
  appKey: string;
  provider: 'google' | 'kakao';
}

export interface OAuthResponse {
  id: number;
  teamId: string;
  appKey: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

/*POST oauth signup provider, 간편 회원가입*/
export interface OAuthSignupProviderParams {
  teamId: string;
  provider: 'google' | 'kakao';
}

export interface OAuthSignupProviderRequest {
  nickname: string;
  redirectUri?: string;
  token: string;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface OAuthSignupProviderResponse {
  user: User;
  refreshToken: string;
  accessToken: string;
}

/*POST oauth signin provider, 간편 로그인*/
export interface OAuthSigninProviderParams {
  teamId: string;
  provider: 'google' | 'kakao';
}

export interface OAuthSigninProviderRequest {
  redirectUri?: string;
  token: string;
}

export interface OAuthSigninProviderResponse {
  user: User;
  refreshToken: string;
  accessToken: string;
}
