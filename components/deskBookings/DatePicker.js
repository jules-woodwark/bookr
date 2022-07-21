import { useEffect } from 'react';

function convertDateToString(date) {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months are zero-indexed
  mm = String(mm).padStart(2, '0');
  let dd = date.getDate();
  dd = String(dd).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}

export default function DatePicker({ handleDatePick }) {
  // Sends a manual event trigger to date picker
  // so that the initial value is treated the same as all subsequent onChange events
  // Using 'onLoad' would trigger on every re-render instead of just the first
  useEffect(() => handleDatePick({ target: { value: todayString } }), []);

  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);

  const todayString = convertDateToString(today);
  const nextMonthString = convertDateToString(nextMonth);

  return (
    <input
      type="date"
      min={todayString}
      defaultValue={todayString}
      max={nextMonthString}
      onChange={handleDatePick}
    />
  );
}
