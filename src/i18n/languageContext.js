import { createContext } from 'react'

/** @typedef {import('./messages').Lang} Lang */

/** @type {import('react').Context<{ lang: Lang, setLang: (l: Lang) => void, t: (path: string, vars?: Record<string, string | number>) => string }>} */
export const LanguageContext = createContext({
  lang: 'tr',
  setLang: () => {},
  t: (p) => p,
})
