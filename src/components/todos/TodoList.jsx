import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </>
  );
};

export default TodoList;
