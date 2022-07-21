import React, { createContext, useState, useCallback, useMemo } from 'react';

export const UiContext = createContext({
  alert: null,
  setAlert: () => {},
  showAlert: () => {},
  showDeskLayout: () => {},
});

export function UiContextProvider({ children }) {
  const [alert, setAlert] = useState(null);
  const [showDeskLayout, setShowDeskLayout] = useState(false);

  const showAlert = useCallback(
    (type, message, error) => {
      let alertMessage = message;

      if (type === 'error') {
        alertMessage = error.message;
      }

      setAlert({
        open: true,
        message: alertMessage,
        type,
      });
    },
    [setAlert]
  );

  const toggleDeskLayout = () => {
    setShowDeskLayout((prevState) => !prevState);
  };

  const contextValue = useMemo(() => ({
    alert,
    setAlert,
    showAlert,
    showDeskLayout,
    toggleDeskLayout,
  }));

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
}

export default UiContext;
