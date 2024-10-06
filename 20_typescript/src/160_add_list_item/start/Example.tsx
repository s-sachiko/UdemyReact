import { useState } from 'react'
import TaskList from './TaskList'

const Example: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const defaultList: string[] = ['Todo1', 'Todo2']
  const [list, setList] = useState<string[]>(defaultList)
  return (
    <>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => {
          setList(list.concat(value))
          setValue('')
        }}
      >
        追加
      </button>
      <TaskList list={list} />
    </>
  )
}

export default Example
