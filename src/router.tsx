import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import MyProfilePage from './pages/my-profile/MyProfilePage';
import MyExperiencesPage from './pages/my-experiences/MyExperiencesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'my-profile', element: <MyProfilePage /> },
      {
        path: 'my-experiences',
        element: <MyExperiencesPage />,
      },
    ],
  },
]);

export default router;
