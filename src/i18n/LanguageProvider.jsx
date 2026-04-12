import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './languageContext'
import { translate } from './messages'

const STORAGE_KEY = 'du-toolkit-lang'

/** @typedef {import('./messages').Lang} Lang */

function readStoredLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'tr') return v
  } catch {
    /* ignore */
  }
  return 'tr'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(/** @type {Lang} */ (readStoredLang()))

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en'
    document.title =
      lang === 'tr' ? 'Günlük Yardımcı Seti' : 'Daily Utility Toolkit'
  }, [lang])

  const t = useMemo(() => {
    return (path, vars) => translate(lang, path.split('.'), vars)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
