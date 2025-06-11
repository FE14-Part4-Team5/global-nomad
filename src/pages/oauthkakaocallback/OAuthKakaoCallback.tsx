import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { oauthService } from '@/apis/oauth';
import { useAuthStore } from '@/stores/useAuthStore';
import axios from 'axios';
import { AxiosError } from 'axios';

const OAuthKakaoCallback = () => {
  const calledOnce = useRef(false);
  const navigate = useNavigate();
  const setTokens = useAuthStore(state => state.setTokens);

  useEffect(() => {
    const doLogin = async () => {
      if (calledOnce.current) return;
      calledOnce.current = true;

      const code = new URL(window.location.href).searchParams.get('code');

      console.log('✅ doLogin 함수 진입됨');
      console.log('[카카오 인가코드]', code);

      console.log('[카카오 토큰 요청 데이터]', {
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
        redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
        code,
      });

      console.log('REST API KEY', import.meta.env.VITE_KAKAO_REST_API_KEY);
      console.log('REDIRECT URI', import.meta.env.VITE_KAKAO_REDIRECT_URI);

      console.log(import.meta.env);

      if (!code) return;

      try {
        // 1. Kakao access token 발급
        const tokenResponse = await axios.post(
          'https://kauth.kakao.com/oauth/token',
          new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
            redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
            code,
          }),
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        );

        console.log('카카오 토큰 응답:', tokenResponse.data);
        const kakaoAccessToken = tokenResponse.data.access_token;

        await oauthService.OAuthApps({
          provider: 'kakao',
          appKey: import.meta.env.VITE_KAKAO_REST_API_KEY,
        });

        // 2. 백엔드 로그인 시도
        try {
          const response = await oauthService.OAuthSignIn(
            { provider: 'kakao' },
            {
              token: kakaoAccessToken,
              redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
            }
          );

          const { accessToken, refreshToken } = response;
          setTokens(accessToken, refreshToken);
          navigate('/');
        } catch (loginError: any) {
          if (loginError.response?.status === 404) {
            try {
              // Kakao 사용자 정보 요청 (닉네임 등)
              const profileResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
                headers: { Authorization: `Bearer ${kakaoAccessToken}` },
              });

              const nickname = profileResponse.data?.properties?.nickname || '카카오유저';

              const signupResponse = await oauthService.OAuthSignUp(
                { provider: 'kakao' },
                {
                  token: kakaoAccessToken,
                  redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
                  nickname,
                }
              );

              const { accessToken, refreshToken } = signupResponse;
              setTokens(accessToken, refreshToken);
              navigate('/');
            } catch (signupError) {
              console.error('OAuth 회원가입 실패:', signupError);
              navigate('/login');
            }
          } else {
            console.error('OAuth 로그인 실패:', loginError);
            navigate('/login');
          }
        }
      } catch (tokenError) {
        console.error('카카오 access token 발급 실패:', tokenError);
        navigate('/login');
      }
    };

    doLogin();
  }, []);

  return <p>로그인 처리 중입니다...</p>;
};

export default OAuthKakaoCallback;
