import type { LoginBody, LoginResponse, ChangePasswordBody } from '../../types/api/auth';
import { handleError } from '../../utils/handleError';
import { useAuthStore } from '@/stores/auth';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

// POST: 로그인
// 로그인 요청을 보내고 LoginResponse 타입의 결과를 반환하는 비동기 함수
const postAuth = async (reqLoginBody: LoginBody): Promise<LoginResponse> => {
  try {
    // fetch는 JavaScript에서 서버에 요청을 보내는 함수
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqLoginBody), // 자바스크립트 객체를 JSON 문자열로 변환해 서버에 전송
    });

    if (!res.ok) {
      return handleError(res);
    }

    return res.json();
  } catch (error) {
    console.error('로그인 요청 실패:', error);
    throw new Error('로그인 요청 중 네트워크 오류가 발생했습니다.');
  }
};

// PUT: 비밀번호 변경
const putAuth = async (reqBody: ChangePasswordBody): Promise<void> => {
  const accessToken = useAuthStore.getState().accessToken;

  if (!accessToken) {
    throw new Error('사용자 인증 토큰이 없습니다.');
  }

  try {
    const res = await fetch(`${BASE_URL}/auth/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(reqBody),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || '비밀번호 변경 요청에 실패했습니다.');
    }
  } catch (error) {
    console.error('비밀번호 변경 요청 실패:', error);
    throw error;
  }
};

export const authService = {
  postAuth,
  putAuth,
};
