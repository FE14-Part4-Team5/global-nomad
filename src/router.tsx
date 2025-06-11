import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import ErrorUI from './pages/my-experiences/components/error/ErrorUI';

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import ReservationList from './pages/reservation-list/ReservationListPage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import DetailPage from './pages/detail/DetailPage';
import MyExperiencesPage from './pages/my-experiences/MyExperiencesPage';
import MyProfilePage from './pages/my-profile/MyProfilePage';
import AddExperiences from './pages/add-experiences/AddExperiences';
import EditExperiences from './pages/edit-experiences/EditExperiences';
import ReservationStatus from './pages/reservation-status/ReservationStatus';
import OAuthKakaoCallback from './pages/oauthkakaocallback/OAuthKakaoCallback';

import LoadingUI from './pages/my-experiences/components/loading/Loading';
import MainCard from './components/main-card/MainCard';

import image from '@/assets/images/unsplash_0yUw1_FEFO0.png';

const mockActivity = {
  bannerImageUrl: image,
  title: '제목입니다.',
  rating: 0,
  reviewCount: 0,
  currencySymbol: '₩',
  price: 10000,
  priceUnit: '/인',
  onClick: () => console.log('상세페이지로ㅓ 이동함'),
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/my-profile', element: <MyProfilePage /> },
      {
        path: 'detail/:id',
        element: <DetailPage />,
      },
      {
        path: '/reservation-list',
        element: <ReservationList />,
      },
      {
        path: '/my-experiences',
        element: (
          <ErrorBoundary FallbackComponent={ErrorUI}>
            <Suspense
              fallback={
                <div>
                  <LoadingUI />
                </div>
              }
            >
              <MyExperiencesPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: 'card',
        element: (
          <div style={{ margin: '100px', display: 'flex', gap: '10px' }}>
            <MainCard
              bannerImageUrl={mockActivity.bannerImageUrl}
              title={mockActivity.title}
              rating={mockActivity.rating}
              reviewCount={mockActivity.reviewCount}
              currencySymbol={mockActivity.currencySymbol}
              price={mockActivity.price}
              priceUnit={mockActivity.priceUnit}
              onClick={mockActivity.onClick}
            />
          </div>
        ),
      },
      {
        path: 'add-experiences',
        element: <AddExperiences />,
      },
      {
        path: 'edit-experiences/:id',
        element: <EditExperiences />,
      },
      {
        path: 'reservation-status',
        element: <ReservationStatus />,
      },
    ],
  },
  {
    path: '/reservation-list',
    element: <ReservationList />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/oauth/kakao/callback',
    element: <OAuthKakaoCallback />,
  },
]);

export default router;
