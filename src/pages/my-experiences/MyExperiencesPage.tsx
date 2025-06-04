import { Link } from 'react-router-dom';

import SideNavigation from '@/components/side-navigation/SideNavigation';
import MyExperienceCard from '@/components/my-experience-card/MyExperienceCard';
import MyExperiencesButton from './components/MyExperiencesButton';
import ExampleLogin from './example/ExampleLogin';

import { useMyProfile } from '@/hooks/useMyProfile';
import { useMyActivities } from '@/hooks/useMyActivities';

import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';
import EmptyStateImage from '@/assets/images/img_empty.png';
import styles from './MyExperiencesPage.module.css';

const MyExperiences = () => {
  const teamId = 'team5';
  const {
    data: userData,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useMyProfile(teamId);

  const {
    data: userActivities,
    isLoading: isCardLoading,
    isError: isCardError,
  } = useMyActivities(teamId);
  console.log(userActivities);
  if (isProfileLoading || isCardLoading) return <ExampleLogin />;
  if (isProfileError || isCardError) return <ExampleLogin />;

  return (
    <div className={styles.myExperiences}>
      <div className={styles.sideNavigation}>
        {userData && <SideNavigation defaultImage={userData.profileImageUrl} />}
      </div>
      <div>
        <div className={styles.contents}>
          <div className={styles.headerText}>
            <div className={styles.title}>내 체험 관리</div>
            <div className={styles.subTitle}>
              체험을 등록하거나 <br className={styles.br} />
              수정 및 삭제가 가능합니다.
            </div>
          </div>
          <Link to={'/add'}>
            <button className={styles.button}>체험 등록하기</button>
          </Link>
        </div>
        {userActivities?.activities.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateImageWrapper}>
              <img
                src={EmptyStateImage}
                alt="등록된 체험이 없어 아쉬워하는 지구 이미지"
                className={styles.emptyStateImage}
              />
            </div>
            <div className={styles.emptyStateText}>아직 등록한 체험이 없어요</div>
          </div>
        )}
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
      </div>
    </div>
  );
};

export default MyExperiences;
