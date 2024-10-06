import { createContext, useContext, useReducer } from 'react'

const CounterState = createContext()
const CounterDispatch = createContext()

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case '+':
        return prev + step
      case '-':
        return prev - step
      default:
        throw new Error('不明なactionです。')
    }
  }, 0)

  return (
    <CounterState.Provider value={state}>
      <CounterDispatch.Provider value={dispatch}>{children}</CounterDispatch.Provider>
    </CounterState.Provider>
  )
}

export const useCounterState = () => useContext(CounterState)
export const useCounterDispatch = () => useContext(CounterDispatch)
