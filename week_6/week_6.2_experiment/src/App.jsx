import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("http://localhost:8080/todos");
      const data = await res.json();
      console.log(data.todos);
      setTodos(data.todos);
    };
    fetchTodos();
  }, []);

  return (
    <>
      {todos.length === 0
        ? "loading...."
        : todos.map((todo) => {
            return <Todo title={todo.title} description={todo.description} />;
          })}
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
