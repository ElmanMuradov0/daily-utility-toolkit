import { useLanguage } from '../i18n/useLanguage'

/** Compact TR / EN toggle for header and tool chrome. */
export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-0.5 text-xs font-medium shadow-sm ${className}`}
      role="group"
      aria-label={t('lang.label')}
    >
      <button
        type="button"
        onClick={() => setLang('tr')}
        className={`rounded-full px-2.5 py-1 transition ${lang === 'tr' ? 'bg-teal-600 text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
        aria-pressed={lang === 'tr'}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded-full px-2.5 py-1 transition ${lang === 'en' ? 'bg-teal-600 text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}
