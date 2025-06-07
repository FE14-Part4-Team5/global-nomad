import SideNavigation from '../../components/side-navigation/SideNavigation.tsx';
import styles from './ReservationListPage.module.css';
import profileImg from '@/assets/icons/profile_size=lg.svg';
import { useState } from 'react';
import ReservationCard from '../../components/reservation-card/ReservationCard';
import Modal from '../../components/modal/modal';
import WarningIcon from '../../assets/icons/modalwarning.svg';

const handleProfileImageUpload = (file: File) => {
  console.log('이미지 업로드:', file);
};

const ReservationList: React.FC = () => {
  const [activeState, setActiveState] = useState<string | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<MyReservation | null>(null);
  // 예약 취소 모달 상태 추가
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleBadgeClick = (state: string) => {
    // 현재 선택된 상태와 동일한 배지를 클릭하면 선택 해제
    if (activeState === state) {
      setActiveState(null);
    } else {
      setActiveState(state);
    }
  };

  const reservations: MyReservation[] = [
    {
      activity: {
        id: 1,
        bannerImageUrl: '이미지URL1',
        title: '액티비티 제목 1',
      },
      status: 'pending',
      date: '2024.06.05',
      startTime: '14:00',
      endTime: '16:00',
      totalPrice: 50000,
      headCount: 2,
      reviewSubmitted: false,
    },
    // 체험 완료 카드 추가
    {
      activity: {
        id: 2,
        bannerImageUrl: '이미지URL2',
        title: '맛있는 김치 만들기 체험',
      },
      status: 'completed', // 체험 완료 상태
      date: '2024.06.01',
      startTime: '10:00',
      endTime: '12:00',
      totalPrice: 45000,
      headCount: 3,
      reviewSubmitted: false, // false로 설정하여 후기 작성 버튼이 보이도록 함
    },
  ];

  return (
    <div className={styles.container}>
      <SideNavigation defaultImage={profileImg} />
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
          {reservations
            .filter(reservation => activeState === null || reservation.status === activeState)
            .map((reservation, index) => (
              <ReservationCard
                key={index}
                activity={reservation.activity}
                status={reservation.status}
                date={reservation.date}
                dateDot="•"
                startTime={reservation.startTime}
                timedash="-"
                endTime={reservation.endTime}
                currencySymbol="₩"
                totalPrice={reservation.totalPrice}
                headCount={reservation.headCount}
                headCountUnit="명"
                reviewSubmitted={reservation.reviewSubmitted}
                editReservationButton={<button>예약 변경</button>}
                cancelReservationButton={
                  <button onClick={() => setIsCancelModalOpen(true)}>예약 취소</button>
                }
                reviewSubmittedButton={
                  <button
                    onClick={() => {
                      setSelectedReservation(reservation);
                      setIsReviewModalOpen(true);
                    }}
                  >
                    후기 작성
                  </button>
                }
              />
            ))}
        </div>
      </div>

      {/* 후기 작성 모달 */}
      <Modal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} isThird={true}>
        <div className={styles.modalHeader}>
          <h3>{selectedReservation?.activity.title}</h3>
          <p>
            {`${selectedReservation?.date} / ${selectedReservation?.startTime} - ${selectedReservation?.endTime} (${selectedReservation?.headCount}명)`}
          </p>
        </div>
      </Modal>

      {/* 예약 취소 모달 */}
      <Modal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        isSecondary={true}
      >
        <img src={WarningIcon} className={styles.warningIcon} alt="warning" />
        <h2>예약을 취소하시겠습니까?</h2>
      </Modal>
    </div>
  );
};

export default ReservationList;
