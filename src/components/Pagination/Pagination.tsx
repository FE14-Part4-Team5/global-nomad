import { useSearchParams } from 'react-router-dom';
import { clsx } from 'clsx';

import ArrowLeft from '../../assets/icons/icon_arrow-left.svg?react';
import ArrowRight from '../../assets/icons/icon_arrow-right.svg?react';

import styles from './Pagination.module.css';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  maxPageButtons?: number;
}

const Pagination = ({ totalItems, itemsPerPage, maxPageButtons = 5 }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const groupIndex = Math.floor((currentPage - 1) / maxPageButtons);
  const start = groupIndex * maxPageButtons + 1;
  const end = Math.min(start + maxPageButtons - 1, totalPages);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    const next = new URLSearchParams(searchParams);
    next.set('page', String(page));
    setSearchParams(next, { replace: true });
  };

  const hasPageGroups = totalPages > maxPageButtons;
  const isOnFirstPage = currentPage === 1;
  const isOnLastPage = currentPage === totalPages;

  return (
    <ul className={styles.container}>
      {hasPageGroups && (
        <li>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={isOnFirstPage}
            aria-label="이전 페이지"
            className={styles.arrowButton}
          >
            <ArrowLeft className={styles.arrow} />
          </button>
        </li>
      )}

      {pages.map((page, idx) => {
        const isActive = page === currentPage;
        return (
          <li key={idx}>
            <button
              onClick={() => goToPage(page)}
              disabled={isActive}
              aria-current={isActive ? 'page' : undefined}
              className={clsx(styles.pageButton, isActive && styles.activePage)}
            >
              {page}
            </button>
          </li>
        );
      })}

      {hasPageGroups && (
        <li>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={isOnLastPage}
            aria-label="다음 페이지"
            className={styles.arrowButton}
          >
            <ArrowRight className={styles.arrow} />
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
