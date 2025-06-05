import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'filter-white' | 'filter-black';

  isActive?: boolean;
  className?: string;
  marginRight?: string;
}

const Button = ({
  children,
  icon,
  variant = 'primary',

  isActive = false,
  className,
  marginRight = '0.4rem',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        isActive && styles[`${variant}`],
        isActive ? styles.active : styles.inactive,
        className
      )}
      disabled={!isActive}
      {...rest}
    >
      {icon && (
        <span className={styles.iconWrapper} style={{ marginRight: marginRight }}>
          {icon}
        </span>
      )}{' '}
      {children}
    </button>
  );
};

export default Button;
