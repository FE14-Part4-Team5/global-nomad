import MyExperiencesHeader from '@/components/my-experiences-header/MyExperiencesHeader';
import Input from '@/components/input/Input';

import ArrowDownIcon from '@/assets/icons/icon_alt arrow_down.svg?react';

import styles from './GeneralInfoSection.module.css';
import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import clsx from 'clsx';

const GeneralInfoSection = () => {
  const CATEGORY_OPTIONS = ['문화·예술', '식음료', '스포츠', '투어', '관광'];

  const [selectedCategory, setSelectedCategory] = useState('');

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <div className={styles.formFields}>
      <MyExperiencesHeader title="내 체험 등록" />
      <div className={styles.input}>
        <Input type="text" name="title" title="제목" placeholder="제목을 입력해 주세요" />
      </div>
      <div>
        <div className={styles.categoriLable}>카테고리</div>
        <div role="button" className={styles.categori} onClick={handleClickDropdown}>
          <div
            className={clsx(styles.categoriPlaceholder, { [styles.selected]: !!selectedCategory })}
          >
            {selectedCategory || '카테고리를 선택해 주세요'}
          </div>
          <ArrowDownIcon />
          {showDropdown && (
            <Dropdown
              options={CATEGORY_OPTIONS}
              selected={selectedCategory}
              onSelect={option => {
                setSelectedCategory(option);
                setShowDropdown(false);
              }}
            />
          )}
        </div>
      </div>
      <input type="hidden" name="category" value={selectedCategory} />
      <div>
        <label htmlFor="description" className={styles.descriptionLabel}>
          설명
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="체험에 대한 설명을 입력해 주세요"
          className={styles.description}
        />
      </div>
      <div className={styles.input}>
        <Input name="price" title="가격" placeholder="체험 금액을 입력해 주세요" />
      </div>
      <div className={styles.input}>
        <Input name="address" title="주소" placeholder="주소를 입력해 주세요" />
      </div>
    </div>
  );
};

export default GeneralInfoSection;
