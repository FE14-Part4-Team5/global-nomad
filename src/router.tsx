import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import ErrorUI from './pages/my-experiences/components/error/ErrorUI';

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
<<<<<<< HEAD

import ReservationList from './pages/reservation-list/ReservationListPage';

=======
import ReservationList from './pages/reservation-list/ReservationListPage';
>>>>>>> ac709adf5fa4f63aa09bb971a320fd7303b42bda
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import DetailPage from './pages/detail/DetailPage';
import MyExperiencesPage from './pages/my-experiences/MyExperiencesPage';
<<<<<<< HEAD

=======
>>>>>>> ac709adf5fa4f63aa09bb971a320fd7303b42bda
import MyProfilePage from './pages/my-profile/MyProfilePage';
import AddExperiences from './pages/add-experiences/AddExperiences';
import EditExperiences from './pages/edit-experiences/EditExperiences';
import ReservationStatus from './pages/reservation-status/ReservationStatus';
<<<<<<< HEAD

import LoadingUI from './pages/my-experiences/components/loading/Loading';
=======
import OAuthKakaoCallback from './pages/oauthkakaocallback/OAuthKakaoCallback';
>>>>>>> ac709adf5fa4f63aa09bb971a320fd7303b42bda

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
