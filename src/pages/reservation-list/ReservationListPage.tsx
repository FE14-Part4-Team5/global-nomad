import SideNavigation from '../../components/side-navigation/SideNavigation.tsx';
import styles from './ReservationListPage.module.css';
import profileImg from '@/assets/icons/profile_size=lg.svg';
import { useState } from 'react';
import ReservationCard from '../../components/reservation-card/ReservationCard';

const handleProfileImageUpload = (file: File) => {
  console.log('이미지 업로드:', file);
};

const ReservationList: React.FC = () => {
  const [activeState, setActiveState] = useState<string | null>(null);

  const handleBadgeClick = (state: string) => {
    // 현재 선택된 상태와 동일한 배지를 클릭하면 선택 해제
    if (activeState === state) {
      setActiveState(null);
    } else {
      setActiveState(state);
    }
  };

  return (
    <div className={styles.container}>
      <SideNavigation defaultImage={profileImg} onImageUpload={handleProfileImageUpload} />
      <div className={styles.titleSection}>
        <h1 className={styles.title}>예약 내역</h1>
        <p className={styles.subtitle}>예약내역 변경 및 취소할 수 있습니다.</p>
        <div className={styles.badgeWrapper}>
          <div
            className={`${styles.badgeCommon} ${activeState === 'pending' ? styles.active : ''}`}
            onClick={() => handleBadgeClick('pending')}
          >
            <span className={styles.labelCommon1}>예약 완료</span>
          </div>
          <div
            className={`${styles.badgeCommon} ${activeState === 'confirmed' ? styles.active : ''}`}
            onClick={() => handleBadgeClick('confirmed')}
          >
            <span className={styles.labelCommon1}>예약 승인</span>
          </div>
          <div
            className={`${styles.badgeCommon} ${activeState === 'declined' ? styles.active : ''}`}
            onClick={() => handleBadgeClick('declined')}
          >
            <span className={styles.labelCommon1}>예약 거절</span>
          </div>
          <div
            className={`${styles.badgeCommon} ${activeState === 'canceled' ? styles.active : ''}`}
            onClick={() => handleBadgeClick('canceled')}
          >
            <span className={styles.labelCommon1}>예약 취소</span>
          </div>
          <div
            className={`${styles.badgeCommon} ${activeState === 'completed' ? styles.active : ''}`}
            onClick={() => handleBadgeClick('completed')}
          >
            <span className={styles.labelCommon1}>체험 완료</span>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <ReservationCard
            activity={{
              id: 1,
              bannerImageUrl: '이미지URL',
              title: '액티비티 제목',
            }}
            status="pending"
            date="2024.06.05"
            dateDot="•"
            startTime="14:00"
            timedash="-"
            endTime="16:00"
            currencySymbol="₩"
            totalPrice={50000}
            headCount={2}
            headCountUnit="명"
            reviewSubmitted={false}
            editReservationButton={<button>예약 변경</button>}
            cancelReservationButton={<button>예약 취소</button>}
            reviewSubmittedButton={<button>후기 작성</button>}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationList;
