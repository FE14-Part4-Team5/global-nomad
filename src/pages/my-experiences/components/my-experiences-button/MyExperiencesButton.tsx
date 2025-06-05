import clsx from 'clsx';

import styles from './MyExperiencesButton.module.css';

const MyExperiencesButton = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: 'edit' | 'delete';
}) => {
  const buttonClass = clsx(styles.button, styles[variant]);

  return <button className={buttonClass}>{children}</button>;
};

export default MyExperiencesButton;
