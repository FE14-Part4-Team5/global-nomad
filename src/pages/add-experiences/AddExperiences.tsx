import Button from '@/components/Button/Button';

import GeneralInfoSection from './\bcomponents/general-info-section/GeneralInfoSection';
import ScheduleSection from './\bcomponents/schedule-section/ScheduleSection';

import styles from './AddExperiences.module.css';
import ImageUploadSection from './\bcomponents/image-upload-section/ImageUploadSection';

const AddExperiences = () => {
  return (
    <form className={styles.root}>
      <GeneralInfoSection />
      <ScheduleSection />
      <ImageUploadSection
        title="배너이미지"
        description="* 배너이미지는 최대 1개 등록할 수 있습니다."
        inputName="banner"
        maxCount={1}
      />
      <ImageUploadSection
        title="소개이미지"
        description="* 소개이미지는 최대 4개 등록할 수 있습니다."
        inputName="introImages[]"
        maxCount={4}
      />
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
