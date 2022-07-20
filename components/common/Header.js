import { styled } from '@mui/material/styles';
import BookrLogo from 'components/ui/BookrLogo';
import Nav from './Nav';

const StyledHeader = styled('header')`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0.5rem;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <StyledHeader>
      <BookrLogo />
      <Nav />
    </StyledHeader>
  );
}
