import Button from '@mui/material/Button';
import useFirebase from 'hooks/useFirebase';
import { useCallback } from 'react';

export default function UserBookingsButton({ userID, deskID, date }) {
  const { unbookDesk } = useFirebase();
  const club = 'grace';

  const handleClick = useCallback(() => {
    unbookDesk(userID, date, club, deskID);
  }, []);

  return <Button onClick={handleClick}>Unbook</Button>;
}
