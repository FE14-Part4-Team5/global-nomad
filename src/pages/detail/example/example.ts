import type {
  ReserveExperiencePayload,
  ExperienceDetailProps,
  ReviewResponse,
} from '@/hooks/useExperience';

export const getExperienceDetail = async (
  teamId: string,
  activityId: number
): Promise<ExperienceDetailProps> => {
  const accessToken = localStorage.getItem('accessToken') ?? '';

  const res = await fetch(
    `https://sp-globalnomad-api.vercel.app/${teamId}/activities/${activityId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error('체험 상세 정보를 불러오는 데 실패했습니다.');
  }

  return res.json();
};

export const reserveExperience = async (
  teamId: string,
  activityId: number,
  payload: ReserveExperiencePayload
) => {
  const accessToken = localStorage.getItem('accessToken') ?? '';

  const res = await fetch(
    `https://sp-globalnomad-api.vercel.app/${teamId}/activities/${activityId}/reservations`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`예약 실패: ${errorText}`);
  }

  return res.json();
};

export const deleteExperience = async (teamId: string, activityId: number) => {
  const accessToken = localStorage.getItem('accessToken') ?? '';

  const res = await fetch(
    `https://sp-globalnomad-api.vercel.app/${teamId}/my-activities/${activityId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`삭제 실패: ${error}`);
  }

  return res.json();
};

export const getExperienceReviews = async (
  teamId: string,
  activityId: number,
  page = 1,
  size = 3
): Promise<ReviewResponse> => {
  const res = await fetch(
    `https://sp-globalnomad-api.vercel.app/${teamId}/activities/${activityId}/reviews?page=${page}&size=${size}`
  );

  if (!res.ok) {
    throw new Error('리뷰 정보를 불러오는 데 실패했습니다.');
  }

  return res.json();
};
