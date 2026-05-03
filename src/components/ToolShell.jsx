import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import LanguageSwitcher from './LanguageSwitcher'
import usePageMeta from '../hooks/usePageMeta'

/**
 * Shared chrome for tool pages: back navigation + animated content shell.
 */
export default function ToolShell({ title, description, children }) {
  const { t, lang } = useLanguage()
  const isTr = lang === 'tr'
  usePageMeta(
    `${title} | Daily Utility Toolkit`,
    description ||
      (isTr
        ? `${title} aracı ile hızlı ve pratik hesaplama/karar işlemleri yapın.`
        : `Use the ${title} tool for quick and practical calculations/decisions.`),
  )

  return (
    <div className="min-h-dvh bg-zinc-50 bg-grid-soft">
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

        <section className="mt-6 grid gap-4">
          <article className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">
              {isTr ? 'Nasıl çalışır?' : 'How it works'}
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              {isTr
                ? `${title} aracı, girdiğiniz veriyi anında tarayıcı içinde işler ve sonucu doğrudan ekranda gösterir. Ek bir üyelik veya karmaşık kurulum gerekmez; temel adım, ilgili alanları doldurup sonucu okumaktır.`
                : `The ${title} tool processes your input directly in the browser and shows results instantly on screen. No sign-up or complex setup is required; fill in the fields and review the output.`}
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">SSS / FAQ</h2>
            <div className="mt-2 space-y-2 text-sm leading-7 text-zinc-700">
              <p>
                <strong>{isTr ? 'Verilerim kaydediliyor mu?' : 'Is my data stored?'}</strong>{' '}
                {isTr
                  ? 'Çoğu işlem tarayıcı içinde çalışır; kalıcı sunucu kaydı hedeflenmez.'
                  : 'Most operations run in the browser; persistent server-side storage is not intended.'}
              </p>
              <p>
                <strong>{isTr ? 'Mobilde çalışır mı?' : 'Does it work on mobile?'}</strong>{' '}
                {isTr
                  ? 'Evet, modern mobil tarayıcılarda temel özellikler desteklenir.'
                  : 'Yes, core features are supported in modern mobile browsers.'}
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-amber-900">
              {isTr ? 'Sınırlamalar' : 'Limitations'}
            </h2>
            <p className="mt-2 text-sm leading-7 text-amber-900/90">
              {isTr
                ? 'Bu araçlar genel kullanım amaçlıdır; tıbbi, hukuki veya finansal kesin kararlar için tek başına referans alınmamalıdır. Sonuçları kritik kullanım öncesi ikinci bir kaynakla doğrulamanız önerilir.'
                : 'These tools are for general use and should not be the sole basis for medical, legal, or financial decisions. Validate critical outcomes with a second source.'}
            </p>
          </article>
        </section>
      </motion.main>
    </div>
  )
}
