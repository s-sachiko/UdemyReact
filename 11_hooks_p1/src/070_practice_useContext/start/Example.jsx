// import { useReducer } from 'react'
import { CalcProvider } from './contexts/CalcContext'
import Input from './components/Input'
import Select from './components/Select'
import Result from './components/Result'

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        Example内のコードをコンポーネントに分割してください。また、ステートはContext経由でやり取りしてください。
      </p>
      <CalcProvider>
        <Input name="a" />
        <Input name="b" />
        <Select />
        <Result />
      </CalcProvider>
    </>
  )
}

export default Example
