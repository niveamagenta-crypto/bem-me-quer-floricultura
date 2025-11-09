import { useEffect, useState } from 'react';

const POINTER_QUERY = '(pointer: coarse)';

const matchMediaSupportsEventListener = (mediaQueryList) => typeof mediaQueryList.addEventListener === 'function';

const getInitialValue = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia(POINTER_QUERY).matches;
};

const useIsCoarsePointer = () => {
  const [isCoarsePointer, setIsCoarsePointer] = useState(getInitialValue);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const mediaQueryList = window.matchMedia(POINTER_QUERY);

    const handleChange = (event) => {
      setIsCoarsePointer(event.matches);
    };

    if (matchMediaSupportsEventListener(mediaQueryList)) {
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      mediaQueryList.addListener(handleChange);
    }

    // Garante estado sincronizado mesmo se o hook montar depois de uma mudança
    setIsCoarsePointer(mediaQueryList.matches);

    return () => {
      if (matchMediaSupportsEventListener(mediaQueryList)) {
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, []);

  return isCoarsePointer;
};

export default useIsCoarsePointer;


