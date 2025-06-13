import Button from '@/components/Button/Button';

import GeneralInfoSection from './\bcomponents/general-info-section/GeneralInfoSection';
import ScheduleSection from './\bcomponents/schedule-section/ScheduleSection';
import BannerUploadSection from './\bcomponents/banner-upload-section/BannerUploadSection';
import IntroUploadSection from './\bcomponents/intro-upload-section/IntroUploadSection';

import styles from './AddExperiences.module.css';

const AddExperiences = () => {
  return (
    <form className={styles.root}>
      <GeneralInfoSection />
      <ScheduleSection />
      <BannerUploadSection />
      <IntroUploadSection />
      <div className={styles.buttonWrapper}>
        <Button
          type="submit"
          isActive={true}
          style={{ padding: '1.25rem 3.694rem', fontWeight: 'bold' }}
        >
          등록하기
        </Button>
      </div>
    </form>
  );
};

export default AddExperiences;
