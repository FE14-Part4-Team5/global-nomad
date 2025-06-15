// 1) 숫자를 두 자리 문자열로 패딩하는 유틸 함수
const pad2 = (n: number): string => String(n).padStart(2, '0');

// 2) Date 객체를 'yy/MM/dd' 문자열로 변환하는 함수
export const formatDate = (date: Date): string => {
  const fullYear = date.getFullYear();
  const yy = pad2(fullYear); // 예: 2025 % 100 = 25 → '25'
  const mm = pad2(date.getMonth() + 1); // 월은 0부터 시작하므로 +1
  const dd = pad2(date.getDate());
  return `${yy}-${mm}-${dd}`;
};
