// POINT 外部APIのモック化の手法について学ぼう
import { render, screen, act } from '@testing-library/react'
import GetUserData from './GetUserData'
import { ENDPOINT_URL } from '../Example'
import axios from 'axios'
import { vi } from 'vitest'

vi.mock('axios')

describe('GetUserDataコンポーネントの動作確認', () => {
  test('外部データ取得中', () => {
    axios.get.mockResolvedValue({
      data: {
        id: 2,
        name: 'コードマフィア',
      },
    })
    render(<GetUserData url={ENDPOINT_URL} />)
    const h1El = screen.getByRole('heading', { name: '通信中です！' })
    expect(h1El).toBeInTheDocument()
  })
  test('外部データ取得後', async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 2,
        name: 'コードマフィア',
      },
    })
    await act(async () => {
      render(<GetUserData url={ENDPOINT_URL} />)
    })
    const h2El = await screen.findByRole('heading', { name: 'プロフィール' })
    expect(h2El).toBeInTheDocument()

    const itemEls = await screen.findAllByRole('listitem')

    expect(itemEls[0].textContent).toBe('ID: 2')
    expect(itemEls[1].textContent).toBe('Name: コードマフィア')
  })
})
