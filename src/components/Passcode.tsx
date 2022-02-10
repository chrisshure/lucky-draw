import { useEffect, useRef } from "react";

export const Passcode = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input className="passcode" type="password" ref={inputRef} />;
};
