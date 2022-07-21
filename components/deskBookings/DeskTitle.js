import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDeskTitle = styled(Typography)`
  margin-bottom: 0.5rem;
`;

export default function DeskTitle({ deskID }) {
  return <StyledDeskTitle variant="h4">Desk {deskID}</StyledDeskTitle>;
}
