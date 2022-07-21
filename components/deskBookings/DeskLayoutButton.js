import { useContext } from 'react';
import { UiContext } from 'store';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)`
  margin-left: 3rem;
  color: white;
  background-color: #d82036;
  max-height: 3rem;
  padding: 1rem;
  font-size: 1em;

  &:hover,
  &:focus {
    background-color: #000000;
    transform: translateY(-1px);
  }
`;

export default function DeskLayoutButton() {
  const uiCtx = useContext(UiContext);
  const { toggleDeskLayout } = uiCtx;

  const handleClick = () => {
    toggleDeskLayout();
  };

  return <StyledButton onClick={handleClick}>See Office Layout</StyledButton>;
}
