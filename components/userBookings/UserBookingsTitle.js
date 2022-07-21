import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledTypograpy = styled(Typography)`
  text-align: center;
`;

export default function UserBookings() {
  return <StyledTypograpy variant="h4">Your Bookings</StyledTypograpy>;
}
