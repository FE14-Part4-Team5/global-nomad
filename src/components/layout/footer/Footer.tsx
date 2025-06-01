import styles from './Footer.module.css';
import facebookIcon from '@/assets/icons/icon_facebook.svg';
import instagramIcon from '@/assets/icons/icon_instagram.svg';
import youtubeIcon from '@/assets/icons/icon_youtube.svg';
import xIcon from '@/assets/icons/icon_X.svg';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>@codeit-2023</div>
      <div className={styles.footerMenu}>
        <a href="/privacy">Privacy Policy</a>
        <span>∙</span>
        <a href="/FAQ">FAQ</a>
      </div>
      <div className={styles.snsWrapper}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="facebook 바로가기" className={styles.snsIcon} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="instagram 바로가기" className={styles.snsIcon} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="youtube 바로가기" className={styles.snsIcon} />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="x 바로가기" className={styles.snsIcon} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
