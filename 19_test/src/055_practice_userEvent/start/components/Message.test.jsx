import { screen, render } from '@testing-library/react'
import Message from './Message'
import userEvent from '@testing-library/user-event'
describe('初期表示の正常性確認', () => {
  test('input要素の表示確認', () => {
    render(<Message />)
    const inputEl = screen.getByRole('textbox')
    expect(inputEl).toBeInTheDocument()
  })
})
describe('画面操作正常性確認', () => {
  test('入力値の変更', async () => {
    const user = userEvent.setup()
    render(<Message />)
    const inputEl = screen.getByRole('textbox')

    await user.type(inputEl, 'あいうえお')
    expect(inputEl.value).toBe('あいうえお')
  })
})
