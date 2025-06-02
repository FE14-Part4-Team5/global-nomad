import { Link, useLocation } from 'react-router-dom';
import styles from './SideNavItem.module.css';

import personIcon from '@/assets/icons/icon_user.svg';
import activePersonIcon from '@/assets/icons/icon_user_active.svg';

import listIcon from '@/assets/icons/icon_list.svg';
import activeListIcon from '@/assets/icons/icon_list_active.svg';

import settingIcon from '@/assets/icons/icon_setting.svg';
import activeSettingIcon from '@/assets/icons/icon_setting_active.svg';

import calendarIcon from '@/assets/icons/icon_calendar.svg';
import activeCalenderIcon from '@/assets/icons/icon_calendar_active.svg';

const SideNavItem = () => {
  const location = useLocation();

  return (
    <div>
      {navItems.map(({ path, label, icon, activeIcon }) => {
        const isActive = location.pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className={isActive ? styles.activeContentsBox : styles.contentsBox}
          >
            <img src={isActive ? activeIcon : icon} alt={`${label} icon`} className={styles.icon} />
            <div className={styles.itemText}>{label}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavItem;

const navItems = [
  {
    path: '/my-profile',
    label: '내 정보',
    icon: personIcon,
    activeIcon: activePersonIcon,
  },
  {
    path: '/reservation-list',
    label: '예약내역',
    icon: listIcon,
    activeIcon: activeListIcon,
  },
  {
    path: '/my-experiences',
    label: '내 체험 관리',
    icon: settingIcon,
    activeIcon: activeSettingIcon,
  },
  {
    path: '/reservation-status',
    label: '예약 현황',
    icon: calendarIcon,
    activeIcon: activeCalenderIcon,
  },
];
