import { Link, useLocation } from 'react-router-dom';
import personIcon from '@/assets/icons/icon_user.svg?react';
import listIcon from '@/assets/icons/icon_list.svg?react';
import settingIcon from '@/assets/icons/icon_setting.svg?react';
import calendarIcon from '@/assets/icons/icon_calendar.svg?react';

import styles from './SideNavItem.module.css';

const SideNavItem = ({ onNavItemClick }: SideNavItemProps) => {
  const location = useLocation();

  return (
    <div>
      {navItems.map(({ path, label, Icon }) => {
        const isActive = location.pathname === path;
        const handleClick = () => {
          if (path === '/my-profile') {
            onNavItemClick?.();
          }
        };
        return (
          <Link
            key={path}
            to={path}
            className={isActive ? styles.activeContentsBox : styles.contentsBox}
            onClick={handleClick}
          >
            <Icon className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`} />
            <div className={styles.itemText}>{label}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavItem;

type SideNavItemProps = {
  onNavItemClick?: () => void;
};
const navItems = [
  {
    path: '/my-profile',
    label: '내 정보',
    Icon: personIcon,
  },
  {
    path: '/reservation-list',
    label: '예약내역',
    Icon: listIcon,
  },
  {
    path: '/my-experiences',
    label: '내 체험 관리',
    Icon: settingIcon,
  },
  {
    path: '/reservation-status',
    label: '예약 현황',
    Icon: calendarIcon,
  },
];
