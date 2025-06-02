import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'filter-white' | 'filter-black';
  padding?: string;
  isActive?: boolean;
  className?: string;
  marginRight?: string;
}

const Button = ({
  children,
  icon,
  variant = 'primary',
  padding,
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
      style={{ padding: padding }}
      disabled={!isActive}
      {...rest}
    >
      {icon && <span style={{ marginRight: marginRight }}>{icon}</span>} {children}
    </button>
  );
};

export default Button;

/*button dir 바꾸기용 주석*/
