import Button from '@/components/Button/Button';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generalInfoSchema } from './\bschema/schema';
import type { GeneralInfoFormValues } from './\bschema/schema';

import GeneralInfoSection from './\bcomponents/general-info-section/GeneralInfoSection';
import ScheduleSection from './\bcomponents/schedule-section/ScheduleSection';

import styles from './AddExperiences.module.css';
import ImageUploadSection from './\bcomponents/image-upload-section/ImageUploadSection';

const AddExperiences = () => {
  const methods = useForm<GeneralInfoFormValues>({
    resolver: zodResolver(generalInfoSchema),
    mode: 'onBlur',
    defaultValues: {
      title: '',
      category: '',
      description: '',
      price: undefined,
      address: '',
      schedules: [] as { date: string; startTime: string; endTime: string }[],
    },
  });
  const { handleSubmit, setFocus } = methods;
  const onValid = data => {
    /* 정상 처리 */
  };
  const onError = errors => {
    if (errors.category) {
      setFocus('category'); // 스크롤·포커스 이동
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValid, onError)} className={styles.root}>
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
    </FormProvider>
  );
};

export default AddExperiences;
