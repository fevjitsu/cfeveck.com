import React, { useState, useEffect, useRef } from "react";

export default function Example() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const renderCount = useRef(1);
  const prevName = useRef("");
  //   use ref is similar to state but does not render if changed
  //   values are stored on the .current prop
  const focusInput = () => {
    inputRef.current.focus();
  };
  useEffect(() => {
    renderCount.current = renderCount.current++;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div>
      {/* all elements have a ref  prop */}
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>name::{name}</div>
      <div>prev::{prevName.current}</div>
      <div>rendered x {renderCount.current}</div>
      <button onClick={focusInput}>focus on input</button>
    </div>
  );
}
