import styles from './ReviewCard.module.css';

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
          <span key={i}>★</span>
        ))}
      </div>
      <p className={styles.reviewText}>{content}</p>
    </div>
  );
};

export default ReviewCard;
