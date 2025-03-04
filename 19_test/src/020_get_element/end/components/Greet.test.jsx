// POINT DOM要素の取得方法
import { render, screen } from '@testing-library/react'
import Greet from './Greet'

it('should have h1 tag', () => {
  const { debug, container } = render(<Greet />)
  // テキストで要素を取得
  // const h1El = screen.getByText('こんにちは')
  // expect(h1El).toBeInTheDocument()

  // roleで要素を取得
  // const radioEl = screen.getByRole('radio')
  // debug(radioEl)

  // const imgEl = screen.getByRole('img')
  // debug(imgEl)

  // const headingEl = screen.getByRole('heading', { name: 'こんにちは' })
  // debug(container)

  // Alt属性で要素を取得
  // const imgEl = screen.getByAltText('React Logo')
  // debug(imgEl)

  // Labelで要素を取得
  // const elByLabel = screen.getByLabelText('氏名')
  // debug(elByLabel)

  // Placeholderで要素を取得
  // const elByPlaceholder = screen.getByPlaceholderText('Code Mafia')
  // debug(elByPlaceholder)

  // Selector APIで要素を取得
  // const h2El = container.querySelector('h2')
  // debug(h2El)
})
