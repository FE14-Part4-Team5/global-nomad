import React, { useRef, useState } from "react";
import editIcon from "../../assets/icons/icon_edit.svg";
import defaultProfile from "../../assets/icons/profile_size=lg.svg";
import "./profileImage.css";

const ProfileImage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <div className="profileImageContainer">
      <img
        src={imagePreview || defaultProfile}
        alt="사용자 프로필"
        className="profileImage"
      />
      <button
        className="editButton"
        onClick={handleEditClick}
        aria-label="프로필 이미지 수정"
      >
        <img src={editIcon} alt="Edit Icon" className="editIcon" />
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="fileInput"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImage;
