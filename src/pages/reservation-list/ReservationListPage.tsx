import SideNavigation from '../../components/side-navigation/SideNavigation.tsx';
import styles from './ReservationListPage.module.css';
import profileImg from '@/assets/icons/profile_size=lg.svg';
import { useState } from 'react';
import ReservationCard from '../../components/reservation-card/ReservationCard';
import Modal from '../../components/modal/modal';
import WarningIcon from '../../assets/icons/modalwarning.svg';
import Button from '../../components/Button/Button';
import emptyImg from '@/assets/images/img_empty.png';

const handleProfileImageUpload = (file: File) => {
  console.log('이미지 업로드:', file);
};

const ReservationList: React.FC = () => {
  const [activeState, setActiveState] = useState<string | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<MyReservation | null>(null);
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
    // 체험 완료 카드 추가(테스트용)
    {
      activity: {
        id: 2,
        bannerImageUrl: '이미지URL2',
        title: '맛있는 김치 만들기 체험',
      },
      status: 'completed',
      date: '2024.06.01',
      startTime: '10:00',
      endTime: '12:00',
      totalPrice: 45000,
      headCount: 3,
      headCountUnit: '명',
      reviewSubmitted: false,
    },
    {
      activity: {
        id: 2,
        bannerImageUrl: '이미지URL2',
        title: '맛있는 김치 만들기 체험',
      },
      status: 'pending',
      date: '2024.06.01',
      startTime: '10:00',
      endTime: '12:00',
      totalPrice: 45000,
      headCount: 3,
      headCountUnit: '명',
      reviewSubmitted: false,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.navigationWrapper}>
        <SideNavigation defaultImage={profileImg} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>예약 내역</h1>
          <p className={styles.subtitle}>예약내역 변경 및 취소할 수 있습니다.</p>
          {reservations.length > 0 ? (
            <>
              <div className={styles.badgeWrapper}>
                <div
                  className={`${styles.badgeCommon} ${
                    activeState === 'pending' ? styles.active : ''
                  }`}
                  onClick={() => handleBadgeClick('pending')}
                >
                  <span className={styles.labelCommon1}>예약 완료</span>
                </div>
                <div
                  className={`${styles.badgeCommon} ${
                    activeState === 'confirmed' ? styles.active : ''
                  }`}
                  onClick={() => handleBadgeClick('confirmed')}
                >
                  <span className={styles.labelCommon1}>예약 승인</span>
                </div>
                <div
                  className={`${styles.badgeCommon} ${
                    activeState === 'declined' ? styles.active : ''
                  }`}
                  onClick={() => handleBadgeClick('declined')}
                >
                  <span className={styles.labelCommon1}>예약 거절</span>
                </div>
                <div
                  className={`${styles.badgeCommon} ${
                    activeState === 'canceled' ? styles.active : ''
                  }`}
                  onClick={() => handleBadgeClick('canceled')}
                >
                  <span className={styles.labelCommon1}>예약 취소</span>
                </div>
                <div
                  className={`${styles.badgeCommon} ${
                    activeState === 'completed' ? styles.active : ''
                  }`}
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
                      editReservationButton={
                        <div className={styles.buttonContainer}>
                          <Button
                            variant="secondary"
                            isActive={true}
                            className={styles.editButton}
                            style={{ color: 'var(--gray-600)' }}
                          >
                            예약 변경
                          </Button>
                          <Button
                            variant="ghost"
                            isActive={true}
                            onClick={() => setIsCancelModalOpen(true)}
                            className={styles.cancelButton}
                            style={{ color: 'var(--gray-800)' }}
                          >
                            예약 취소
                          </Button>
                        </div>
                      }
                      reviewSubmittedButton={
                        <Button
                          variant="primary"
                          isActive={true}
                          className={styles.reviewButton}
                          style={{ color: 'var(--color-white)' }}
                          onClick={() => {
                            setSelectedReservation(reservation);
                            setIsReviewModalOpen(true);
                          }}
                        >
                          후기 작성
                        </Button>
                      }
                    />
                  ))}
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <img src={emptyImg} alt="아직 예약한 체험이 없어요" />
              <p>아직 예약한 체험이 없어요</p>
              <Button variant="primary" isActive={true} className={styles.exploreButton}>
                둘러보기
              </Button>
            </div>
          )}
        </div>

        {/* 후기 작성 모달 */}
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          isThird={true}
        >
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
    </div>
  );
};

export default ReservationList;
