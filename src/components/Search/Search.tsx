import React, { useState } from 'react';
import styles from './Search.module.css';
import Button from '../button/Button';
import SearchIcon from '../../assets/icons/icon_search.svg';
interface SearchProps {
  explaination?: string;
  placeholder?: string;
  onSearch?: (query: string) => void; // 검색 버튼 클릭 시 호출되는 함수
  buttonText?: string;
}

const Search = ({
  explaination = '무엇을 체험하고 싶으신가요?',
  placeholder = '내가 원하는 체험은 ',
  onSearch,
  buttonText = '검색하기',
}: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery);
    }
  };
  return (
    <div className={styles.searchContainer}>
      <div className={styles.explainationContainer}>{explaination}</div>
      <div className={styles.searchInputContainer}>
        <img
          src={SearchIcon}
          alt="돋보기 아이콘"
          width={24}
          height={24}
          className={styles.searchIcon}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={styles.searchInput}
        />
        <Button
          variant="primary"
          className={styles.searchButton}
          onClick={handleSearchClick}
          isActive={!!searchQuery.trim()}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Search;
