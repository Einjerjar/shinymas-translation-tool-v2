import { useState } from 'react'
import { createRexStore } from 'rex-state'

const htmlRoot = document.querySelector('html')
const preferDark = () => { return window.matchMedia('(prefers-color-scheme: dark)').matches }
const localDark = localStorage.getItem('darkMode')
const _isDark: boolean = localDark === null || localDark != null && localDark === 'auto' ? preferDark() : localDark === 'dark'

const doStuff = (d: boolean) => {
  if (d && !htmlRoot?.classList.contains('dark') || !d && htmlRoot?.classList.contains('dark')) {
    htmlRoot?.classList.toggle('dark')
  }
  localStorage.setItem('darkMode', preferDark() === d ? 'auto' : d ? 'dark' : 'light')
}

const _useDarkMode = () => {
  const [ isDark, _setDark ] = useState<boolean>(_isDark)

  const setDark = (d: boolean) => {
    _setDark(d)
    doStuff(d)
  }

  const toggleDark = () => {
    setDark(!isDark)
  }

  return { isDark, toggleDark }
}

doStuff(_isDark)

const { useStore: useDarkMode, RexProvider: DarkModeProvider } = createRexStore(_useDarkMode)

export {
  useDarkMode,
  DarkModeProvider
}
