const Todo = ({ todo, deleteTodo, index }) => {
  return <h3 onDoubleClick={() => deleteTodo(index)}>{todo}</h3>;
};

export default Todo;
