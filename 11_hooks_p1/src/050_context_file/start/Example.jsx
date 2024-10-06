import { useState } from 'react'
import './Example.css'
import { createContext } from 'react'

export const ThemeContext = createContext()

const Example = () => {
  const [theme, setTheme] = useState('light')

  const changeTheme = (e) => setTheme(e.target.value)

  const THEMES = ['light', 'dark', 'red']

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <header className={`content-${theme}`}></header>
      <main className={`content-${theme}`}>
        <h1>テーマの切り替え</h1>
      </main>
    </ThemeContext.Provider>
  )
}

export default Example
