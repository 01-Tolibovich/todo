import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoForm, TodoList } from "./components/todos";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      test: todos,
      isComplited: false,
      id: uuidv4,
    };

    setTodos([...todos, newTodo]);
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
