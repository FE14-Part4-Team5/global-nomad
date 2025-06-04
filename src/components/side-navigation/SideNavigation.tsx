import ProfileImageUploader from './parts/ProfileImageUploader';
import SideNavItem from './parts/SideNavItem';

import styles from './SideNavigation.module.css';

const SideNavigation = ({ defaultImage, onImageUpload }: SideNavigationProps) => {
  return (
    <aside>
      <div className={styles.navigationCard}>
        <ProfileImageUploader defaultImage={defaultImage} onImageUpload={onImageUpload} />
        <SideNavItem />
      </div>
    </aside>
  );
};

export default SideNavigation;

type SideNavigationProps = {
  defaultImage: string;
  onImageUpload?: (file: File) => void;
};
