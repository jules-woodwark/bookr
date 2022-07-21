import { useContext } from 'react';
import { UiContext } from 'store';
import Button from '@mui/material/Button';

export default function DeskLayoutButton() {
  const uiCtx = useContext(UiContext);
  const { toggleDeskLayout } = uiCtx;

  const handleClick = () => {
    toggleDeskLayout();
  };

  return <Button onClick={handleClick}>See Office Layout</Button>;
}
