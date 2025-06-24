import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState({});
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        `http://localhost:8080/todo?id=${parseInt(input)}`
      );
      const data = await res.json();
      console.log(data);
      setTodos(data.todo);
    };
    fetchTodos();
  }, [input]);

  function getInput(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <input onChange={getInput} placeholder="enter"></input>
      <Todo title={todos?.title} description={todos?.description} />
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </>
  );
}

export default App;
