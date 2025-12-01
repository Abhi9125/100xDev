// import React, { Suspense, useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Profile from "./components/Profile";

// const Mycomponent = React.lazy(() => import("./components/Lazy"));
// import { userContext } from "./userContext";
// function App() {
//   const [count, setFirstName] = useState(0);
//   const user = "abhi";
//   // const []
//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   // Debounce logic
//   let timer:any = null;

//   function handleChnage() {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       console.log("hello");
//     }, 8000);
//   }

//   return (
//     <userContext.Provider value={user}>
//       <button
//         onClick={() => {
//           setFirstName(count + 1);
//         }}
//       >
//         click
//       </button>

//       <Header prop={count} />
//       <Header prop={"kanchan1"} />
//       <Header prop={"kanchan2"} />

//       <Suspense fallback={<div>loading...</div>}>
//         <Mycomponent />
//       </Suspense>

//       <input onInput={handleChnage}></input>
//       <Profile />
//     </userContext.Provider>
//   );
// }

// const Header = React.memo(({ prop }: any) => {
//   console.log("Rendered:", prop);
//   return <h1>My name is {prop}</h1>;
// });

// export default App;

import React, { useEffect, useState } from "react";
import { useDatafetch } from "./customhook/useDatafetch";

const App = () => {
  const { Todos, loading } = useDatafetch(5);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <div>hello</div>

      {Todos.map((todosObj: { id: number; todo: string }) => {
        return (
          <div>
            <h1>{todosObj.id}</h1>
            <p>{todosObj.todo}</p>
          </div>
        );
      })}
    </div>
  );
};
export default App;
