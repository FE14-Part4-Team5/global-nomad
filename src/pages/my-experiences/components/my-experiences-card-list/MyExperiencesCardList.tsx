import MyExperienceCard from '@/components/my-experience-card/MyExperienceCard';
import MyExperiencesButton from '../my-experiences-button/MyExperiencesButton';
import EmptyState from '@/components/empty-state/EmptyState';

import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';

import styles from './MyExperiencesCardList.module.css';

const MyExperiencesCardList = ({
  onDeleteClick,
  userActivities,
}: {
  onDeleteClick: (id: number) => void;
  userActivities: {
    activities: MyExperienceCardProps[];
    totalCount?: number;
    cursorId?: string | null;
  };
}) => {
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
              editButton={
                <MyExperiencesButton variant="edit" to={`/edit-experiences/${item.id}`}>
                  수정하기
                </MyExperiencesButton>
              }
              deleteButton={
                <MyExperiencesButton
                  variant="delete"
                  onClick={() => {
                    if (item.id !== undefined) onDeleteClick(item.id);
                  }}
                >
                  삭제하기
                </MyExperiencesButton>
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyExperiencesCardList;
