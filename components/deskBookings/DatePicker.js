import { useEffect } from 'react';

function getToday() {
  const today = new Date();

  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  mm = String(mm).padStart(2, '0')
  let dd = today.getDate();
  dd = String(dd).padStart(2, '0')

  return `${yyyy}-${mm}-${dd}`
}

export default function DatePicker({ handleDatePick }) {
  // Sends a manual event trigger to date picker
  // so that the initial value is treated the same as all subsequent onChange events
  // Using 'onLoad' would trigger on every re-render instead of just the first
  useEffect(() =>
    handleDatePick(
      {'target':
        { 'value': getToday() }
      }
    ), []
  );

  return <input
            type="date"
            defaultValue={ getToday() }
            onChange={handleDatePick}
          />;
}
