import React, { useRef } from "react";

export default function NumberInput() {
  //creating the ref by passing initial value null
  const numRef = useRef(null);

  function handleFocus() {
    //current is pointing to input element when component is mounts to dom
    const theRef = numRef.current.value;
    console.log(theRef);
  }
  return (
    <div>
      <input ref={numRef} defaultValue="23" placeholder="number" />
      <button onClick={handleFocus}>Get Refs</button>
    </div>
  );
}
