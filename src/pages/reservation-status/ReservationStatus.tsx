import SideNavigation from '@/components/side-navigation/SideNavigation';
import styles from './ReservationStatus.module.css';
import profileImg from '@/assets/icons/profile_size=lg.svg';
import { Calendar } from './components/Calendar';

const ReservationStatus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <SideNavigation defaultImage={profileImg} />
      </div>
      <div className={styles.calendarWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>예약 현황</div>
          <div className={styles.explanation}>
            내 체험에 예약된 내역들을 한 눈에 확인할 수 있습니다.
          </div>
        </div>
        {/*예약 리스트 드롭다운*/}
        <Calendar />
      </div>
    </div>
  );
};

export default ReservationStatus;
