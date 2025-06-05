import WarningIcon from '@/assets/icons/modalwarning.svg';

import styles from './Modal.module.css';

type Props = {
  onConfirm: () => void;
  onClose: () => void;
};

const Modal = ({ onConfirm, onClose }: Props) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <img src={WarningIcon} alt="warning icon" className={styles.img} />
        <span className={styles.text}>등록한 체험을 삭제하시겠어요?</span>
        <div className={styles.buttonGroup}>
          <button onClick={onClose} className={styles.cancel}>
            아니오
          </button>
          <button onClick={onConfirm} className={styles.delete}>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
