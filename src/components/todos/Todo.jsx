import { ButtonUI } from "../UI";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


const Todo = () => {
  return (
    <div>
      <div>
        <TodoForm />
        <ButtonUI />
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;