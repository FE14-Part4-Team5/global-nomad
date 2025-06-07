import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import ReservationList from './pages/reservation-list/ReservationListPage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import MyExperiencesPage from './pages/my-experiences/MyExperiencesPage';
import MyProfilePage from './pages/my-profile/MyProfilePage';

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
        element: <MyExperiencesPage />,
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
