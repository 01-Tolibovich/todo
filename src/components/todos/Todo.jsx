import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa"

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    //создат класс и стилизовать is-complited
    <div className={`todo ${todo.isComplited ? "is-comoplited" : ''}`}>
      < RiTodoFill />
      <h3>{todo.text}</h3>
      <RiDeleteBin2Line onClick={() => deleteTodo(todo.id)}/>
      <FaCheck onClick={() => toggleTodo(todo.id)} />
    </div> 
  );
};

export default Todo;
