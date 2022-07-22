import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import BookrLogo from 'components/ui/BookrLogo';
import Nav from './Nav';

const StyledHeader = styled('header')`
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 40;
`;

export default function Header() {
  const notMobile = useMediaQuery((theme) => theme.breakpoints.up('szm'));
  let logo;

  notMobile
    ? (logo = <BookrLogo height="60px" width="170px" />)
    : (logo = <BookrLogo height="40px" width="113.33px" />);

  return (
    <StyledHeader>
      {logo}
      <Nav />
    </StyledHeader>
  );
}
