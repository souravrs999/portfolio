import { useCallback, useEffect, useRef, useState } from "react";

function useRecursiveTimeout(callback: () => void, delay: number) {
  const [isRunning, setIsRunning] = useState(false);

  const stop = useCallback(() => setIsRunning(false), [setIsRunning]);
  const play = useCallback(() => setIsRunning(true), [setIsRunning]);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isRunning) return;
    let timeout: NodeJS.Timeout;

    function tick() {
      if (!isRunning) return clearTimeout(timeout);
      savedCallback.current();
      requestAnimationFrame(() => (timeout = setTimeout(tick, delay)));
    }
    requestAnimationFrame(() => (timeout = setTimeout(tick, delay)));
    return () => {
      if (timeout) clearTimeout(timeout);
      stop();
    };
  }, [isRunning, delay, stop]);
  return { play, delay, stop };
}

export default useRecursiveTimeout;
