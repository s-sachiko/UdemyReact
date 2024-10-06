import { useState } from 'react'
const Form = ({ todoListState }) => {
  const [todoList, setTodoList] = todoListState
  const [text, setText] = useState('')
  return (
    <>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <button
        onClick={() => {
          const newTodoList = [...todoList]
          newTodoList.push({ id: newTodoList[length], content: text })
          setTodoList(newTodoList)
        }}
      >
        追加
      </button>
    </>
  )
}
export default Form
