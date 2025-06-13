import { useState } from 'react';
import Calendar from 'react-calendar';

import { formatDate } from '@/utils/date';

import Dropdown from '../dropdown/Dropdown';

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

  const [showDropdownFor, setShowDropdownFor] = useState<'start' | 'end' | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

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
          <div
            onClick={() => setShowDropdownFor(prev => (prev === 'start' ? null : 'start'))}
            role="button"
            className={styles.selectTimeWrapper}
          >
            <div role="button" id="startTime" className={styles.selectStartTime}>
              {startTime || '0:00'}
            </div>
            <ArrowDownIcon />
            {showDropdownFor === 'start' && (
              <Dropdown
                options={hours} // 0:00 ~ 23:00
                selected={startTime}
                onSelect={value => {
                  setStartTime(value);
                  setEndTime('');
                  setShowDropdownFor(null);
                }}
              />
            )}
          </div>
          <div className={styles.selectTimeDash}>-</div>
          <div
            onClick={() => {
              if (!startTime || startTime === '23:00') return;
              setShowDropdownFor(prev => (prev === 'end' ? null : 'end'));
            }}
            role="button"
            className={styles.selectTimeWrapper}
          >
            <div role="button" id="endTime" className={styles.selectEndTime}>
              {endTime || '0:00'}
            </div>
            <ArrowDownIcon />
            {showDropdownFor === 'end' && (
              <Dropdown
                options={hours.filter(h => parseInt(h) > parseInt(startTime))} // startTime 이후만
                selected={endTime}
                onSelect={value => {
                  setEndTime(value);
                  setShowDropdownFor(null);
                }}
              />
            )}
          </div>
          <div role="button" className={styles.selectTimeButton}>
            <PlusIcon className={styles.selectTimeButtonIcon} />
          </div>
        </div>
      </div>
      {showCalendar && (
        <div className={styles.modalOverlay} onClick={() => setShowCalendar(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
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
