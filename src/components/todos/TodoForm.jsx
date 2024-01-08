import { InputUI } from "../UI";


const TodoForm = () => {

  const input = {
    type: "text",
    placeholder: "Enter new todo"
  }

  return (
    <InputUI {...input} />
  );
};

export default TodoForm;