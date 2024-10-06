import { useState } from 'react'
import { useDispatchTodo } from '../context/TodoContext'
const Form = ({ createTodo }) => {
  const dispatch = useDispatchTodo()

  const [enteredTodo, setEnteredTodo] = useState('')

  const addTodo = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      editing: false,
    }

    dispatch({ type: 'create', payload: { todo: newTodo } })

    setEnteredTodo('')
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  )
}

export default Form
