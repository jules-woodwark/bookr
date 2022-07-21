import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { UiContext } from '../../store/ui-context';
import MuiAlert from '@mui/material/Alert';
import MuiSnackbar from '@mui/material/Snackbar';

const portalElement =
  typeof document !== 'undefined' ? document.getElementById('alert') : null;

const Snackbar = () => {
  const uiCtx = useContext(UiContext);
  const { alert, setAlert } = uiCtx;

  const handleClose = () => {
    setAlert(null);
  };

  let alertReturn = null;

  if (alert && portalElement) {
    alertReturn = createPortal(
      <MuiSnackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          elevation={10}
          variant="filled"
          severity={alert.type}
        >
          {alert.message}
        </MuiAlert>
      </MuiSnackbar>,
      portalElement
    );
  }

  return alertReturn;
};

export default Snackbar;
