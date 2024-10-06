import { useReducer, useState } from 'react'

const CALC_OPTIONS = ['add', 'minus', 'divide', 'multiply']

const reducer = (prev, { type, value }) => {
  switch (type) {
    case 'change':
      return { ...prev, ...value }

    case 'add':
      return { ...prev, result: prev.a + prev.b }

    case 'minus':
      return { ...prev, result: prev.a - prev.b }

    case 'divide':
      return { ...prev, result: prev.a / prev.b }

    case 'multiply':
      return { ...prev, result: prev.a * prev.b }

    default:
      throw new Error('不明なactionです。')
  }
}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  }

  const [state, dispatch] = useReducer(reducer, initState)

  const calculate = (e) => {
    dispatch({ type: e.target.value })
  }

  const numChangeHandler = (e) => {
    dispatch({ type: 'change', value: { [e.target.name]: Number(e.target.value) } })
  }

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input type="number" name="a" value={state.a} onChange={numChangeHandler} />
      </div>
      <div>
        b:
        <input type="number" name="b" value={state.b} onChange={numChangeHandler} />
      </div>
      <select onChange={calculate}>
        {CALC_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  )
}

export default Example
