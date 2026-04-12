import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'
import LanguageSwitcher from './LanguageSwitcher'

/**
 * Landing hero: title, subtitle, and soft decorative accents.
 */
export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="relative mx-auto max-w-4xl px-4 pb-10 pt-14 text-center sm:pb-14 sm:pt-20">
      <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
        <LanguageSwitcher />
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-teal-400/15 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-32 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
      />

      <motion.p
        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700/90"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {t('home.badge')}
      </motion.p>

      <motion.h1
        className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {t('home.title')}
      </motion.h1>

      <motion.p
        className="mx-auto mt-4 max-w-xl text-base text-zinc-600 sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {t('home.subtitle')}
      </motion.p>

      <motion.div
        className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      />
    </header>
  )
}
