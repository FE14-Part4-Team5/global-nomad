import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import ErrorUI from './pages/my-experiences/components/error/ErrorUI';

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import ReservationList from './pages/reservation-list/ReservationListPage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import MyExperiencesPage from './pages/my-experiences/MyExperiencesPage';
import MyProfilePage from './pages/my-profile/MyProfilePage';
import AddExperiences from './pages/add-experiences/AddExperiences';
import EditExperiences from './pages/edit-experiences/EditExperiences';
import ReservationStatus from './pages/reservation-status/ReservationStatus';

import LoadingUI from './pages/my-experiences/components/loading/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/my-profile', element: <MyProfilePage /> },
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
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

export default router;
