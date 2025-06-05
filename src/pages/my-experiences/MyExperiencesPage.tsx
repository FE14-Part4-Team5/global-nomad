import { Link } from 'react-router-dom';

import SideNavigation from '@/components/side-navigation/SideNavigation';
import MyExperiencesHeader from '@/components/my-experiences-header/MyExperiencesHeader';
import MyExperiencesCardList from './components/my-experiences-card-list/MyExperiencesCardList';
import ExampleLogin from './example/ExampleLogin';
import Modal from './example/Modal';
import { useMyActivities } from '@/hooks/useMyActivities';

import { useMyProfile } from '@/hooks/useMyProfile';
import { deleteActivity } from './example/example';

import styles from './MyExperiencesPage.module.css';
import { useState } from 'react';

const MyExperiences = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetId, setTargetId] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setTargetId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteActivity(teamId, targetId);
      refetch();
      // console.log('삭제가 완료되었습니다!');
    } catch (error) {
      console.log(error);
      throw new Error();
    } finally {
      setIsModalOpen(false);
    }
  };

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
    refetch,
  } = useMyActivities(teamId);

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
          className="columnRowContents"
        >
          <Link to={'/add'}>
            <button className={styles.button}>체험 등록하기</button>
          </Link>
        </MyExperiencesHeader>
        <MyExperiencesCardList
          onDeleteClick={handleOpen}
          userActivities={userActivities ?? { activities: [] }}
        />
      </div>
      {isModalOpen && (
        <Modal onConfirm={handleConfirmDelete} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default MyExperiences;
