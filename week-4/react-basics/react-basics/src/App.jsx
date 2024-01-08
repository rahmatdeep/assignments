import React from 'react';
import './App.css';

let todos = [
  { title: 'ONE', description: 'This is ONE' },
  { title: 'TWO', description: 'This is TWO' },
  { title: 'THREE', description: 'This is THREE' },
];

function App() {
  const addTodo = () => {
    const titleInput = document.getElementById('title').value;
    const descriptionInput = document.getElementById('description').value;
    
    if (titleInput && descriptionInput) {
      const newTodo = { title: titleInput, description: descriptionInput };
      todos.push(newTodo);
      renderTodos();
    }
  };

  const renderTodos = () => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = ''; // Clear existing todos

    todos.forEach((todo, index) => {
      const todoElement = document.createElement('div');
      todoElement.innerHTML = `
        <h1>${todo.title}</h1>
        <h5>${todo.description}</h5>
      `;
      todoContainer.appendChild(todoElement);
    });
  };

  return (
    <>
      <input type="text" placeholder="title" id="title" />
      <br />
      <input type="text" placeholder="description" id="description" />
      <br />
      <button onClick={addTodo}>Submit</button>
      <br />
      <div id="todo-container"></div>
    </>
  );
}

export default App;
