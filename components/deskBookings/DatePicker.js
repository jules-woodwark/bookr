import { useEffect } from 'react';

export default function DatePicker() {
  useEffect(() => console.log('effect'), []);

  return <input type="date" />;
}
