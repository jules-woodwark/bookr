import { useEffect } from 'react';
import useFirebase from 'hooks/useFirebase';
import DeskTitle from './DeskTitle';
import DeskButton from './DeskButton';
import DeskUserInfo from './DeskUserInfo';

export const BookingType = {
  Available: 'Available',
  SelfBooked: 'SelfBooked',
  OtherBooked: 'OtherBooked'
};

function getDeskBookingInfo(deskID, bookingData) {
  const user = 'kieran' // DEBUG
  console.log(bookingData)

  let deskBookingType, deskUser

  if (bookingData) {
    deskUser = bookingData[deskID]

    switch(deskUser) {
      case user:
        deskBookingType = BookingType.SelfBooked
        break
      case undefined:
        // _This_ table hasn't been booked today
        deskBookingType = BookingType.Available
        // Handle null & undefined users the same way
        deskUser = null
        break
      default:
        deskBookingType = BookingType.OtherBooked
    }
  } else {
    // _No_ tables booked today
    deskBookingType = BookingType.Available
  }

  console.log(deskUser)
  return {
          bookingType: deskBookingType,
          deskUser: deskUser
        }
}


export default function Desk({ selectedDate, deskID }) {
  const { getClubNodeData, nodeData, isLoading } = useFirebase()
  let deskBookingInfo, bookingData

  useEffect(() => {
      getClubNodeData('grace', 'bookings', selectedDate);
  }, [selectedDate]);

  if (isLoading) return <p>Loading...</p>;
  if (nodeData === null) {
    // No bookings at all on this day (so far), so certain keys don't exist in firestore. Needs to be handled separately
    bookingData = {}
    //return <p>No desk booking details</p>; 
  } else {
    bookingData = nodeData
    //deskBookingInfo = getDeskBookingInfo(deskID, bookingData)
    //console.log(deskBookingInfo)
  }

  deskBookingInfo = getDeskBookingInfo(deskID, bookingData)
  // BUG: DeskButton/DeskUserInfo are receiving `undefined` deskBookingInfo
  return (
    <>
      <DeskTitle deskID={deskID} />
      <DeskButton
        deskBookingInfo={deskBookingInfo}
      />
      <DeskUserInfo
        deskBookingInfo={deskBookingInfo}
      />
    </>
  );
}
