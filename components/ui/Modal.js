// import React, { createRef } from 'react';
// import { createPortal } from 'react-dom';
// import { styled } from '@mui/material/styles';
// // import  { keyframes } from 'styled-components';
// import { device } from '../../theme/theme';
// import useKeyListeners from '../../hooks/useKeyListeners';
// import Backdrop from './Backdrop';

// const SlideDownAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translate(-50%, -100%);
//   }
//   to {
//     opacity: 1;
//     transform: translate(-50%, -50%);
//   }
// `;

// const StyledModal = styled.aside`
//   animation: ${SlideDownAnimation} 300ms ease-out forwards;
//   background-color: ${(props) => props.theme.modalBackgroundColor};
//   border-radius: 14px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
//   box-sizing: border-box;
//   left: 50%;
//   padding: 2rem;
//   position: fixed;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   width: 90%;
//   z-index: 30;

//   @media ${device.laptop} {
//     max-width: 70vw;
//   }

//   @media ${device.laptopL} {
//     max-width: 50vw;
//   }
// `;

// function ModalOverlay({ children, setRef }) {
//   const handleClick = (event) => {
//     event.stopPropagation();
//   };

//   return (
//     <StyledModal ref={setRef} onClick={handleClick}>
//       {children}
//     </StyledModal>
//   );
// }

// const portalElement =
//   typeof document !== 'undefined' ? document.getElementById('modal') : null;

// const Modal = ({ onClose, children, ariaLabel }) => {
//   const modalRef = createRef();
//   useKeyListeners(modalRef, onClose);

//   let modal = null;

//   if (portalElement) {
//     modal = createPortal(
//       <Backdrop onClick={onClose} ariaLabel={ariaLabel}>
//         <ModalOverlay setRef={modalRef}>{children}</ModalOverlay>
//       </Backdrop>,
//       portalElement
//     );
//   }

//   return modal;
// };

// export default Modal;
