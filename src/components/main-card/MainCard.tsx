import styles from './MainCard.module.css';

import svg from '../../assets/icons/icon_active=0n.svg';

const MainCard = ({
  bannerImageUrl,
  title,
  rating,
  reviewCount,
  currencySymbol,
  price,
  priceUnit,
  onClick,
}: MainCardProps) => {
  return (
    <div role="button" className={styles.mainCard} onClick={onClick}>
      <img src={bannerImageUrl} alt={`체험 배너 - ${title}`} className={styles.img} />
      <div className={styles.contentBox}>
        <div className={styles.title}>{title}</div>
        <div className={styles.ratingReview}>
          <img src={svg} alt="star svg" className={styles.star} />
          <div className={styles.rating}>{rating?.toFixed(1)}</div>
          <div className={styles.reviewCount}>({reviewCount})</div>
        </div>
        <div className={styles.price}>
          <div>{currencySymbol}</div>
          <div>{price.toLocaleString()}</div>
          <div className={styles.priceIn}>{priceUnit}</div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;

type MainCardProps = Activity & {
  onClick: () => void;
  priceUnit: string;
  currencySymbol: string;
};

type Activity = {
  id?: number;
  userId?: number;
  title: string;
  description?: string;
  category?: string;
  price: number;
  address?: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt?: string;
  updatedAt?: string;
};
