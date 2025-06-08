export type UsersResponse = {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

/*POST users, 회원가입*/
export interface SignUpParams {
  teamId: string;
}

export interface SignUpRequest {
  email: string;
  nickname: string;
  password: string;
}

export type SignUpResponse = UsersResponse;

/*GET users me, 내 정보 조회*/
export interface GetMeParams {
  teamId: string;
}

export type GetMeResponse = UsersResponse;

/*PATCH users me, 내 정보 수정*/
export interface PatchMeParams {
  teamId: string;
}

export interface PatchMeRequest {
  nickname?: string;
  profileImageUrl?: string;
  newPassword?: string;
}

export type PatchMeResponse = UsersResponse;

/*POST users me image, 프로필 이미지 url 생성*/
export interface CreateImageUrlParams {
  teamId: string;
}

export interface CreateImageUrlRequest {
  image: File;
}

export interface CreateImageUrlResponse {
  profileImageUrl: string;
}
