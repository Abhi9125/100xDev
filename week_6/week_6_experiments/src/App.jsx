import { useState } from "react";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <WrapperComponent>Hii there !!!</WrapperComponent>
    </div>
  );
}

function WrapperComponent({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "5px" }}>{children}</div>
  );
}

export default App;
