import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import MyExperiences from './pages/my-experiences/MyExperiences';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'my-experiences',
        element: <MyExperiences />,
      },
    ],
  },
]);

export default router;
