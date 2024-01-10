import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let globalId = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "ONE",
      description: "This is ONE",
    },
    {
      id: 2,
      title: "TWO",
      description: "This is TWO",
    },
    {
      id: 3,
      title: "THREE",
      description: "This is THREE",
    },
  ]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const addTodo = () => {
    const newTodo = {
      id: globalId++,
      title: inputTitle,
      description: inputDescription,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  return (
    <>
      <input type="text" onChange={(e) => setInputTitle(e.target.value)} />
      <br />
      <input
        type="text"
        onChange={(e) => setInputDescription(e.target.value)}
      />
      <br />
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo title={todo.title} description={todo.description} />
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
