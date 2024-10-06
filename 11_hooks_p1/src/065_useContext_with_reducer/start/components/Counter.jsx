import CounterResult from './CounterResult'
import CounterButton from './CounterButton'
import { useCounterState } from '../context/CounterContext'

const Counter = () => {
  const state = useCounterState()
  return (
    <>
      <CounterResult state={state} />
      <CounterButton step={2} calcType="+" />
      <CounterButton step={2} calcType="-" />
      <CounterButton step={10} calcType="+" />
      <CounterButton step={10} calcType="-" />
    </>
  )
}
export default Counter
