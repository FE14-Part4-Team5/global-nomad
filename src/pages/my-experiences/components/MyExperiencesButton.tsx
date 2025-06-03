import styles from './MyExperiencesButton.module.css';

const MyExperiencesButton = ({
  children,
  varient,
}: {
  children: React.ReactNode;
  varient: 'edit' | 'delete';
}) => {
  const buttonClass =
    varient === 'edit' ? `${styles.button} ${styles.edit}` : `${styles.button} ${styles.delete}`;

  return <button className={buttonClass}>{children}</button>;
};

export default MyExperiencesButton;
