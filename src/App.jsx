import { useState } from "react";
import "./App.scss";
import { TodoForm, TodoList } from "./components/todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <header className="App-header">
          <h1>Todo</h1>
        </header>
        <TodoForm addTodo={addTodoHandler} />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      </div>
    </div>
  );
}

export default App;
