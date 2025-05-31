// src/components/SideNavigation/SideNavigation.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./SideNavigation.css";
import profileIconSm from "../../assets/icons/profile_size=sm.svg";
import profileIconMd from "../../assets/icons/profile_size=md.svg";
import profileIconLg from "../../assets/icons/profile_size=lg.svg";
import ProfileImageEditor from "../profileImageEditor/ProfileImageEditor";

const SideNavigation: React.FC = () => {
  return (
    <aside className="side-navigation">
      <div className="profile-container">
        <picture>
          <source media="(max-width: 767px)" srcSet={profileIconSm} />
          <source media="(max-width: 1024px)" srcSet={profileIconMd} />
          <ProfileImageEditor initialImage={profileIconLg} />
        </picture>
        <h2 className="user-name">사용자 이름</h2>
      </div>
      <nav className="menu-items">
        <Link to="/my-info" className="menu-button">내 정보</Link>
        <Link to="/reservations" className="menu-button">예약 내역</Link>
        <Link to="/my-experiences" className="menu-button">내 체험 관리</Link>
        <Link to="/reservation-status" className="menu-button">예약 현황</Link>
      </nav>
    </aside>
  );
};

export default SideNavigation;
