import { useRef, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

// https://www.developerway.com/posts/debouncing-in-react
export const useDebounce = (callback, timeout) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, timeout);
  }, []);

  return debouncedCallback;
};
