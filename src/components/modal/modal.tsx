import React, { useState } from 'react';
import styles from './modal.module.css'; // styles로 import 변경

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // false에서 true로 변경

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
  isOpen?: boolean; // optional로 변경
  onClose?: () => void; // optional로 변경
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
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
