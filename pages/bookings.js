import Club from 'components/club/Club';
import GridLayout from 'components/common/GridLayout';

// import UserBookings from '../components/userBookings/UserBookings';
// import DeskBooking from '../components/deskBookings/DeskBooking';

export default function Bookings() {
  return (
    <GridLayout
      gridItem1={<Club />}
      gridItem2={<Club />}
      gridItem3={<Club />}
    />
  );
}
