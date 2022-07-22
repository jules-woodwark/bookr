import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const StyledCard = styled(Card)`
  padding: 0.5rem 0.75rem;
  border-radius: 15px;

  ${(props) => props.theme.breakpoints.up('szm')} {
    padding: 1rem 1.5rem;
  }

  ${(props) => props.theme.breakpoints.up('laptop')} {
    padding: 2rem 3rem;
  }
`;

export default function CardWrapper({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
