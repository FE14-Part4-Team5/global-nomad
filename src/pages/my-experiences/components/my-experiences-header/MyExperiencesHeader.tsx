import styles from './MyExperiencesHeader.module.css';

const MyExperiencesHeader = ({
  title,
  subTitle,
  children,
  className,
}: {
  title: string;
  subTitle: string;
  children?: React.ReactElement;
  className?: 'row' | 'column';
}) => {
  return (
    <div className={className === 'row' ? styles.flexContents : styles.rowContents}>
      <div className={styles.headerText}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
      {children}
    </div>
  );
};

export default MyExperiencesHeader;
