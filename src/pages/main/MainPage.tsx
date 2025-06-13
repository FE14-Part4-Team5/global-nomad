import styles from './MainPage.module.css';
import bannerImg from '@/assets/images/img_rectangle2.png';
import Search from '@/components/Search/Search';
import Dropdown from '@/components/dropdown/Dropdown';
import ExperiencesCardList from './components/experience-card-list/ExperiencesCardList';
import HorizontalCardList from './components/horizontal-card-list/HorizontalCardList';
import ActivityCategory from './components/category/ActivityCategory';

import { mockCardData } from './example/MockCardData';
import Pagination from '@/components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import useViewPortSize from '@/hooks/useViewPortSize';

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const { viewportSize } = useViewPortSize();

  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = viewportSize === 'mobile' ? 6 : viewportSize === 'tablet' ? 4 : 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pagedCardData = mockCardData.slice(startIndex, endIndex);

  const handleSelect = (value: string) => {
    console.log(`${value}`);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <div className={styles.bannerWrapper}>
          <img src={bannerImg} alt="배너 이미지" className={styles.banner} />
          <div className={styles.overlay}></div>
          <div className={styles.bannerTextWrapper}>
            <p className={styles.bannerTitle}>함께 배우면 즐거운 스트릿 댄스</p>
            <p className={styles.bannerDescription}>1월의 인기 체험 BSET 🔥</p>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <Search
            explaination="무엇을 체험하고 싶으신가요?"
            placeholder="내가 좋아하는 체험은?"
            buttonText="검색하기"
          />
        </div>
        <div className={styles.horizontalCardListContainer}>
          <div className={styles.title}>🔥 인기 체험</div>
          <HorizontalCardList cardList={mockCardData} />
        </div>
        <div className={styles.experiencesCardListContainer}>
          <div className={styles.activities}>
            <div className={styles.titleAndFilter}>
              {/* 카테고리에 따라 title 이름 바뀌어야 함 - 추후 변경 사항*/}
              <div className={styles.title}>🛼 모든 체험</div>
              <div className={styles.dropdownWrapper}>
                <Dropdown
                  label="가격"
                  options={['가격 낮은순', '가격 높은순']}
                  onSelect={handleSelect}
                />
              </div>
            </div>
            <ActivityCategory />
          </div>
          <ExperiencesCardList cardList={pagedCardData} />

          <div className={styles.paginationWrapper}>
            <Pagination totalItems={mockCardData.length} itemsPerPage={itemsPerPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
