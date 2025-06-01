import React, { useState } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown = ({ label, options, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        {selectedOption || label} ▼
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map(option => (
            <li
              key={option}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
