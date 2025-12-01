import { useEffect, useState } from "react";

export const useDatafetch = (n: number) => {
  interface Todo {
    id: number;
    todo: string;
  }
  const [Todos, setTodos] = useState<Todo[]>([]);
  const [loading, setoading] = useState(true);

  async function getData() {
    const res = await fetch("https://dummyjson.com/todos/random/8");

    const data = await res.json();
    setTodos((prev) => [...prev, ...data]);
    setoading(false);
  }

  useEffect(() => {
    const interval = setInterval(() => getData(), n * 1000);
    getData();

    return () => {
      return clearInterval(interval);
    };
  }, [n]);

  return {
    Todos,
    loading,
  };
};
