import axios from 'axios';
import { authService } from '@/apis/auth';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
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
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('Refresh token not found');

        const newTokens = await authService.tokens(refreshToken);
        localStorage.setItem('accessToken', newTokens.accessToken);
        localStorage.setItem('refreshToken', newTokens.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
