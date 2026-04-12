import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import LanguageSwitcher from './LanguageSwitcher'

/**
 * Shared chrome for tool pages: back navigation + animated content shell.
 */
export default function ToolShell({ title, description, children }) {
  const { t } = useLanguage()

  return (
    <div className="min-h-dvh bg-zinc-50">
      <div className="bg-grid-soft border-b border-zinc-100/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t('shell.home')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>

      <motion.main
        className="mx-auto max-w-3xl px-4 py-10"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 max-w-2xl text-zinc-600">{description}</p>
          ) : null}
        </header>

        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-8">
          {children}
        </div>
      </motion.main>
    </div>
  )
}
