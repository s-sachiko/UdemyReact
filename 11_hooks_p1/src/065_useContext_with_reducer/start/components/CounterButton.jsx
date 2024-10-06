import { useCounterDispatch } from '../context/CounterContext'

const CounterButton = ({ calcType, step }) => {
  const dispatch = useCounterDispatch()
  const onClick = () => dispatch({ type: calcType, step })

  return (
    <button onClick={onClick}>
      {calcType}
      {step}
    </button>
  )
}
export default CounterButton
