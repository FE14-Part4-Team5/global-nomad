import React, { useState } from 'react';
import styles from './modal.module.css';
import WarningIcon from '../../assets/icons/modalwarning.svg';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  isSecondary?: boolean; // 두 번째 모달 스타일을 위한 prop 추가
}

const Modal: React.FC<ModalProps> = ({
  isOpen = true,
  onClose = () => {},
  children,
  isSecondary = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={isSecondary ? styles.modalContent2 : styles.modalContent}
        onClick={e => e.stopPropagation()}
      >
        <div className={isSecondary ? styles.modalTitle2 : styles.modalTitle}>Text</div>
        <button className={styles.modalClose} onClick={onClose}>
          확인
        </button>
        {children}
      </div>
    </div>
  );
};

// 두 개의 모달을 렌더링하는 컴포넌트
const ModalContainer = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(true);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(true);

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
    </div>
  );
};

export default ModalContainer;
