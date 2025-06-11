import { useState } from 'react';
import { Link } from 'react-router-dom';

import SideNavigation from '@/components/side-navigation/SideNavigation';
import MyExperiencesHeader from '@/components/my-experiences-header/MyExperiencesHeader';
import MyExperiencesCardList from './components/my-experiences-card-list/MyExperiencesCardList';
import Modal from './example/Modal';

import { useInfiniteMyActivities } from '@/hooks/useInfiniteMyActivities';
import { useMyProfile } from '@/hooks/useMyProfile';
import { deleteActivity } from './example/example';
import type { ActivitiesResponse } from '@/hooks/useInfiniteMyActivities';

import styles from './MyExperiencesPage.module.css';
import { LoadingSideNavigation } from './components/loading/Loading';

const MyExperiences = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetId, setTargetId] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setTargetId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (targetId === null) return;
      await deleteActivity(teamId, targetId);
      refetch();
      //토스트 띄우기 고려
    } catch (error) {
      console.log(error);
      throw new Error();
    } finally {
      setIsModalOpen(false);
    }
  };

  const teamId = 'team5';
  const { data: userData } = useMyProfile(teamId);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteMyActivities(teamId);

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
      {isModalOpen && targetId !== null && (
        <Modal
          onConfirm={handleConfirmDelete}
          onClose={() => setIsModalOpen(false)}
          text="등록한 체험을 삭제하시겠어요?"
          cancelText="아니오"
          confirmText="취소하기"
        />
      )}
    </div>
  );
};

export default MyExperiences;
