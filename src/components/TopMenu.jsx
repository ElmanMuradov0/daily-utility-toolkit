import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import LanguageSwitcher from './LanguageSwitcher'

export default function TopMenu() {
  const { lang } = useLanguage()
  const isTr = lang === 'tr'

  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:py-5">
        <div className="flex items-center justify-end">
          <LanguageSwitcher />
        </div>
        <nav
          aria-label={isTr ? 'Global menü' : 'Global menu'}
          className="mt-3 flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <Link
            to="/"
            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-800 sm:text-sm"
          >
            {isTr ? 'Ana Sayfa' : 'Home'}
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-800 sm:text-sm"
          >
            {isTr ? 'Hakkımızda' : 'About'}
          </Link>
          <Link
            to="/privacy"
            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-800 sm:text-sm"
          >
            {isTr ? 'Gizlilik' : 'Privacy'}
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-800 sm:text-sm"
          >
            {isTr ? 'İletişim' : 'Contact'}
          </Link>
          <Link
            to="/faq"
            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-800 sm:text-sm"
          >
            {isTr ? 'SSS' : 'FAQ'}
          </Link>
          <Link
            to="/terms"
            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-800 sm:text-sm"
          >
            {isTr ? 'Şartlar' : 'Terms'}
          </Link>
        </nav>
      </div>
    </div>
  )
}
