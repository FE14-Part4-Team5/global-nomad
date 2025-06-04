import { Link } from 'react-router-dom';

import styles from './MyExperiencesHeader.module.css';

const MyExperiencesHeader = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.headerText}>
        <div className={styles.title}>내 체험 관리</div>
        <div className={styles.subTitle}>
          체험을 등록하거나 <br className={styles.br} />
          수정 및 삭제가 가능합니다.
        </div>
      </div>
      <Link to={'/add'}>
        <button className={styles.button}>체험 등록하기</button>
      </Link>
    </div>
  );
};

export default MyExperiencesHeader;
