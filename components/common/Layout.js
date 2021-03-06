import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';
import Header from './Header';
import Snackbar from '../ui/Snackbar';

const StyledMain = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-top: 76px;
  padding: 70px 0;
  max-width: 100%;

  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 5%;
    margin-right: 5%;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-left: 15%;
    margin-right: 15%;
  }
`;

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />
      <StyledMain component="main">{children}</StyledMain>
      <Footer />
      <Snackbar />
    </>
  );
}

export default Layout;
