import { useCalc, useCalcDispatch } from '../contexts/CalcContext'

const Input = ({ name }) => {
  const dispatch = useCalcDispatch()
  const state = useCalc()

  const numChangeHandler = (e) => {
    dispatch({
      type: 'change',
      payload: { name: e.target.name, value: Number(e.target.value) },
    })
  }
  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        value={state[name]}
        onChange={numChangeHandler}
      />
    </div>
  )
}

export default Input
