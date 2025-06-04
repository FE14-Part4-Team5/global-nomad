import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';

import ReservationList from './pages/reservation-list/ReservationListPage';

import MyExperiencesPage from './pages/my-experiences/MyExperiencesPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'my-experiences',
        element: <MyExperiencesPage />,
      },
    ],
  },
  {
    path: '/reservation-list',
    element: <ReservationList />,
  },
]);

export default router;
