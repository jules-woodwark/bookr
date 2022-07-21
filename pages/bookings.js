import { useContext } from 'react';
import { AuthContext } from 'store';
import Club from 'components/club/Club';
import GridLayout from 'components/common/GridLayout';
import DeskBooking from '../components/deskBookings/DeskBooking';
import UserBookings from 'components/userBookings/UserBookings';

// const
export default function Bookings() {
  const uiCtx = useContext(AuthContext);
  const { user } = uiCtx;

  const bookings = user ? (
    <GridLayout
      gridItem1={<Club />}
      gridItem2={<UserBookings />}
      gridItem3={<DeskBooking />}
    />
  ) : null;

  return bookings;
}
