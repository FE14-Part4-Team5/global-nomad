import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';

export interface UserProfile {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const getMyprofile = async (teamId: string): Promise<UserProfile> => {
  const accessToken = localStorage.getItem('accessToken') ?? '';

  const res = await fetch(`https://sp-globalnomad-api.vercel.app/${teamId}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error('프로필 정보를 불러오는 데 실패했습니다.');
  }

  return res.json();
};

interface ActivitiesResponse {
  cursorId: number;
  totalCount: number;
  activities: MyExperienceCardProps[];
}
export const getMyActivities = async (
  teamId: string,
  cursorId?: number,
  size: number = 5
): Promise<ActivitiesResponse> => {
  const accessToken = localStorage.getItem('accessToken') ?? '';

  let url = `https://sp-globalnomad-api.vercel.app/${teamId}/my-activities?size=${size}`;
  if (cursorId !== undefined && cursorId !== 0) {
    url += `&cursorId=${cursorId}`;
  }

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log('요청에 사용된 최종 url:', url);

  if (!res.ok) {
    throw new Error('내 체험 정보를 불러오는 데 실패했습니다.');
  }

  return res.json();
};

export const deleteActivity = async (teamId: string, targetId: number | null) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) throw new Error('Access token not found');

  const res = await fetch(
    `https://sp-globalnomad-api.vercel.app/${teamId}/my-activities/${targetId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error('삭제 요청에 실패했습니다.');
  }

  if (res.status === 204) return;

  return await res.json();
};

export const login = async (email: string, password: string, teamId: string): Promise<void> => {
  const res = await fetch(`https://sp-globalnomad-api.vercel.app/${teamId}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error('로그인에 실패했습니다.');
  }

  const data = await res.json();
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
  console.log('accessToken 저장함:', data.accessToken);
  console.log('refreshToken 저장함:', data.refreshToken);

  return data;
};
