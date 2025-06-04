import styles from './MyExperiencesButton.module.css';

const MyExperiencesButton = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: 'edit' | 'delete';
}) => {
  const buttonClass =
    variant === 'edit' ? `${styles.button} ${styles.edit}` : `${styles.button} ${styles.delete}`;

  return <button className={buttonClass}>{children}</button>;
};

export default MyExperiencesButton;
