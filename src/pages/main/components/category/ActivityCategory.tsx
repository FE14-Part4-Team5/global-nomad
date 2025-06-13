import Button from '@/components/Button/Button';
import ArtIcon from '@/assets/icons/icon_art.svg?react';
import FoodIcon from '@/assets/icons/icon_food.svg?react';
import TourIcon from '@/assets/icons/icon_tour.svg?react';
import BusIcon from '@/assets/icons/icon_bus.svg?react';
import WellbingIcon from '@/assets/icons/icon_wellbeing.svg?react';
import styles from './ActivityCategory.module.css';
import useViewPortSize from '@/hooks/useViewPortSize';
import clsx from 'clsx';
import { useState } from 'react';
import type { Category } from '@/types/api/sharedType';

const ActivityCategory = () => {
  const { viewportSize } = useViewPortSize();
  const [selectCategory, setSelectCategory] = useState<Category | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectCategory(prev => (prev === category ? null : category));
    console.log(`선택된 카테고리 : ${category}`);
  };

  const isSelected = (category: Category) => selectCategory === category;

  return (
    <div className={clsx(styles.categoryWrapper, viewportSize === 'mobile' && styles.mobileScroll)}>
      <Button
        type="button"
        isActive={true}
        variant="secondary"
        icon={
          <ArtIcon
            className={clsx(styles.btnIcon, {
              [styles.active]: isSelected('문화 · 예술'),
            })}
          />
        }
        className={clsx(styles.category, {
          [styles.active]: isSelected('문화 · 예술'),
        })}
        onClick={() => handleCategoryClick('문화 · 예술')}
      >
        문화 · 예술
      </Button>

      <Button
        type="button"
        isActive={true}
        variant="secondary"
        icon={
          <FoodIcon
            className={clsx(styles.btnIcon, {
              [styles.active]: isSelected('식음료'),
            })}
          />
        }
        className={clsx(styles.category, {
          [styles.active]: isSelected('식음료'),
        })}
        onClick={() => handleCategoryClick('식음료')}
      >
        식음료
      </Button>

      <Button
        type="button"
        isActive={true}
        variant="secondary"
        icon={
          <TourIcon
            className={clsx(styles.btnIcon, {
              [styles.active]: isSelected('투어'),
            })}
          />
        }
        className={clsx(styles.category, {
          [styles.active]: isSelected('투어'),
        })}
        onClick={() => handleCategoryClick('투어')}
      >
        투어
      </Button>

      <Button
        type="button"
        isActive={true}
        variant="secondary"
        icon={
          <BusIcon
            className={clsx(styles.btnIcon, {
              [styles.active]: isSelected('관광'),
            })}
          />
        }
        className={clsx(styles.category, {
          [styles.active]: isSelected('관광'),
        })}
        onClick={() => handleCategoryClick('관광')}
      >
        관광
      </Button>

      <Button
        type="button"
        isActive={true}
        variant="secondary"
        icon={
          <WellbingIcon
            className={clsx(styles.btnIcon, {
              [styles.active]: isSelected('웰빙'),
            })}
          />
        }
        className={clsx(styles.category, {
          [styles.active]: isSelected('웰빙'),
        })}
        onClick={() => handleCategoryClick('웰빙')}
      >
        웰빙
      </Button>
    </div>
  );
};

export default ActivityCategory;
