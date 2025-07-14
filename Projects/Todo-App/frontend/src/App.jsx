import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/todo";

function App() {
  const [todos, settodos] = useState([]);

  fetch("http://localhost:3000/todo").then(async function (res) {
    const JsonData = await res.json();
    console.log(JsonData);
    settodos(JsonData.todos);
  });

  console.log(todos);
  return (
    <>
      <div>
        Hii there!!
        <CreateTodo />
        <Todo todos={todos} />
      </div>
    </>
  );
}

export default App;
