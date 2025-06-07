/*POST login, 로그인*/
export interface LoginParams {
  teamId: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginWithUser {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl?: string;
  createdAt: string;
  updatedAt: string;
}
export interface LoginResponse {
  user: LoginWithUser[];
  accessToken: string;
  refreshToken: string;
}

/*POST tokens, 토큰 재발급*/
export interface TokenParams {
  teamId: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}
