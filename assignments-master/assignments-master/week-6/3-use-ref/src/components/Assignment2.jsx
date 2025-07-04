import React, { useState, useCallback } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

/* This Q done by mutiple ways
1. By creating a state varibale - But the problem in this approach is if we put mutiple setState is show only one count but in actual happen 2 count. 
export function Assignment2() {
  const [, forceRender] = useState(0);
  const [count, setCount] = useState(0);
  const handleReRender = () => {
    // Update state to force re-render
    forceRender(Math.random());
    setCount(count + 1);
  };

  return (
    <div>
      <p>This component has rendered {count} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );

2. By creating the GLobal Variable. THis is also not a good idea.
3. By using the useRef - useRef not only use for the referencing the elemnt but also use 
for holding value in re rendering. 
}

*/
export function Assignment2() {
  const [, forceRender] = useState(0);
  const RenderCount = useRef(1);
  const handleReRender = () => {
    // Update state to force re-render
    RenderCount.current = RenderCount.current + 1;
    forceRender(Math.random());
  };

  return (
    <div>
      <p>This component has rendered {RenderCount.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
