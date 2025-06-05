import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.css';
import smallLogo from '@/assets/icons/logo_earth.svg';
import gnbLogo from '@/assets/icons/logo_vertical.svg';
import NotiIcon from '@/assets/icons/icon_bell.svg?react';
import profileImg from '@/assets/icons/profile_size=lg.svg';

const Header = () => {
  const [auth, setAuth] = useState(false);
  const [isNoticeClick, setIsNoticeClick] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleNoticeClick = () => {
    setIsNoticeClick(!isNoticeClick);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    setAuth(false);
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  return (
    <div className={styles.container}>
      <div className={styles.gnbLogo}>
        <Link to="/">
          <picture>
            <source srcSet={gnbLogo} media="(min-width:768px)" />
            <img src={smallLogo} alt="logo" className={styles.gnbLogoIcon} />
          </picture>
        </Link>
      </div>

      {!auth ? (
        <div className={styles.authWrapper}>
          <Link to="/login" className={styles.authButton}>
            로그인
          </Link>
          <Link to="/signup" className={styles.authButton}>
            회원가입
          </Link>
        </div>
      ) : (
        <div className={styles.userContainer}>
          <NotiIcon
            className={clsx(styles.notice, { [styles.active]: isNoticeClick })}
            type="button"
            onClick={handleNoticeClick}
          />
          <div className={styles.divider}></div>
          <div className={styles.userWrapper} ref={dropdownRef}>
            <div className={styles.userProfile}>
              <img src={profileImg} alt="프로필" className={styles.userProfileIcon} />
            </div>
            <button className={styles.userName} type="button" onClick={handleDropdownToggle}>
              {/* api 연결 예정 */}
              정만철
            </button>
            <div className={clsx(styles.dropdownMenu, isDropdownOpen && styles.open)}>
              <Link to="/mypage" className={styles.dropdownItem}>
                마이페이지
              </Link>
              <button type="button" className={styles.dropdownItem} onClick={handleLogout}>
                로그아웃
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
