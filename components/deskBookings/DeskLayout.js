import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { UiContext } from 'store';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import CloseButton from 'components/ui/CloseButton';
import Modal from 'components/ui/Modal';

const StyledDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function DeskLayout() {
  const uiCtx = useContext(UiContext);
  const { toggleDeskLayout, showDeskLayout } = uiCtx;

  return (
    <Modal
      onClose={toggleDeskLayout}
      modalIsOpen={showDeskLayout}
      ariaLabel="Desk_layout"
    >
      <StyledDiv>
        <Typography variant="h4">Club Plan</Typography>
        <CloseButton onClick={toggleDeskLayout} />
      </StyledDiv>
      <Image
        src="/club-grace-layout.jpeg"
        width="960"
        height="540"
        layout="responsive"
      />
    </Modal>
  );
}
