import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userId?: string | null;
  setTokens: (access: string, refresh: string) => void;
  setUserId: (userId: string) => void;
  clearUserId: () => void;
  clearTokens: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    set => ({
      accessToken: null,
      refreshToken: null,
      userId: null,
      setTokens: (access, refresh) => set({ accessToken: access, refreshToken: refresh }),
      clearTokens: () => set({ accessToken: null, refreshToken: null }),
      setUserId: userId => set({ userId }),
      clearUserId: () => set({ userId: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
