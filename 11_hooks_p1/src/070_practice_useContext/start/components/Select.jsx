import { useCalcDispatch } from '../contexts/CalcContext'

const Select = () => {
  const CALC_OPTIONS = ['add', 'minus', 'divide', 'multiply']
  const dispatch = useCalcDispatch()

  const calculate = (e) => {
    dispatch({ type: e.target.value })
  }
  return (
    <select name="type" onChange={calculate}>
      {CALC_OPTIONS.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  )
}

export default Select
