import { useRef, useState } from 'react';

import styles from './ProfileImageUploader.module.css';

import defaultImg from '@/assets/icons/profile_size=lg.svg';
import editIcon from '@/assets/icons/icon_edit.svg';

type Props = {
  defaultImage: string;
  onImageUpload: (file: File) => void;
};

const ProfileImageUploader = ({ defaultImage, onImageUpload }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>(defaultImage || '');

  const handleClick = () => inputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setPreview(reader.result as string);
        onImageUpload?.(file);
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <div className={styles.defaultProfileImgWapper} onClick={handleClick}>
        <img
          src={preview || defaultImage || defaultImg}
          alt="profile image"
          className={styles.defaultProfileImg}
        />
        <div className={styles.editIconWrapper}>
          <img src={editIcon} alt="edit icon" className={styles.editIcon} />
        </div>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ProfileImageUploader;
