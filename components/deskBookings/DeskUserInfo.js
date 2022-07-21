import { BookingType } from 'constants/constants';
import { useEffect, useState } from 'react';
import useFirebase from 'hooks/useFirebase';
import { getUsername } from 'utils/utils';

// REFACTOR: Abstract out DeskButton/DeskUserInfo helper functions
function getDeskUserInfo(deskBookingInfo, deskUsername) {
  const deskBookingType = deskBookingInfo.bookingType;

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
  const [deskUsername, setData] = useState(null);
  const { getAllUserDocs, getUserInfo, isLoading } = useFirebase();

  // DEBUG: This is absolutely awful, but it's only for the demo...
  useEffect(() => {
    const getdeskUsername = async () => {
      try {
        const { deskUserID } = deskBookingInfo;
        const deskUsername = await getUsername(getAllUserDocs, deskUserID);

        // DEBUG: It just keeps getting worse!
        if (deskUsername === undefined) {
          // DEBUG: If we're still waiting on data to be returned
          // give some dummy data to avoid errors
          throw new Error();
        }
        setData(deskUsername);
      } catch (e) {
        // DEBUG: This is _not_ how to handle errors...
        const deskUsername = {
          firstName: 'Mysterious',
          lastName: 'Stranger',
          email: 'mysterious.stranger@and.digital',
        };
        setData(deskUsername);
      }
    };
    getdeskUsername();
  }, [getUserInfo, setData, deskBookingInfo]);

  if (isLoading) return <p>Loading...</p>;
  if (deskUsername === null || deskUsername === undefined) {
    return <p>No user info available</p>;
  }

  return <>{getDeskUserInfo(deskBookingInfo, deskUsername)}</>;
}
