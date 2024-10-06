import Counter from './components/Counter'
import { CounterContextProvider } from './context/CounterContext'

// POINT useContext x useReducer
const Example = () => {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  )
}

export default Example
