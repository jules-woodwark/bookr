import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AndLogo from 'components/ui/AndLogo';
import Typography from '@mui/material/Typography';

const StyledFooter = styled('footer')`
  background-color: #d82036;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
`;

const StyledTypography = styled(Typography)`
  color: white;
  margin-left: 2rem;

  ${(props) => props.theme.breakpoints.up('szm')} {
    font-size: 1.4em;
  }
`;

export default function Footer() {
  const notMobile = useMediaQuery((theme) => theme.breakpoints.up('szm'));
  let logo;

  notMobile
    ? (logo = <AndLogo reversecolours="true" height="60px" width="180px" />)
    : (logo = <AndLogo reversecolours="true" height="40px" width="120.00px" />);

  return (
    <StyledFooter>
      {logo} <StyledTypography varaint="p">© 2022</StyledTypography>
    </StyledFooter>
  );
}
