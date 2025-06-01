import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  // function onClickHander() {
  //   setCount(count + 1);
  // }
  return (
    <>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </>
  );
}

// Create Button component
function CustomButton(props) {
  console.log(props);

  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return (
    <>
      <button onClick={onClickHandler}>Counter - {props.count}</button>
    </>
  );
}

export default App;
