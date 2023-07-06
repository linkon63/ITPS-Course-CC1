import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log("TODO:", json);
        setTodos(json);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Blogs Page</h1>
      {
      todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <div
            key={todo}
            className="border border-primary bg-secondary text-white m-1"
          >
            <Link to={`/blogs/${todo.id}`} className="border text-white p-1 bg-primary">goto this blog</Link>
            <p>{todo.title}</p>
            <p>{todo.id}</p>
          </div>
        ))}
    </div>
  );
}
