import { styled } from '@mui/material/styles';
import { MdClose } from 'react-icons/md';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)`
  align-items: center;
  background-color: #d82036;
  border-radius: 50%;
  border: none;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.7em;
  font-weight: inherit;
  justify-content: center;
  margin-left: auto;
  text-decoration: none;
  transition: all 250ms ease 0s;
  min-width: 5px;
  min-height: 5px;

  &:hover,
  &:focus {
    background-color: #000000;
    transform: translateY(-1px);
  }

  ${(props) => props.theme.breakpoints.up('szm')} {
    padding: 0.5em;
    min-width: 40px;
    min-height: 40x;
  }

  ${(props) => props.theme.breakpoints.up('szm')} {
    padding: 0.6em;
    min-width: 45px;
    min-height: 45x;
  }

  ${(props) => props.theme.breakpoints.up('laptop')} {
    padding: 0.75em;
    min-width: 50px;
    min-height: 50px;
  }
`;

const StyledCloseIcon = styled(MdClose)`
  font-size: 1.5em;
`;

export default function CloseButton({ onClick }) {
  const handleClick = () => onClick();

  return (
    <StyledButton onClick={handleClick}>
      <StyledCloseIcon />
    </StyledButton>
  );
}
