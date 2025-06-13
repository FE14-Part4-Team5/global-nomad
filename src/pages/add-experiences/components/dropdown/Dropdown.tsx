import styles from './Dropdown.module.css';

const Dropdown = ({ options, selected, onSelect }: DropdownProps) => {
  return (
    <div className={styles.root}>
      {options.map(option => (
        <div
          key={option}
          className={`${styles.item} ${selected === option ? styles.selected : ''}`}
          onClick={e => {
            e.stopPropagation();
            onSelect(option);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;

type DropdownProps = {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
};
