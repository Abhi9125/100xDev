import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState({});
  const [selectedId, setSelectedId] = useState(1);

  const buttonValue = [1, 2, 3, 4];

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        `http://localhost:8080/todo?id=${parseInt(selectedId)}`
      );
      const data = await res.json();
      setTodos(data.todo);
    };
    fetchTodos();
  }, [selectedId]);

  function getValue(e) {
    setSelectedId(e.target.innerText);
  }

  function Button({ value }) {
    return <button onClick={getValue}>{value}</button>;
  }

  function Todo({ title, description }) {
    return (
      <>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </>
    );
  }

  return (
    <>
      {buttonValue.map((value) => (
        <Button value={value} />
      ))}
      <Todo title={todos?.title} description={todos?.description} />
    </>
  );
}

export default App;
