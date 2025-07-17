import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      <div className="bg-red-500">1st component</div>
      <div className="bg-yellow-500">2nd component</div>
      <div className="bg-green-500">3rd component</div>
    </div>
  );
}

export default App;
