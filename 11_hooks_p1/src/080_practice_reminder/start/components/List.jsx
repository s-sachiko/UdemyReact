import { useTodo } from '../context/TodoContext'
import Item from './Item'
const List = () => {
  const todos = useTodo()
  //   console.log(todos)
  return (
    <div>
      {todos.map((todo) => {
        return <Item todo={todo} key={todo.id} />
      })}
    </div>
  )
}

export default List
