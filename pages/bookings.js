import Club from 'components/club/Club';
import GridLayout from 'components/common/GridLayout';
import DeskBooking from '../components/deskBookings/DeskBooking';

export default function Bookings() {
  return (
    <GridLayout
      gridItem1={<Club />}
      gridItem2={<Club />}
      gridItem3={<DeskBooking />}
    />
  );
}
