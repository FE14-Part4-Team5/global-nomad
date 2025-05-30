import React, { useState } from 'react';
import styles from './modal.module.css';

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Text</h2>
      </Modal>
    </div>
  );
};

export default TestPage;

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen = true, // 기본값을 true로 설정
  onClose = () => {},
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalTitle}>
          <h2></h2>
        </div>
        <button className={styles.modalClose} onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
};
