import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import UserBookingsTable from './UserBookingsTable';
import UserBookingsTitle from './UserBookingsTitle';

const StyledCard = styled(Card)`
  padding: 2rem 3rem;
  border-radius: 15px;
  box-sizing: border-box;
  overflow: scroll;
  max-height: 600px;

  ${(props) => props.theme.breakpoints.up('laptopM')} {
    max-height: 472px;
  }
`;

export default function UserBookings() {
  return (
    <StyledCard>
      <UserBookingsTitle />
      <UserBookingsTable />
    </StyledCard>
  );
}
