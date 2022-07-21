import { useEffect, useContext } from 'react';
import { AuthContext } from 'store';
import useFirebase from 'hooks/useFirebase';
import DeskTitle from './DeskTitle';
import DeskButton from './DeskButton';
import DeskUserInfo from './DeskUserInfo';
import { BookingType } from 'constants/constants';

function getDeskBookingInfo(deskID, bookingData, date) {
  const authCtx = useContext(AuthContext);
  const { user } = authCtx;
  const userID = user.uid;
  // console.log(user);

  let deskBookingType;
  let deskUserID;

  if (bookingData) {
    deskUserID = bookingData[deskID];

    switch (deskUserID) {
      case userID:
        deskBookingType = BookingType.SelfBooked;
        break;
      case undefined:
        // _This_ table hasn't been booked today
        deskBookingType = BookingType.Available;
        // Handle null & undefined users the same way
        deskUserID = null;
        break;
      default:
        deskBookingType = BookingType.OtherBooked;
    }
  } else {
    // _No_ tables booked today
    deskBookingType = BookingType.Available;
  }

  // TODO: This return is getting cluttered, should be able to pull out _some_ stuff
  // Or fully commit and also add 'club'?
  return {
    deskID,
    deskUserID,
    date,
    userID,
    bookingType: deskBookingType,
  };
}

export default function Desk({ selectedDate, deskID }) {
  const { getNodeData, nodeData, isLoading } = useFirebase();
  let bookingData;

  useEffect(() => {
    getNodeData('clubs', 'grace', 'bookings', selectedDate);
  }, [selectedDate]);

  if (isLoading) return <p>Loading...</p>;
  if (nodeData === null) {
    // No bookings at all on this day (so far), so certain keys don't exist in firestore. Needs to be handled separately
    bookingData = {};
  } else {
    bookingData = nodeData;
  }

  const deskBookingInfo = getDeskBookingInfo(deskID, bookingData, selectedDate);
  return (
    <>
      <DeskTitle deskID={deskID} />
      <DeskButton deskBookingInfo={deskBookingInfo} />
      <DeskUserInfo deskBookingInfo={deskBookingInfo} />
    </>
  );
}
