import React from "react";

function InputBox({ label, onChange }) {
  return (
    <div>
      <div className="font-bold p-2">{label}</div>
      <input
        onChange={onChange}
        className="border-[0.5px] border-stone-200 rounded-b-sm w-full "
      ></input>
    </div>
  );
}

export default InputBox;
