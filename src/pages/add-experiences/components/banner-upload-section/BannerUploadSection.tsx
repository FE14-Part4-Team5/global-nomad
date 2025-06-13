import PlusIcon from '@/assets/icons/icon_plus.svg?react';

import styles from './BannerUploadSection.module.css';

const BannerUploadSection = () => {
  return (
    <div className={styles.bannerImageSection}>
      <div className={styles.bannerImageSectionTitle}>배너 이미지 등록</div>
      <div className={styles.bannerImageAdd}>
        <PlusIcon className={styles.plusIcon} />
      </div>
    </div>
  );
};

export default BannerUploadSection;
