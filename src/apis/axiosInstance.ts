import axios from 'axios';
import { authService } from '@/apis/auth';
import { useAuthStore } from '@/stores/useAuthStore';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(config => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = useAuthStore.getState().refreshToken;
        if (!refreshToken) throw new Error('Refresh token not found');

        const newTokens = await authService.tokens(refreshToken);
        useAuthStore.getState().setTokens(newTokens.accessToken, newTokens.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
        useAuthStore.getState().clearTokens();
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

/* 

✅ [1] 사용자가 axiosInstance로 API 요청 → ex) /users/me

✅ [2] 요청 인터셉터 실행
     → localStorage에서 accessToken을 꺼내 Authorization 헤더에 자동 추가

✅ [3] 서버가 200 OK → 응답 통과

🛑 or

❗ [4] 서버가 401 Unauthorized 응답
     → accessToken이 만료되었을 가능성

✅ [5] refreshToken을 꺼내서 /auth/tokens로 토큰 재발급 요청

✅ [6] 새 accessToken, refreshToken을 localStorage에 저장

✅ [7] 실패했던 원래 요청을 새 accessToken으로 다시 보내기 (재시도)

🛑 [8] 만약 refreshToken도 만료됐거나 에러나면
     → catch 블록 실행 + 최종적으로 에러 반환

*/
