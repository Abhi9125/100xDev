import React, { useContext, useState } from "react";
import { ContextCount } from "./ContextCreate";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ContextCount.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </ContextCount.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(ContextCount);
  return <div>{count}</div>;
}

function Button({ setCount }) {
  const count = useContext(ContextCount);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
