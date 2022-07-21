import CardWrapper from 'components/ui/CardWrapper';
import UserBookingsTitle from './UserBookingsTitle';
import UserBookingsTable from './UserBookingsTable';

export default function UserBookings() {
  return (
    <CardWrapper>
      <UserBookingsTitle />
      <UserBookingsTable />
    </CardWrapper>
  );
}
