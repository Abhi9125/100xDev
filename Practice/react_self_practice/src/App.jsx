import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [count, setCount] = useState();
//   useEffect(() => {
//     console.log("Mounting");

//     return () => {
//       console.log("Unmounting");
//     };
//   }, [count]);
//   return (
//     <>
//       <div>count</div>
//     </>
//   );
// }

function App() {
  const [isMount, setIsMount] = useState(true);
  useEffect(() => {
    console.log("Mount");
    setTimeout(() => {
      setIsMount(false);
    }, 5000);

    return () => {
      console.log("Unmounting");
    };
  }, [isMount]);
  return <>{isMount ? <MyComponent /> : <div></div>}</>;
}

function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
