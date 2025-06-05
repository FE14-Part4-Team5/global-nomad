import MyExperienceCard from '@/components/my-experience-card/MyExperienceCard';
import MyExperiencesButton from '../my-experiences-button/MyExperiencesButton';
import EmptyState from '@/components/empty-state/EmptyState';

import { useMyActivities } from '@/hooks/useMyActivities';

import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';

import styles from './MyExperiencesCardList.module.css';

const MyExperiencesCardList = () => {
  const teamId = 'team5';
  const {
    data: userActivities,
    isLoading: isCardLoading,
    isError: isCardError,
  } = useMyActivities(teamId);
  console.log(userActivities);

  if (isCardLoading) return <div>카드 로딩중: 추후 구현예정</div>;
  if (isCardError) return <div>카드 에러남: 추후 구현예정</div>;
  return (
    <>
      {!userActivities?.activities.length ? (
        <EmptyState text="아직 등록한 체험이 없어요" />
      ) : (
        <div className={styles.card}>
          {userActivities?.activities.map((item: MyExperienceCardProps) => (
            <MyExperienceCard
              key={item.id}
              bannerImageUrl={item.bannerImageUrl}
              title={item.title}
              rating={item.rating}
              reviewCount={item.reviewCount}
              currencySymbol="₩"
              price={item.price}
              priceUnit="/인"
              editButton={<MyExperiencesButton variant="edit">수정하기</MyExperiencesButton>}
              deleteButton={<MyExperiencesButton variant="delete">삭제하기</MyExperiencesButton>}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyExperiencesCardList;
