import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../profileImage/ProfileImage';
import './sideNavigation.css';

const SideNavigation: React.FC = () => {
  return (
    <aside className="sideNavigation">
      <div className="profileContainer">
        <ProfileImage />
        <div className="userName">사용자 이름</div>
      </div>
      <nav className="menuItems">
        <Link to="/my-info" className="menuButton">
          내 정보
        </Link>
        <Link to="/reservations" className="menuButton">
          예약 내역
        </Link>
        <Link to="/my-experiences" className="menuButton">
          내 체험 관리
        </Link>
        <Link to="/reservation-status" className="menuButton">
          예약 현황
        </Link>
      </nav>
    </aside>
  );
};

export default SideNavigation;
