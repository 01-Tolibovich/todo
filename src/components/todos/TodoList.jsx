import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </>
  );
};

export default TodoList;
