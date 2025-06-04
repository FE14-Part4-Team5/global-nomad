import { RouterProvider } from 'react-router-dom';
import router from './router';

import './styles/global.css';

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
