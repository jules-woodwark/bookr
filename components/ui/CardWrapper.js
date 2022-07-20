import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const StyledCard = styled(Card)`
  padding: 2rem 3rem;
  border-radius: 15px;
`;

export default function CardWrapper({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
