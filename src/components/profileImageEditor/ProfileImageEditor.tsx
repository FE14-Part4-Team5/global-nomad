// src/components/ProfileImageEditor/ProfileImageEditor.tsx

import React, { useRef, useState } from "react";
import "./ProfileImageEditor.css";
import profileIcon from "../../assets/icons/profile_size=lg.svg";
import editIcon from "../../assets/icons/icon_edit.svg";

interface ProfileImageEditorProps {
  initialImage?: string;
  onImageChange?: (imageUrl: string) => void;
}

const ProfileImageEditor: React.FC<ProfileImageEditorProps> = ({
  initialImage = profileIcon,
  onImageChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(initialImage);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onImageChange?.(imageUrl);
    }
  };

  return (
    <div className="profile-image-wrapper">
      <img src={image} alt="프로필 이미지" className="profile-image" />
      <button className="edit-icon-button" onClick={handleClick} aria-label="프로필 이미지 수정">
        <img src={editIcon} alt="수정 아이콘" className="edit-icon" />
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ProfileImageEditor;
