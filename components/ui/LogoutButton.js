import { styled } from '@mui/material/styles';
import useFirebase from '../../hooks/useFirebase';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)`
  color: white;
  background-color: #000000;

  ${(props) => props.theme.breakpoints.up('szm')} {
    padding: 10px 36px;
  }

  &:hover {
    background-color: #d82036;
  }
`;

export default function LogoutButton() {
  const { logout } = useFirebase();

  const logoutHandler = () => {
    logout();
  };

  return (
    <StyledButton
      variant="outlined"
      color="inherit"
      size="large"
      onClick={logoutHandler}
    >
      Logout
    </StyledButton>
  );
}
