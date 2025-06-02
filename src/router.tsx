import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import LoginPage from './pages/login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
