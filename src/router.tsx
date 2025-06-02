import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/mainlayout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
]);

export default router;
