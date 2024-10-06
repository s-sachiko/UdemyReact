type ListProps = {
  list: string[]
}

const TaskList: React.FC<ListProps> = (props) => {
  return (
    <ul>
      {props.list.map((todo: string) => {
        return <li key={todo}>{todo}</li>
      })}
    </ul>
  )
}
export default TaskList
