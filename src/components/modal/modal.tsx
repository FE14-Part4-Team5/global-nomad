import React, { useState } from 'react';
import styles from './modal.module.css';

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2></h2>
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

const Modal: React.FC<ModalProps> = ({ isOpen = true, onClose = () => {}, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalTitle}>Text</div>
        <button className={styles.modalClose} onClick={onClose}>
          확인
        </button>
        {children}
      </div>
    </div>
  );
};
