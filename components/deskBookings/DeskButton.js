import { BookingType } from 'constants/constants';

function handleClick(e) {
  console.log(`clicked ${e}`);
}

// REFACTOR: Abstract out DeskButton/DeskUserInfo helper functions
function getBookingInfo(deskBookingInfo) {
  const deskBookingType = deskBookingInfo.bookingType;

  switch (deskBookingType) {
    case BookingType.Available:
      return 'Available';
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
  return (
    <button onClick={handleClick}>{getBookingInfo(deskBookingInfo)}</button>
  );
}
