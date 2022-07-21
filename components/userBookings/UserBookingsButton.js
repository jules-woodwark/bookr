import { useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import useFirebase from 'hooks/useFirebase';

const StyledButton = styled(Button)`
  background-color: #354e76;
  color: white;

  &:hover,
  &:focus {
    background-color: #000000;
    transform: translateY(-1px);
  }
`;

export default function UserBookingsButton({ userID, deskID, date }) {
  const { unbookDesk } = useFirebase();
  const club = 'grace';

  const handleClick = useCallback(() => {
    unbookDesk(userID, date, club, deskID);
  }, []);

  return <StyledButton onClick={handleClick}>Unbook</StyledButton>;
}
