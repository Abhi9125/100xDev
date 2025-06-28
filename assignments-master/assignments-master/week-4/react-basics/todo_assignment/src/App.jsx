import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./component/Input";
import Button from "./component/Button";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const titleRef = useRef();
  function handleTitleChange(e) {
    return setTitle(e.target.value);
  }

  function handleDesChange(e) {
    return setDescription(e.target.value);
  }

  function handleTodo() {
    setTodos([
      ...todos,
      {
        title: title,
        description: description,
      },
    ]);

    setTitle("");
    setDescription("");
  }

  function handleTodoDelete(index) {
    return () => {
      const newTodo = todos.filter((todo) => {
        if (todos[index] != todo) return todo;
      });
      setTodos(newTodo);
    };
  }

  console.log(title);
  console.log(description);

  return (
    <>
      <div>
        <input
          placeholder="title"
          onChange={handleTitleChange}
          value={title}
        ></input>
      </div>
      <div>
        <input
          placeholder="description"
          onChange={handleDesChange}
          value={description}
        ></input>
      </div>
      <div>
        <button onClick={handleTodo}>Add Todo</button>
      </div>
      {todos.length === 0
        ? ""
        : todos.map((todo, index) => {
            return (
              <>
                <div>{todo.title}</div>
                <div>{todo.description}</div>
                <button onClick={handleTodoDelete(index)}>Delete</button>
              </>
            );
          })}
    </>
  );
}

export default App;
