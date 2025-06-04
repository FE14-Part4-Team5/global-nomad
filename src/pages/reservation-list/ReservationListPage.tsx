import SideNavigation from '../../components/side-navigation/SideNavigation.tsx';
import styles from './ReservationListPage.module.css';
import profileImg from '@/assets/icons/profile_size=lg.svg';

const handleProfileImageUpload = (file: File) => {
  console.log('이미지 업로드:', file);
};

const ReservationList: React.FC = () => {
  return (
    <div className={styles.container}>
      <SideNavigation defaultImage={profileImg} onImageUpload={handleProfileImageUpload} />
      <div className={styles.titleSection}>
        <h1 className={styles.title}>예약 내역</h1>
        <p className={styles.subtitle}>예약내역 변경 및 취소할 수 있습니다.</p>
        <div className={styles.badgeWrapper}>
          <div className={`${styles.badgeCommon} ${styles.badgePending}`}>
            <span className={`${styles.labelCommon1} ${styles.labelPending1}`}>예약 완료</span>
          </div>
          <div className={`${styles.badgeCommon} ${styles.badgeConfirmed}`}>
            <span className={`${styles.labelCommon1} ${styles.labelConfirmed1}`}>예약 승인</span>
          </div>
          <div className={`${styles.badgeCommon} ${styles.badgeDeclined}`}>
            <span className={`${styles.labelCommon1} ${styles.labelDeclined1}`}>예약 거절</span>
          </div>
          <div className={`${styles.badgeCommon} ${styles.badgeCanceled}`}>
            <span className={`${styles.labelCommon1} ${styles.labelCanceled1}`}>예약 취소</span>
          </div>
          <div className={`${styles.badgeCommon} ${styles.badgeCompleted}`}>
            <span className={`${styles.labelCommon1} ${styles.labelCompleted1}`}>체험 완료</span>
          </div>
        </div>
      </div>
      <main className={styles.mainContent}>{}</main>
    </div>
  );
};

export default ReservationList;
