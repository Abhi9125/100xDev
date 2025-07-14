export function Todo({ todos }) {
  console.log(todos);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
            <button>{todo.completed == false ? "Mark as Done" : "Done"}</button>
          </div>
        );
      })}
    </>
  );
}
