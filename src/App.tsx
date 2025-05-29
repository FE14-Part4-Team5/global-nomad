import StateBadge from './components/common/StateBedge/StateBadge';

function App() {
  return (
    <>
      <StateBadge status="pending" label="예약 완료" />
      <StateBadge status="confirmed" label="예약 승인" />
      <StateBadge status="declined" label="예약 거절" />
      <StateBadge status="canceled" label="예약 취소" />
      <StateBadge status="completed" label="체험 완료" />
      {/** pending, confirmed, declined, canceled, completed */}
    </>
  );
}

export default App;
