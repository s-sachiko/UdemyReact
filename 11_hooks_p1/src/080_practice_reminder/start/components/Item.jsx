import { useState } from 'react'
import { useDispatchTodo } from '../context/TodoContext'
const Item = ({ todo }) => {
  const dispatch = useDispatchTodo()

  const complete = (id) => {
    dispatch({ type: 'delete', payload: { id: id } })
  }

  const [editing, setEditing] = useState(todo.editing)
  const [editValue, setEditValue] = useState(todo.content)

  const submit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'edit',
      payload: { todo: { ...todo, content: editValue } },
    })
    setEditing(false)
  }

  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      {editing ? (
        <form onSubmit={submit} style={{ display: 'inline' }}>
          <input
            type="text"
            onChange={(e) => setEditValue(e.target.value)}
            value={editValue}
          />
        </form>
      ) : (
        <span
          onDoubleClick={(e) => {
            setEditing(true)
          }}
        >
          {todo.content}
        </span>
      )}
    </div>
  )
}

export default Item
