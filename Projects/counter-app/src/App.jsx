import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Todo1",
      description: "Going to gym at 8-10pm",
      Completed: true,
    },
    {
      title: "Todo2",
      description: "Sloving the DSA problem at 10-12",
      Completed: true,
    },
    {
      title: "Todo3",
      description: "Leaning the Cohort 10-4",
      Completed: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "addtodo",
        description: "Sloving the DSA problem at 10-12",
        Completed: true,
      },
    ]);
  }
  console.log(todos);
  return (
    <>
      {todos.map((eachTodo) => {
        return (
          <>
            <Todos
              title={eachTodo.title}
              description={eachTodo.description}
              Completed={eachTodo.Completed}
            />
          </>
        );
      })}
      <br></br>
      <br></br>
      <button onClick={addTodo}>ADD TODOS</button>
    </>
  );
}

// Todo Component
function Todos(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      {props.Completed ? <button>Done</button> : <button>Not Done</button>}
    </>
  );
}

export default App;
