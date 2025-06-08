import IconStar from '@/assets/icons/icon_star.svg?react';
import styles from './ReviewCard.module.css';

const MAX_RATING = 5;

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  content: string;
}

const ReviewCard = ({ name, date, rating, content }: ReviewCardProps) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        {name}
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, i) => (
          <IconStar key={`filled-${i}`} className={styles.starFilled} />
        ))}
        {Array.from({ length: MAX_RATING - rating }).map((_, i) => (
          <IconStar key={`empty-${i}`} className={styles.starEmpty} />
        ))}
      </div>
      <p className={styles.reviewText}>{content}</p>
    </div>
  );
};

export default ReviewCard;
