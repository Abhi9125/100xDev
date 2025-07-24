/* Step 1 - Converting the data fetching bit to a custom hook */
// import { useEffect, useState } from "react";
// import axios from "axios";
// let x = 0;
// let y = 0;
// function useDataFechting() {
//   const [todos, setTodos] = useState([]);
//   console.log("value of", ++x);
//   useEffect(() => {
//     async function fetchData() {
//       const res = await axios.get("http://localhost:8080/todos");

//       console.log(res.data.todos);
//       setTodos(res.data.todos);
//     }

//     fetchData();
//   }, []);
//   return todos;
// }

// function App() {
//   const todos = useDataFechting();
//   console.log("Value of y", ++y);
//   return (
//     <>
//       {todos.map((todo) => (
//         <Track todo={todo} />
//       ))}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default App;

/* Step 2 - Cleaning the hook to include a loading parameter
What if you want to show a loader when the data is not yet fetched from the backend? */
// import { useEffect, useState } from "react";
// import axios from "axios";

// function useDataFechting() {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await axios.get("http://localhost:8080/todos");

//       console.log(res.data.todos);
//       setTodos(res.data.todos);
//       setLoading(false);
//     }

//     fetchData();
//   }, []);
//   return [todos, loading];
// }

// function App() {
//   const [todos, loading] = useDataFechting();
//   return (
//     <>
//       {loading
//         ? "Loading"
//         : todos.map((todo) => {
//             return <Track todo={todo} />;
//           })}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default App;

/* Step - 3 Auto refreshing hook, what if you want to keep polling the backend every
n seconds? n needs to be passed in as an input to the hook
*/
import { useEffect, useState } from "react";
import axios from "axios";

function useDataFechting(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const res = await axios.get("http://localhost:8080/todos");

    console.log(res.data.todos);
    setTodos(res.data.todos);
    setLoading(false);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      fetchData();
    }, n * 1000);

    fetchData();
    return () => {
      clearInterval(timer);
    };
  }, [n]);
  return [todos, loading];
}

function App() {
  const [todos, loading] = useDataFechting(5);
  return (
    <>
      {loading
        ? "Loading"
        : todos.map((todo) => {
            return <Track todo={todo} />;
          })}
    </>
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
