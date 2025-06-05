import React, { useState } from 'react';
import styles from './modal.module.css';
import WarningIcon from '../../assets/icons/modalwarning.svg';
import activeon from '../../assets/icons/icon_active=0n.svg';
import activeoff from '../../assets/icons/icon_active=off.svg';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  isSecondary?: boolean;
  isThird?: boolean; // 세 번째 모달을 위한 prop 추가
}

const Modal: React.FC<ModalProps> = ({
  isOpen = true,
  onClose = () => {},
  children,
  isSecondary = false,
  isThird = false,
}) => {
  const [ratings, setRatings] = useState<boolean[]>(Array(5).fill(false));
  const [commentLength, setCommentLength] = useState(0); // 추가

  // 별점 클릭 핸들러 수정
  const handleStarClick = (index: number) => {
    const newRatings = ratings.map((_, i) => i <= index);
    setRatings(newRatings);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={
          isThird ? styles.modalContent3 : isSecondary ? styles.modalContent2 : styles.modalContent
        }
        onClick={e => e.stopPropagation()}
      >
        {/* 여기서 children을 한 번만 렌더링 */}
        <div
          className={
            isThird ? styles.modalTitle3 : isSecondary ? styles.modalTitle2 : styles.modalTitle
          }
        >
          {children}
        </div>
        {isSecondary ? (
          <>
            <button className={styles.modalClose3} onClick={onClose}>
              아니오
            </button>
            <button className={styles.modalClose2} onClick={onClose}>
              취소하기
            </button>
          </>
        ) : isThird ? (
          <button className={styles.modalClose4} onClick={onClose}>
            작성하기
          </button>
        ) : (
          <button className={styles.modalClose} onClick={onClose}>
            확인
          </button>
        )}
        {/* 여기서 children을 제거 */}
        {isThird && (
          <>
            <div className={styles.starContainer}>
              {ratings.map((isActive, index) => (
                <img
                  key={index}
                  src={isActive ? activeon : activeoff}
                  className={styles.star}
                  alt={`star${index + 1}`}
                  onClick={() => handleStarClick(index)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
            <div className={styles.commentWrapper}>
              <span className={styles.commentLabel}>소중한 경험을 들려주세요</span>
              <textarea
                className={styles.commentbox}
                placeholder="체험에서 느낀 경험을 자유롭게 남겨주세요."
                onChange={e => setCommentLength(e.target.value.length)}
                maxLength={100}
              />
              <span className={styles.characterCount}>{commentLength}/100</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// 세 개의 모달을 렌더링하는 컴포넌트
export const ModalContainer = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(true);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(true);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(true);

  return (
    <div>
      <Modal isOpen={isFirstModalOpen} onClose={() => setIsFirstModalOpen(false)}>
        <h2></h2>
      </Modal>

      <Modal
        isOpen={isSecondModalOpen}
        onClose={() => setIsSecondModalOpen(false)}
        isSecondary={true}
      >
        <img src={WarningIcon} className={styles.warningIcon} alt="warning" />
      </Modal>

      <Modal isOpen={isThirdModalOpen} onClose={() => setIsThirdModalOpen(false)} isThird={true}>
        <h2></h2>
      </Modal>
    </div>
  );
};

export default Modal;
