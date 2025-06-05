import { Link } from 'react-router-dom';

import SideNavigation from '@/components/side-navigation/SideNavigation';
import MyExperiencesHeader from '@/components/my-experiences-header/MyExperiencesHeader';
import MyExperiencesCardList from './components/my-experiences-card-list/MyExperiencesCardList';
import ExampleLogin from './example/ExampleLogin';

import { useMyProfile } from '@/hooks/useMyProfile';

import styles from './MyExperiencesPage.module.css';

const MyExperiences = () => {
  const teamId = 'team5';
  const {
    data: userData,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useMyProfile(teamId);
  // console.log(userData);

  if (isProfileLoading) return <ExampleLogin />;
  if (isProfileError) return <ExampleLogin />;

  return (
    <div className={styles.myExperiences}>
      <div className={styles.sideNavigation}>
        {userData && <SideNavigation defaultImage={userData.profileImageUrl} />}
      </div>
      <div>
        <MyExperiencesHeader
          title="내 체험 관리"
          subTitle="체험을 등록하거나 수정 및 삭제가 가능합니다."
          className="columnRowContents"
        >
          <Link to={'/add'}>
            <button className={styles.button}>체험 등록하기</button>
          </Link>
        </MyExperiencesHeader>
        <MyExperiencesCardList />
      </div>
    </div>
  );
};

export default MyExperiences;
