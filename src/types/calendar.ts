export interface CalendarProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
  scheduledDates: Set<string>;
}
