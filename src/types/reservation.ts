export interface ScheduleSlot {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

export interface ReservationFooterProps {
  price: number;
  headCount: number;
  selectedDate: Date | null;
  selectedTime: ScheduleSlot | undefined;
  onClickDateSelect: () => void;
  onClickReserve: () => void;
}
