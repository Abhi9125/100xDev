import { useEffect, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 10000);
  }, []);
  return <>{render ? <MyComponent /> : <div></div>}</>;
}

export default App;

// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("component Mounting");

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("unMounting Component");
//     };
//   }, []);

//   // Render UI
//   return <div>hello</div>;
// }

// Class base component life cycle

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Mounting");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("unMouting");
  }

  render() {
    // Render UI
    return <div>Hello </div>;
  }
}
