import { useState } from 'react';
import styles from './Calendar.module.css';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;

  const daysInMonth = new Date(year, month, 0).getDate();
  const startDay = new Date(year, month - 1, 1).getDay();

  const movePrevMonth = () => {
    setCurrentDate(new Date(year, month - 2, 1));
  };
  const moveNextMonth = () => {
    setCurrentDate(new Date(year, month, 1));
  };

  const dateCells = [];

  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();

  for (let i = 0; i < startDay; i++) {
    const prevDay = daysInPrevMonth - (startDay - 1 - i);
    dateCells.push(
      <div key={`prev-${i}`} className={styles.adjacentMonthCell}>
        {prevDay}
      </div>
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dateCells.push(
      <div key={i} className={styles.dateCell} onClick={() => setSelectedDate(i)}>
        {i}
      </div>
    );
  }

  const totalCells = startDay + daysInMonth;
  const nextDays = Math.max(0, 35 - totalCells);

  for (let i = 1; i <= nextDays; i++) {
    dateCells.push(
      <div key={`next-${i}`} className={styles.adjacentMonthCell}>
        {i}
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button onClick={movePrevMonth}>{'◀'}</button>
        <div>
          {year}년 {month}월
        </div>
        <button onClick={moveNextMonth}>{'▶'}</button>
      </div>
      <div className={styles.grid}>
        {days.map(d => (
          <div key={d} className={styles.dayLabel}>
            {d}
          </div>
        ))}

        {dateCells}
      </div>

      {selectedDate && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={() => setSelectedDate(null)}>
              ×
            </button>
            <h3>
              {year}년 {month}월 {selectedDate}일
            </h3>

            <div className={styles.modalSection}>
              <strong>예약 시간</strong>
              <select>
                <option>14:00 - 15:00</option>
              </select>
            </div>

            <div className={styles.modalSection}>
              <strong>예약 내역</strong>
              <div className={styles.reservationItem}>
                <div>정만철 (10명)</div>
                <button>승인</button>
                <button>거절</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
