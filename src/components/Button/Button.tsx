import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'filter-white' | 'filter-black';
  padding?: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  icon,
  variant = 'primary',
  padding,
  isActive = false,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        isActive && styles[`${variant}`],
        isActive ? styles.active : styles.inactive,
        className
      )}
      style={{ padding: padding }}
      disabled={!isActive}
    >
      {icon}
      {children}
    </button>
  );
}
