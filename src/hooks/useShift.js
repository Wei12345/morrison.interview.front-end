import { useState, useCallback, useEffect } from 'react';

function useShift() {
  const [isShift, setIsShift] = useState(false);
  const handleWindowsKeydown = useCallback((event) => {
    setIsShift(event.shiftKey);
  }, []);
  const handleWindowsKeyup = useCallback((event) => {
    setIsShift(event.shiftKey);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleWindowsKeydown)
    window.addEventListener('keyup', handleWindowsKeyup)

    return () => {
      window.removeEventListener('keydown', handleWindowsKeydown)
      window.removeEventListener('keyup', handleWindowsKeyup)
    }
  }, [handleWindowsKeydown, handleWindowsKeyup]);

  return {
    isShift,
  };
}

export default useShift;
