import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledTypograpy = styled(Typography)`
  text-align: left;

  ${(props) => props.theme.breakpoints.up('lg')} {
    text-align: center;
  }
`;

export default function UserBookings() {
  return <StyledTypograpy variant="h3">Your Bookings</StyledTypograpy>;
}
