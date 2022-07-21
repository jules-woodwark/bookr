import { useEffect } from 'react';

const useKeyListeners = (ref, onClose) => {
  useEffect(() => {
    const keyListener = (event) => {
      const listener = keyListenersMap.get(event.keyCode);
      return listener && listener(event);
    };

    document.addEventListener('keydown', keyListener);

    return () => document.removeEventListener('keydown', keyListener);
  });

  const handleTabKey = (event) => {
    if (ref.current) {
      const focusableModalElements = ref.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableModalElements[0];
      const lastElement =
        focusableModalElements[focusableModalElements.length - 1];

      if (!event.shiftKey && document.activeElement !== firstElement) {
        firstElement.focus();
        return event.preventDefault();
      }

      if (event.shiftKey && document.activeElement !== lastElement) {
        lastElement.focus();
        event.preventDefault();
      }
    }
  };

  const keyListenersMap = new Map([
    [27, onClose],
    [9, handleTabKey],
  ]);
};

export default useKeyListeners;
