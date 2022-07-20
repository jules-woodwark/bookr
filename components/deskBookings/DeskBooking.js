import { useState, useCallback } from 'react';
import DeskBookingTitle from './DeskBookingTitle';
import DatePicker from './DatePicker';
import DeskList from './DeskList';

export default function DeskBooking() {
  const [selectedDate, setDate] = useState(0);

  const handleDatePick = useCallback((input) => {
    // TODO: Check this is locale-agnostic
    // silly americans and their month/hour/year/day/second logic
    setDate(input.target.value);
  });

  return (
    <>
      <DeskBookingTitle />
      <DatePicker handleDatePick={handleDatePick} />
      <DeskList selectedDate={selectedDate} />
    </>
  );
}
