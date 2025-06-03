import { RouterProvider } from 'react-router-dom';
import ModalContainer from './components/modal/modal';
import './styles/global.css';
import router from './router';
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
