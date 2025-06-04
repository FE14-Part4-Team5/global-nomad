import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import MyProfilePage from './pages/my-profile/MyProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'my-profile', element: <MyProfilePage /> },
      { path: '/reservation-list', element: <MyProfilePage /> },
      { path: '/reservation-list', element: <MyProfilePage /> },
    ],
  },
]);

export default router;
