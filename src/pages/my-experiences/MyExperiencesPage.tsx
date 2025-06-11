import { useState } from 'react';
import { Link } from 'react-router-dom';

import SideNavigation from '@/components/side-navigation/SideNavigation';
import MyExperiencesHeader from '@/components/my-experiences-header/MyExperiencesHeader';
import MyExperiencesCardList from './components/my-experiences-card-list/MyExperiencesCardList';
import Modal from './example/Modal';

import { useInfiniteMyActivities } from '@/hooks/useInfiniteMyActivities';
import { useMyProfileQuery } from '@/hooks/useMyProfile';
import { myActivitiesService } from '@/apis/myActivities';
import type { ActivitiesResponse } from '@/hooks/useInfiniteMyActivities';

import styles from './MyExperiencesPage.module.css';
import { LoadingSideNavigation } from './components/loading/Loading';

const MyExperiences = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activityId, setActivityId] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setActivityId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (activityId === null) return;
      await myActivitiesService.deleteActivity({ teamId: '14-5', activityId });
      refetch();
      //토스트 띄우기 고려
    } catch (error) {
      console.log(error);
      throw new Error();
    } finally {
      setIsModalOpen(false);
    }
  };

  const { data: userData } = useMyProfileQuery();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteMyActivities();

  const pages = (data as { pages: ActivitiesResponse[] } | undefined)?.pages;
  const allActivities = pages?.flatMap(page => page.activities) ?? [];

  return (
    <div className={styles.myExperiences}>
      <div className={styles.sideNavigation}>
        {userData ? (
          <SideNavigation defaultImage={userData.profileImageUrl as string} />
        ) : (
          <LoadingSideNavigation />
        )}
      </div>
      <div>
        <MyExperiencesHeader
          title="내 체험 관리"
          subTitle="체험을 등록하거나 수정 및 삭제가 가능합니다."
          className="columnRowContents"
        >
          <Link to={'/add-experiences'}>
            <button className={styles.button}>체험 등록하기</button>
          </Link>
        </MyExperiencesHeader>
        <MyExperiencesCardList
          userActivities={{ activities: allActivities }}
          onLoadMore={fetchNextPage}
          hasMore={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onDeleteClick={handleOpen}
        />
      </div>
      {isModalOpen && activityId !== null && (
        <Modal
          onConfirm={handleConfirmDelete}
          onClose={() => setIsModalOpen(false)}
          text="등록한 체험을 삭제하시겠어요?"
          cancelText="아니오"
          confirmText="삭제하기"
        />
      )}
    </div>
  );
};

export default MyExperiences;
