import { BookingType, getUsername } from 'constants/constants';

// REFACTOR: Abstract out DeskButton/DeskUserInfo helper functions
function getDeskUserInfo(deskBookingInfo) {
  const deskBookingType = deskBookingInfo.bookingType;
  const { deskUserID } = deskBookingInfo; // Null if not booked

  // TODO: Convert deskUserID into username from firebase (not hardcoded)
  const deskUsername = getUsername(deskUserID);

  switch (deskBookingType) {
    case BookingType.Available:
      return 'Available';
    case BookingType.SelfBooked:
      return `Booked by ${deskUsername} (you)`;
    case BookingType.OtherBooked:
      return `Booked by ${deskUsername}`;
    default:
      // TODO: error handling
      console.log(`Unknown BookingType: ${deskBookingType}`);
  }
}

export default function DeskUserInfo({ deskBookingInfo }) {
  return <>{getDeskUserInfo(deskBookingInfo)}</>;
}
