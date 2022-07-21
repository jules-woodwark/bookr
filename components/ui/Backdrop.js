import { styled } from '@mui/material/styles';

const StyledBackdrop = styled('div')`
  background-color: rgba(0, 0, 0, 0.75);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`;

function Backdrop({ onClick, children, role, modal, ariaLabel }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledBackdrop
      onClick={handleClick}
      role={role}
      aria-modal={modal}
      aria-labelledby={ariaLabel}
    >
      {children}
    </StyledBackdrop>
  );
}

export default Backdrop;
