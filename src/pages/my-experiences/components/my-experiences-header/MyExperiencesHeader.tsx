import styles from './MyExperiencesHeader.module.css';

const MyExperiencesHeader = ({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle: string;
  children?: React.ReactElement;
}) => {
  return (
    <div className={styles.contents}>
      <div className={styles.headerText}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
      {children}
    </div>
  );
};

export default MyExperiencesHeader;
