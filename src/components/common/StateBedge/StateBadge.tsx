import styles from './StateBadge.module.css';

const StateBadge = ({ status, label }: StateBadgeProps) => {
  const capital = capitalize(status);

  return (
    <span role="status">
      <div className={`${styles.bedgeCommon} ${styles[`bedge${capital}`]}`}>
        <div className={`${styles.labelCommon} ${styles[`label${capital}`]}`}>{label}</div>
      </div>
    </span>
  );
};

export default StateBadge;

type StateBadgeProps = {
  status: 'pending' | 'confirmed' | 'declined' | 'canceled' | 'completed';
  label: string;
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
