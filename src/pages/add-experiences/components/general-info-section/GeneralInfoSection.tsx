import MyExperiencesHeader from '@/components/my-experiences-header/MyExperiencesHeader';
import Input from '@/components/input/Input';

import ArrowDownIcon from '@/assets/icons/icon_alt arrow_down.svg?react';

import styles from './GeneralInfoSection.module.css';

const GeneralInfoSection = () => {
  return (
    <div className={styles.formFields}>
      <MyExperiencesHeader title="내 체험 등록" />
      <div className={styles.input}>
        <Input title="제목" placeholder="제목을 입력해 주세요" />
      </div>
      <div>
        <label htmlFor="categori" className={styles.categoriLable}>
          카테고리
        </label>
        <div role="button" id="categori" className={styles.categori}>
          <div className={styles.categoriPlaceholder}>카테고리를 선택해 주세요</div>
          <ArrowDownIcon />
        </div>
      </div>
      <div>
        <label htmlFor="description" className={styles.descriptionLabel}>
          설명
        </label>
        <textarea
          id="description"
          placeholder="체험에 대한 설명을 입력해 주세요"
          className={styles.description}
        />
      </div>
      <div className={styles.input}>
        <Input title="가격" placeholder="체험 금액을 입력해 주세요" />
      </div>
      <div className={styles.input}>
        <Input title="주소" placeholder="주소를 입력해 주세요" />
      </div>
    </div>
  );
};

export default GeneralInfoSection;
