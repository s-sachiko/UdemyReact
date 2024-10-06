const List = ({ todoListState }) => {
  const [todoList, setTodoList] = todoListState
  return (
    <>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <button
            onClick={() => {
              const newTodoList = todoList.filter((ftodo) => ftodo.id !== todo.id)
              setTodoList(newTodoList)
            }}
          >
            完了
          </button>
          <span>{todo.content}</span>
        </div>
      ))}
    </>
  )
}
export default List
