import { BookingType } from "./Desk"

// REFACTOR: Abstract out DeskButton/DeskUserInfo helper functions
function getDeskUserInfo( deskBookingInfo ) {
  const deskBookingType = deskBookingInfo.bookingType
  const deskUser = deskBookingInfo.deskUser // Null if not booked

  switch(deskBookingType) {
    case BookingType.Available:
      return 'Available'
    case BookingType.SelfBooked:
      return `Booked by ${deskUser} (you)`
    case BookingType.OtherBooked:
      return `Booked by ${deskUser}`
    default:
      // TODO: error handling
      console.log(`Unknown BookingType: ${deskBookingType}`)
  }

}

export default function DeskUserInfo({ deskBookingInfo }) {
  return (
    <>
      { getDeskUserInfo(deskBookingInfo) }
    </>
  );
}
