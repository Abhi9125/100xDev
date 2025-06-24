// 1 approach -> When the button click count chnage and component rerender
// due to rerender the compoent for loop run again and again on rerendering the compoent
// that is not a good deal. To resole this problem we use the useMemo

/* import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  function getVlaue(e) {
    setInput(e.target.value);
  }

  let sum = 0;
  for (let i = 1; i <= parseInt(input); i++) {
    sum += i;
  }

  function handleChnage() {
    setCount(count + 1);
  }
  return (
    <>
      <input onChange={getVlaue} placeholder="EnterNumber"></input>
      <h1>{sum}</h1>
      <button onClick={handleChnage}>counter{count}</button>
    </>
  );
}

export default App; */

// 2- approach -- using the useEffect but the issue is in this approach is the
// need to creat a extra useState variable and extra Re-render.
/* import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  function getVlaue(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    setTotal(sum);
  }, [input]);

  function handleChnage() {
    setCount(count + 1);
  }
  return (
    <>
      <input onChange={getVlaue} placeholder="EnterNumber"></input>
      <h1>{total}</h1>
      <button onClick={handleChnage}>counter{count}</button>
    </>
  );
}

export default App; */

// 3. Approach --> best way Using the useMemo the syntax of use mame same as useEffect
/* import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);

  function getVlaue(e) {
    setInput(e.target.value);
  }

  const total = useMemo(() => {
    console.log("A");
    let sum = 0;
    for (let i = 1; i <= parseInt(input); i++) {
      sum += i;
    }
    return sum;
  }, [input]);

  function handleChnage() {
    setCount(count + 1);
  }
  return (
    <>
      <input onChange={getVlaue} placeholder="EnterNumber"></input>
      <h1>{total}</h1>
      <button onClick={handleChnage}>counter{count}</button>
    </>
  );
}

export default App; */

// -------------------------- useCallback------------------------
// WHy use the useCallback in the below code i create the ButtonCompoentn inside the memo
// as u know if a component inside the memo only when reander when the props are chnage.
// but in below code we pass function as props in ButtonCompoent and when i clisk on
// button count and chnage and compoent rerender and ButtonCompoent also rerender(Means react treat 2 diffrent function before render and after render) whereas i
// the props are static not dyanmic. to handle this setuation we use useCallback
//

/* import { memo, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleChange() {
    setCount(count + 1);
  }

  const inputFunction = () => {
    console.log("Input Fun");
  };

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button onClick={handleChange}>Count- {count}</button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("Child Render");

  return <button>Click</button>;
});

export default App;
 */

// ---useCallback

import { memo, useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleChange() {
    setCount(count + 1);
  }

  const inputFunction = useCallback(() => {
    console.log("Input Fun");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button onClick={handleChange}>Count- {count}</button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("Child Render");

  return <button>Click</button>;
});

export default App;
