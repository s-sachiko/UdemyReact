import List from './List'
import Form from './Form'
import { useState } from 'react'

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: '店予約する',
    },
    {
      id: 2,
      content: '卵買う',
    },
    {
      id: 3,
      content: '郵便出す',
    },
  ]
  const [sTodoList, setSTodoList] = useState(todoList)

  return (
    <>
      <h2>Remider</h2>
      <List todoListState={[sTodoList, setSTodoList]} />
      <Form todoListState={[sTodoList, setSTodoList]} />
    </>
  )
}

export default Todo
