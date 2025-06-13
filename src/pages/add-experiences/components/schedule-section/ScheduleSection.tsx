import { useState } from 'react';
import Calendar from 'react-calendar';

import { formatDate } from '@/utils/date';

import ArrowDownIcon from '@/assets/icons/icon_alt arrow_down.svg?react';
import CalendarIcon from '@/assets/icons/icon_calendar.svg?react';
import PlusIcon from '@/assets/icons/icon_plus.svg?react';
import ArrowLeft from '@/assets/icons/icon_alt arrow_left.svg?react';
import ArrowRight from '@/assets/icons/icon_alt arrow_right.svg?react';

import styles from './ScheduleSection.module.css';

const ScheduleSection = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const formattedDate = formatDate(date);

  const handleClickCalendar = () => {
    setShowCalendar(prev => !prev);
  };

  return (
    <div className={styles.scheduleSection}>
      <div className={styles.scheduleSectionTitle}>예약 가능한 시간대</div>
      <div className={styles.labelFlex}>
        <label htmlFor="date" className={styles.dateLabel}>
          날짜
        </label>
        <label htmlFor="startTime" className={styles.startTimeLabel}>
          시작 시간
        </label>
        <label htmlFor="endTime" className={styles.endTimeLabel}>
          종료 시간
        </label>
      </div>
      <div className={styles.dateWrapper}>
        <div onClick={handleClickCalendar} className={styles.calendarInputWrapper}>
          <input
            type="text"
            id="date"
            value={formattedDate}
            placeholder="yy/mm/dd"
            readOnly
            className={styles.dateInput}
          />
          <CalendarIcon className={styles.calendarIcon} />
        </div>
        <div className={styles.selectTime}>
          <div role="button" className={styles.selectTimeWrapper}>
            <div role="button" id="startTime" className={styles.selectStartTime}>
              0:00
            </div>
            <ArrowDownIcon />
          </div>
          <div className={styles.selectTimeDash}>-</div>
          <div role="button" className={styles.selectTimeWrapper}>
            <div role="button" id="endTime" className={styles.selectEndTime}>
              0:00
            </div>
            <ArrowDownIcon />
          </div>
          <div role="button" className={styles.selectTimeButton}>
            <PlusIcon className={styles.selectTimeButtonIcon} />
          </div>
        </div>
      </div>
      {showCalendar && (
        <div className={styles.modalOverlay} onClick={() => setShowCalendar(false)}>
          <div
            className={styles.modalContent}
            onClick={e => e.stopPropagation()} // overlay 클릭 시 닫히게, 모달 자체는 클릭 무시
          >
            <Calendar
              onChange={value => {
                if (value instanceof Date) {
                  setDate(value);
                  setShowCalendar(false);
                }
              }}
              value={date}
              prevLabel={<ArrowLeft style={{ width: 24, height: 24 }} />}
              nextLabel={<ArrowRight style={{ width: 24, height: 24 }} />}
              prev2Label={null}
              next2Label={null}
              locale="ko-KR"
              className={styles.calendar}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleSection;
