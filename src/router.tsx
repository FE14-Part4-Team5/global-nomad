import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import ReservationList from './pages/reservation-list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
  {
    path: '/reservation-list',
    element: <ReservationList />,
  },
]);

export default router;
