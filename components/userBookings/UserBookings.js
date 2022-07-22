import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import UserBookingsTable from './UserBookingsTable';
import UserBookingsTitle from './UserBookingsTitle';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 15px;
  box-sizing: border-box;
  overflow: scroll;
  max-height: 600px;

  ${(props) => props.theme.breakpoints.up('szm')} {
    padding: 1rem 1.5rem;
  }

  ${(props) => props.theme.breakpoints.up('xm')} {
    align-items: flex-start;
  }

  ${(props) => props.theme.breakpoints.up('laptop')} {
    padding: 2rem 3rem;
  }

  ${(props) => props.theme.breakpoints.up('laptopM')} {
    max-height: 472px;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    align-items: center;
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
