import EmptyStateImage from '@/assets/images/img_empty.png';

import styles from './EmptyState.module.css';

const EmptyState = ({ text, children }: { text: string; children?: React.ReactElement }) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyStateImageWrapper}>
        <img
          src={EmptyStateImage}
          alt="등록된 정보가 없어 아쉬워하는 지구 이미지"
          className={styles.emptyStateImage}
        />
      </div>
      <div className={styles.emptyStateText}>{text}</div>
      {children}
    </div>
  );
};

export default EmptyState;
