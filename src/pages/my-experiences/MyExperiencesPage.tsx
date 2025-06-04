import SideNavigation from '@/components/side-navigation/SideNavigation';
import MyExperiencesHeader from './components/my-experiences-header/MyExperiencesHeader';
import MyExperienceCard from '@/components/my-experience-card/MyExperienceCard';
import MyExperiencesButton from './components/my-experiences-button/MyExperiencesButton';
import ExampleLogin from './example/ExampleLogin';

import { useMyProfile } from '@/hooks/useMyProfile';
import { useMyActivities } from '@/hooks/useMyActivities';

import type { MyExperienceCardProps } from '@/components/my-experience-card/MyExperienceCard';
import styles from './MyExperiencesPage.module.css';
import EmptyState from './components/empty-state/EmptyState';
import { Link } from 'react-router-dom';

const MyExperiences = () => {
  const teamId = 'team5';
  const {
    data: userData,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useMyProfile(teamId);
  console.log(userData);
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
        <MyExperiencesHeader
          title="내 체험 관리"
          subTitle="체험을 등록하거나 수정 및 삭제가 가능합니다."
          children={
            <Link to={'/add'}>
              <button className={styles.button}>체험 등록하기</button>
            </Link>
          }
        />
        {userActivities?.activities.length === 0 && <EmptyState text="아직 등록한 체험이 없어요" />}
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
