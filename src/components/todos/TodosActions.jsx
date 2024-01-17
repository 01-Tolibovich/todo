const TodosActions = ({resetTodo, deleteCompletedTodos, completedTodosExist}) => {

  // completedTodosExist надо создать css class для этой переменой и в зависимости логических значеный менять стили кнопки. Например активное и не активное

	return (
		<div>
			<button type="Reset" onClick={resetTodo}>Reset</button>
			<button className="" type="Delete completed" onClick={deleteCompletedTodos}>Delete completed</button>
		</div>
	);
};

export default TodosActions;
