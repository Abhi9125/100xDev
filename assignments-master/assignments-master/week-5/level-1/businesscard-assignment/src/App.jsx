import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BusinessCard from "./component/BusinessCard";

function App() {
  const [count, setCount] = useState(0);
  const user = {
    name: "Abhishek",
    description: "I am a Full stack developer",
    intrests: ["coding", "geoplictics", "cricket", "songs"],
    socialMedia: ["linkedIN", "Instragram", "github", "leetcode"],
  };
  return (
    <>
      <BusinessCard user={user} />
    </>
  );
}

export default App;
