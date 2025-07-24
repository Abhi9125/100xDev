/* 4- Browser functionality related hooks */
// import React, { useEffect, useState } from "react";

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);
//   console.log(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => setIsOnline(true));
//     window.addEventListener("offline", () => setIsOnline(false));
//   }, []);

//   return isOnline;
// }
// function App() {
//   const status = useIsOnline();
//   console.log(status);

//   return <>{status ? "Online" : "offline"}</>;
// }

// export default App;

/* 5- Performance/Timer based */
/* 1.  useInterval
Create a hook that runs a certain callback function every n seconds.
You have to implement useInterval which is being used in the code below -  */
// import { useEffect, useState } from "react";

// function useInterval(fn, timer) {
//   useEffect(() => {
//     setInterval(() => {
//       fn();
//     }, timer);
//   }, []);
// }
// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount((c) => c + 1);
//   }, 1000);

//   return <>Timer is at {count}</>;
// }

// export default App;

/* . 2. useDebounce
Create a hook that debounces a value given
1. The value that needs to be debounced
2. The interval at which the value should be debounced. */

import React, { useEffect, useState } from "react";
import axios from "axios";
function useDebounce(inputValue, time) {
  const [searchResult, setSearchResult] = useState([]);

  async function fetchData() {
    console.log("fetching the api....");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
