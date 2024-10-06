import { createContext, useContext, useReducer } from 'react'

const TodoContext = createContext()
const TodoDispatchContext = createContext()

const reducer = (todos, { type, payload }) => {
  const { id, todo } = payload

  switch (type) {
    case 'delete':
      const newTodos = todos.filter((_todo) => {
        return _todo.id !== id
      })

      return newTodos

    case 'create':
      return [...todos, todo]

    case 'edit':
      const editedTodos = todos.map((_todo) => {
        return _todo.id === todo.id ? todo : _todo
      })
      return editedTodos

    default:
      throw new Error('typeがありません')
  }
}

export const TodoProvider = ({ children }) => {
  const todosList = [
    {
      id: 1,
      content: '店予約する',
      editing: false,
    },
    {
      id: 2,
      content: '卵買う',
      editing: false,
    },
    {
      id: 3,
      content: '郵便出す',
      editing: false,
    },
  ]

  const [todos, dispatch] = useReducer(reducer, todosList)

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)
export const useDispatchTodo = () => useContext(TodoDispatchContext)
