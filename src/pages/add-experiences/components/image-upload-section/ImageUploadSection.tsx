import PlusIcon from '@/assets/icons/icon_plus.svg?react';

import styles from './ImageUploadSection.module.css';
import { useRef, useState } from 'react';

interface Preview {
  id: string;
  file: File;
  url: string;
}
const ImageUploadSection = ({
  title,
  description,
  inputName,
  maxCount,
}: ImageUploadSectionProps) => {
  const [previews, setPreviews] = useState<Preview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const remainingSlots = maxCount - previews.length;
    const validFiles = fileArray.slice(0, remainingSlots);

    const newPreviews = validFiles.map(file => {
      const id = `${file.name}-${file.size}-${Date.now()}`;
      const url = URL.createObjectURL(file);
      return { id, file, url };
    });

    setPreviews(prev => [...prev, ...newPreviews]);
    e.target.value = '';
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (id: string) => {
    const preview = previews.find(p => p.id === id);
    if (preview) URL.revokeObjectURL(preview.url);
    setPreviews(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className={styles.bannerImageSection}>
      <div className={styles.bannerImageSectionTitle}>{title}</div>
      <div className={styles.bannerImageAddWrapper}>
        <div onClick={handleIconClick} className={styles.bannerImageAdd}>
          <PlusIcon className={styles.plusIcon} />
        </div>
        {previews.map(({ id, url }, i) => (
          <div key={id} className={styles.bannerImagePreviewWrapper}>
            <img src={url} alt={`미리보기 이미지 ${i + 1}`} className={styles.bannerImagePreview} />
            <button onClick={() => handleRemoveImage(id)}>삭제</button>
          </div>
        ))}
      </div>
      <input
        type="file"
        accept="image/*"
        multiple={maxCount > 1}
        name={inputName}
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />
      <div className={styles.bannerDescription}>{description}</div>
    </div>
  );
};

export default ImageUploadSection;

type ImageUploadSectionProps = {
  title: string;
  description: string;
  inputName: string;
  maxCount: number;
};
