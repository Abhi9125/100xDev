import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

export default function App() {
  return (
    <RecoilRoot>
      <div>
        <Count />
      </div>
    </RecoilRoot>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <h1>Count</h1>
    </div>
  );
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      {/* <button>Increment</button> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
