import { useCallback } from 'react';
import { BookingType } from 'constants/constants';
import { styled } from '@mui/material/styles';
import useFirebase from 'hooks/useFirebase';
import Button from '@mui/material/Button';

const StyledDeskButton = styled(Button)`
  color: white;
  margin-right: 0.5rem;

  ${({ bookinginfo }) =>
    bookinginfo === 'Book' &&
    `
    background-color: #497D00;
  `}

  ${({ bookinginfo }) =>
    bookinginfo === 'Unbook' &&
    `
    background-color: #354e76;
  `}

  &:hover {
    background-color: #000000;
    transform: translateY(-1px);
    cursor: pointer;
  }

  ${(props) => props.theme.breakpoints.up('laptop')} {
    margin-right: 1rem;
  }
`;

// REFACTOR: Abstract out DeskButton/DeskUserInfo helper functions
function getBookingInfo(deskBookingInfo) {
  const deskBookingType = deskBookingInfo.bookingType;

  switch (deskBookingType) {
    case BookingType.Available:
      return 'Book';
    case BookingType.SelfBooked:
      return 'Unbook';
    case BookingType.OtherBooked:
      return 'Unavailable';
    default:
      // TODO: error handling
      return `Unknown BookingType: ${deskBookingType}`;
  }
}

export default function DeskButton({ deskBookingInfo }) {
  const { unbookDesk, bookDesk } = useFirebase();

  const bookingInfo = getBookingInfo(deskBookingInfo);
  const { userID, deskID, date } = deskBookingInfo;
  const club = 'grace';

  const handleClick = useCallback(() => {
    switch (bookingInfo) {
      case 'Book':
        bookDesk(userID, date, club, deskID);
        return;
      case 'Unbook':
        unbookDesk(userID, date, club, deskID);
        return;
      default:
        // TODO: error handling
        console.log(`Unknown intent: ${intent}`);
    }
  }, [deskBookingInfo]);

  return (
    <StyledDeskButton
      disabled={bookingInfo === 'Unavailable'}
      bookinginfo={bookingInfo}
      onClick={handleClick}
    >
      {bookingInfo}
    </StyledDeskButton>
  );
}
