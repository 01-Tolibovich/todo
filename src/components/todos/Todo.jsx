import { useState } from "react";
import check from "../../icons/check.svg";
import deleteIcon from "../../icons/delete_busket.svg";
import arrow from "../../icons/dropdown_arrow.svg";
import todoList from "../../icons/todo_list.svg";

import "./styles.scss";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkedHendle = () => {
    toggleTodo(todo.id);
    setIsOpen(false);
  };

  return (
    //создат класс и стилизовать is-complited
    <div className={`todo ${todo.isComplited ? "is-comoplited" : ""}`}>
      <header className="header">
        <img className="todo-list-icon" src={todoList} alt="" />
        <img
          className="delete-icon"
          role="button"
          onClick={() => deleteTodo(todo.id)}
          src={deleteIcon}
          alt=""
        />
        <img
          className="check"
          role="button"
          onClick={checkedHendle}
          src={check}
          alt=""
        />
        <hr />
        <h3 role="button" onClick={() => setIsOpen(!isOpen)}>
          {todo.title}
        </h3>
        <img
          role="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`arrow-icon ${isOpen ? "arrow-opened" : ""}`}
          src={arrow}
          alt=""
        />
      </header>
      <div className={`description ${isOpen ? "fool-content" : ""}`}>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
    </div>
  );
};

export default Todo;
