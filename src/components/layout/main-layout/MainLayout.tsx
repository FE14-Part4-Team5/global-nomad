import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../gnb/Header';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
