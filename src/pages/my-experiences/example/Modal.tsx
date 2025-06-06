import WarningIcon from '@/assets/icons/modalwarning.svg';

import styles from './Modal.module.css';

type Props = {
  onConfirm: () => void;
  onClose: () => void;
  text: string;
  cancleText: string;
  confirmText: string;
};

const Modal = ({ onConfirm, onClose, text, cancleText, confirmText }: Props) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <img src={WarningIcon} alt="warning icon" className={styles.img} />
        <span className={styles.text}>{text}</span>
        <div className={styles.buttonGroup}>
          <button onClick={onClose} className={styles.cancel}>
            {cancleText}
          </button>
          <button onClick={onConfirm} className={styles.delete}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
