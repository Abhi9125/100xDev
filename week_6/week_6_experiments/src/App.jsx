import { useState } from "react";
import Header from "./component/Header";

function App() {
  const [title, setTitle] = useState("Abhi");

  function handleChange() {
    const randomNumber = Math.random();
    setTitle(randomNumber);
  }
  return (
    <div>
      <button onClick={handleChange}>Clickme to change the title</button>
      <Header title={title} />
      <Header title={`Akhand`} />
      <Header title={`Akhand2`} />
      <Header title={`Akhand3`} />
    </div>
  );
}

export default App;
