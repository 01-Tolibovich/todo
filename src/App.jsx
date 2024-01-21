import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoForm, TodoList, TodosActions } from "./components/todos";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedJsonString = localStorage.getItem("My_Todos");

    if (storedJsonString) {
      return JSON.parse(storedJsonString);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("My_Todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (title, description) => {
    const newTodo = {
      title,
      description,
      isComplited: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      )
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited));
  };

  const complitedTodosCount = todos.filter((todo) => todo.isComplited).length;

  return (
    <div className="App">
      <div className="app-wrapper">
        <header className="App-header">
          <h1>Todo</h1>
        </header>
        <TodoForm addTodo={addTodoHandler} />
        {!!todos.length && (
          <TodosActions
            resetTodo={resetTodoHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
            completedTodosExist={!!complitedTodosCount}
          />
        )}
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
