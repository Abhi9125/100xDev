import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [simmer, setSimmer] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     axios.get("http://localhost:8080/todos").then((res) => {
  //       setTodos(res.data.todos);
  //       setSimmer(false);
  //     });
  //   }, n * 1000);

  //   axios.get("http://localhost:8080/todos").then((res) => {
  //     setTodos(res.data.todos);
  //     setSimmer(false);
  //   });
  // }, [n]);

  // ----------------------------------
  /* but one problem in the above code what if 'N' is dynamic. example inisily 'N' = 5, so 
  'N' is 5 setInterval timer attach with 5sec and then after sometime 'N' = 8 but the time with 
  setInterval is 5 so to fix this consition we clear previous setInterval. 
  */

  useEffect(() => {
    const timer = setInterval(() => {
      axios.get("http://localhost:8080/todos").then((res) => {
        setTodos(res.data.todos);
        setSimmer(false);
      });
    }, n * 1000);

    axios.get("http://localhost:8080/todos").then((res) => {
      setTodos(res.data.todos);
      setSimmer(false);
    });

    return () => {
      clearInterval(timer);
    };
  }, [n]);

  return [todos, simmer];
}

function App() {
  const [todos, simmer] = useTodos(5);

  return (
    <>{simmer ? "Loading..." : todos.map((todo) => <Track todo={todo} />)}</>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
