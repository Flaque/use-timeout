import { useState } from "react";

type TimeoutFn = (
  callback: (...args: any[]) => void,
  ms: number,
  ...args: any[]
) => any;

export default function useTimeout(): [TimeoutFn, () => any] {
  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timer>();

  function _setTimeout(
    callback: (...args: any[]) => void,
    ms: number,
    ...args: any[]
  ) {
    setTimeoutRef(setTimeout(callback, ms, ...args));
  }

  function _clearTimeout() {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }
  }

  return [_setTimeout, _clearTimeout];
}
