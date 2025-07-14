import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTodo() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async function (res) {
      const json = await res.json();
      alert("Todo added");
      setTitle("");
      setDescription("");
    });
  }
  return (
    <div>
      <input
        style={{
          padding: 10,
        }}
        type="text"
        placeholder="Enter Todo title"
        value={title}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      ></input>
      <br /> <br />
      <input
        style={{
          padding: 10,
        }}
        type="text"
        placeholder="Pls Describe the work"
        value={description}
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      ></input>
      <br /> <br />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
