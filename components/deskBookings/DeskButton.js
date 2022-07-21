import { BookingType } from 'constants/constants';
import useFirebase from 'hooks/useFirebase';

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

  function handleClick(e) {
    const intent = e.target.innerHTML;

    switch (intent) {
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
  }

  return (
    <button disabled={bookingInfo === 'Unavailable'} onClick={handleClick}>
      {bookingInfo}
    </button>
  );
}
