import styles from './StateBadge.module.css';

const StateBadge = ({ status, label }: StateBadgeProps) => {
  return (
    <span role="status">
      <div className={`${styles['bedge-common']} ${styles[`bedge-${status}`]}`}>
        <div className={`${styles['label-common']} ${styles[status]}`}>{label}</div>
      </div>
    </span>
  );
};

export default StateBadge;

type StateBadgeProps = {
  status: 'pending' | 'confirmed' | 'declined' | 'canceled' | 'completed';
  label: string;
};
