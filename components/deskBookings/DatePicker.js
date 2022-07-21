import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import moment from 'moment';

function convertDateToString(date) {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months are zero-indexed
  mm = String(mm).padStart(2, '0');
  let dd = date.getDate();
  dd = String(dd).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}

export default function DatePicker({ handleDatePick }) {
  const [value, setValue] = useState(today);
  // Sends a manual event trigger to date picker
  // so that the initial value is treated the same as all subsequent onChange events
  // Using 'onLoad' would trigger on every re-render instead of just the first

  // const handleChange = () => {

  // }

  useEffect(() => handleDatePick({ target: { value: todayString } }), []);

  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);

  const todayString = convertDateToString(today);
  // const nextMonthString = convertDateToString(nextMonth);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label="Desk date picker"
        renderInput={(props) => <TextField {...props} />}
        value={value}
        minDate={moment(today)}
        // defaultValue={todayString}
        maxDate={moment(nextMonth)}
        onChange={(newValue) => {
          setValue(newValue);
          handleDatePick(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
