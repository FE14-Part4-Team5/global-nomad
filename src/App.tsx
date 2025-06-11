import ReservationCard from './components/reservation-card/ReservationCard';

import image from './assets/images/img_rectangle2.png';

function App() {
  const handleEdit = () => {
    return;
  };

  const handleDelete = () => {
    return;
  };

  const handleReview = () => {
    return;
  };

  return (
    <>
      <div
        style={{
          height: '1000px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ReservationCard
          status={mockActivity.status as ReservationStatus}
          activity={mockActivity.activity}
          date={mockActivity.date}
          dateDot={'∙'}
          startTime={mockActivity.startTime}
          timedash={'-'}
          endTime={mockActivity.endTime}
          currencySymbol={'₩'}
          totalPrice={mockActivity.totalPrice}
          headCount={mockActivity.headCount}
          headCountUnit={'명'}
          reviewSubmitted={mockActivity.reviewSubmitted}
          reviewSubmittedButton={
            <Button color="#3D9EF2" onClick={handleReview}>
              <div style={{ color: 'white' }}>후기 작성</div>
            </Button>
          }
          editReservationButton={
            <Button color="#ffffff" onClick={handleEdit}>
              예약 변경
            </Button>
          }
          cancelReservationButton={
            <Button color="#EDEEF2" onClick={handleDelete}>
              예약 취소
            </Button>
          }
        />
      </div>
    </>
  );
}

export default App;

const Button = ({
  children,
  color,
  onClick,
}: {
  children: React.ReactNode;
  color: string;
  onClick: () => void;
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        marginRight: '12px',
        width: '71px',
        height: '29px',
        color: '#707177',
        border: '1px solid #EDEEF2',
        borderRadius: '8px',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const mockActivity = {
  id: 1,
  teamId: 'asd',
  userId: 1,
  activity: {
    id: 1,
    bannerImageUrl: image,
    title: '함께 배우면 즐거운 스트릿 댄스',
  },
  status: 'completed',
  reviewSubmitted: false,
  totalPrice: 35000,
  headCount: 10,
  date: '2025-06-01',
  startTime: '10:00',
  endTime: '12:00',
  createdAt: '2025-06-01T06:47:51.016Z',
  updatedAt: '2025-06-01T06:47:51.016Z',
};

type ReservationStatus = 'pending' | 'confirmed' | 'declined' | 'canceled' | 'completed';
