import MainCard from '@/components/main-card/MainCard';
import useViewPortSize from '@/hooks/useViewPortSize';

import styles from './ExperienceCardList.module.css';

import type { MainCardProps } from '@/components/main-card/MainCard';

interface ExperiencesCardListProps {
  cardList: MainCardProps[];
}

const ExperiencesCardList = ({ cardList }: ExperiencesCardListProps) => {
  const { viewportSize } = useViewPortSize();

  const visibleCount = viewportSize === 'mobile' ? 6 : viewportSize === 'tablet' ? 4 : 8;

  return (
    <div className={styles.wrapper}>
      {cardList.slice(0, visibleCount).map(card => (
        <MainCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default ExperiencesCardList;
