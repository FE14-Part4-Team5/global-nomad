import Button from './components/Button/Button';

function App() {
  return (
    <>
      <div>
        <h2>Button 컴포넌트 테스트</h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'gray' }}
        >
          <div>
            <Button variant="primary" isActive={true} padding="1.75rem 15.35rem">
              label
            </Button>
          </div>
          <div>
            <Button variant="primary" isActive={false} padding="1.75rem 15.35rem">
              Primary Inactive
            </Button>
          </div>
          <div>
            <Button variant="secondary" isActive={true} padding="1.75rem 15.35rem">
              Secondary Active
            </Button>
          </div>
          <div>
            <Button variant="tertiary" isActive={true} padding="1.75rem 15.35rem">
              Tertiary Active
            </Button>
          </div>
          <div>
            <Button variant="ghost" isActive={true} padding="1rem 2rem">
              Ghost Active
            </Button>
          </div>
          <div>
            <Button variant="filter-white" isActive={true} padding="1rem 2rem">
              Filter White
            </Button>
          </div>
          <div>
            <Button
              variant="filter-black"
              isActive={true}
              icon={
                <span role="img" aria-label="star">
                  ⭐
                </span>
              }
              padding="1.2rem 2.5rem"
            >
              label
            </Button>
          </div>
          <div>
            {/* 아이콘과 padding props 테스트 */}
            <Button
              variant="primary"
              isActive={true}
              icon={
                <span role="img" aria-label="star">
                  ⭐
                </span>
              }
              padding="1.2rem 2.5rem"
            >
              label
            </Button>
          </div>
          <div>
            <Button
              variant="secondary"
              isActive={true}
              icon={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github"
                  width={16}
                  height={16}
                />
              }
              padding="0.5rem 1.5rem"
            >
              이미지 아이콘
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
