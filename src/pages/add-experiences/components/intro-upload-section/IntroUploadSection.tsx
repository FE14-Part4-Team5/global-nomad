import PlusIcon from '@/assets/icons/icon_plus.svg?react';

import styles from './IntroUploadSection.module.css';

const IntroUploadSection = () => {
  return (
    <div className={styles.introImageSection}>
      <div className={styles.introImageSectionTitle}>소개 이미지 등록</div>
      <div className={styles.introImageAdd}>
        <PlusIcon className={styles.plusIcon} />
      </div>
    </div>
  );
};

export default IntroUploadSection;
