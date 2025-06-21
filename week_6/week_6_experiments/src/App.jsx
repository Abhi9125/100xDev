import { useState } from "react";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title={`Akhand`} />
      <Header title={`Akhand2`} />
      <Header title={`Akhand3`} />
      <Header title={`Akhand4`} />
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Abhi");

  function handleChange() {
    const randomNumber = Math.random();
    setTitle(randomNumber);
  }
  return (
    <>
      <button onClick={handleChange}>Clickme to change the title</button>
      <Header title={title} />
    </>
  );
}

export default App;
