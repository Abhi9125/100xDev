import { useState } from "react";

export default function IntractiveRouteComponent() {
  const [count, setCount] = useState(0);

  function handleCount() {
    return setCount(count + 1);
  }
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center my-4 text-3xl">
        Welcome to intrative Route Page
      </div>
      <div className="flex justify-center">
        djflksdjfklsdjlkfjdslkjfsdlkjfsdlkj
        dflkjsdlkfjljdsflkdjskl;fjl;kjdfslkja
        sd;fjlkjflkj;lskdjflksadjlksdjl;kjdlkfj
      </div>
      <button
        className="border-2 px-2 py-2 bg-green-400 rounded-3xl cursor-pointer flex justify-center"
        onClick={handleCount}
      >
        {count}
      </button>
    </div>
  );
}
