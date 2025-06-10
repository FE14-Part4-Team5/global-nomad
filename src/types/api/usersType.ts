import type {
  UserSummary,
  UpdateProfileRequest,
  ProfileImageResponse,
  CreateImageRequest,
} from './sharedType';

/*POST users, 회원가입*/
export interface SignUpRequest {
  email: string;
  nickname: string;
  password: string;
}

export type SignUpResponse = UserSummary;

/*GET users me, 내 정보 조회*/
export type GetMeResponse = UserSummary;

/*PATCH users me, 내 정보 수정*/
export type PatchMeRequest = UpdateProfileRequest;
export type PatchMeResponse = UserSummary;

/*POST users me image, 프로필 이미지 url 생성*/
export type CreateImageUrlRequest = CreateImageRequest;
export type CreateImageUrlResponse = ProfileImageResponse;
