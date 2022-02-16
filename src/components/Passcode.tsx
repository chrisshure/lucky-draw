import { useRef } from "react";

export const Passcode: React.FC<{ updatePass: (v: boolean) => void }> = ({
  updatePass
}) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current.value.toLowerCase() === "shuresm57") {
      updatePass(true);
    }
  };
  return (
    <div className="passcode-container">
      <input
        autoFocus
        className="passcode"
        type="password"
        ref={inputRef}
        onKeyUp={handleInput}
      />
    </div>
  );
};
