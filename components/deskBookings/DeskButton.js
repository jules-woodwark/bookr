import { BookingType } from "./Desk"

function handleClick(e) {
  console.log('clicked');
}

// REFACTOR: Abstract out DeskButton/DeskUserInfo helper functions
function getBookingInfo( deskBookingInfo ) {
  const deskBookingType = deskBookingInfo.bookingType
  const deskUser = deskBookingInfo.deskUser // Null if not booked

  switch(deskBookingType) {
    case BookingType.Available:
      return 'Available'
    case BookingType.SelfBooked:
      return 'Unbook'
    case BookingType.OtherBooked:
      return 'Unavailable'
    default:
      // TODO: error handling
      return `Unknown BookingType: ${deskBookingType}`
  }

}

export default function DeskButton({ deskBookingInfo }) {
  return <button onClick={handleClick}>{ getBookingInfo(deskBookingInfo) }</button>;
}
