import styles from './MyExperienceCard.module.css';

import starIcon from '../../assets/icons/icon_active=0n.svg';
import fallbackImage from '@/assets/images/error-image.png';

const MyExperienceCard = ({
  bannerImageUrl,
  title,
  rating,
  reviewCount,
  currencySymbol,
  price,
  priceUnit,
  editButton,
  deleteButton,
}: MyExperienceCardProps) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.contents}>
          <div className={styles.title}>{title}</div>
          <div className={styles.ratingReview}>
            <img src={starIcon} alt="star icon" className={styles.star} />
            <div className={styles.rating}>{rating.toFixed(1)}</div>
            <div className={styles.reviewCount}>({reviewCount})</div>
          </div>
          <div className={styles.priceGroup}>
            <div className={styles.currencySymbol}>{currencySymbol}</div>
            <div className={styles.price}>{price.toLocaleString()}</div>
            <div className={styles.priceUnit}>{priceUnit}</div>
          </div>
          <div className={styles.buttons}>
            <span>{editButton}</span>
            <span>{deleteButton}</span>
          </div>
        </div>
        <div>
          <img
            src={bannerImageUrl}
            alt={`체험 배너 - ${title}`}
            className={styles.img}
            onError={e => {
              e.currentTarget.src = fallbackImage;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyExperienceCard;

export type MyExperienceCardProps = {
  id?: number;
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  priceUnit: string;
  currencySymbol: string;
  bannerImageUrl: string;
  editButton: React.ReactNode;
  deleteButton: React.ReactNode;
};
