import clsx from 'clsx';
import styles from './Input.module.css';
import { useState } from 'react';
import React from 'react';
import IconEyeOn from '../../assets/icons/icon_eye=on.svg';
import IconEyeOff from '../../assets/icons/icon_eye=off.svg';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  padding?: string;
  isError?: boolean;
  errorMessage?: string;
  className?: string;
  showEyeIcon?: boolean;
}

const Input = ({
  title,
  type = 'text',
  padding = '1.75rem 2rem',
  isError = false,
  errorMessage,
  className,
  showEyeIcon = false,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <>
      <div className={styles.inputTitle}>{title}</div>
      <div className={styles.inputContainer}>
        <input
          {...rest}
          type={inputType}
          className={clsx(styles.input, isError ? styles.error : '', className)}
          style={{ padding: padding }}
        />
        {showEyeIcon && type && (
          <span
            className={styles.eyeIconWrraper}
            onClick={() => setShowPassword(prev => !prev)}
            tabIndex={0}
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
          >
            <img
              src={showPassword ? IconEyeOn : IconEyeOff}
              alt={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
              width={24}
              height={24}
            />
          </span>
        )}
      </div>
      {isError && errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </>
  );
};

export default Input;
