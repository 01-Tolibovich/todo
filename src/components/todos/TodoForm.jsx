import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const submitHandle = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
