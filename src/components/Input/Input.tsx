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
  maxWidth?: string;
}

const Input = ({
  title,
  type = 'text',
  padding,
  isError = false,
  errorMessage,
  className,
  showEyeIcon = false,
  maxWidth,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <>
      <div style={{ maxWidth: maxWidth }}>
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
      </div>
    </>
  );
};

export default Input;

/*input dir 바꾸기용 주석*/
