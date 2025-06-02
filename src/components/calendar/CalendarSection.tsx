import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import styles from './CalendarSection.module.css';

import ArrowLeft from '@/assets/icons/icon_alt arrow_left.svg';
import ArrowRight from '@/assets/icons/icon_alt arrow_right.svg';

import { getScheduledTileClass } from '@/utils/datetime';
import type { CalendarProps } from '@/types/calendar';

export const CalendarSection = ({ selectedDate, onChange, scheduledDates }: CalendarProps) => {
  return (
    <div>
      <div className={styles.calendarLabel}>날짜</div>
      <Calendar
        onChange={date => onChange(date as Date)}
        value={selectedDate}
        minDate={new Date()}
        locale="en-US"
        calendarType="gregory"
        prevLabel={<img src={ArrowLeft} alt="이전" style={{ width: 24, height: 24 }} />}
        nextLabel={<img src={ArrowRight} alt="다음" style={{ width: 24, height: 24 }} />}
        prev2Label={null}
        next2Label={null}
        navigationLabel={({ date }) =>
          date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
        }
        showNeighboringMonth={true}
        formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
        tileClassName={({ date, view }) =>
          getScheduledTileClass(date, view, scheduledDates, styles.scheduledDate)
        }
      />
    </div>
  );
};

export default CalendarSection;
