import Header from '../components/Header'
import ToolGrid from '../components/ToolGrid'
import AdSenseBanner from '../components/AdSenseBanner'
import { useLanguage } from '../i18n/useLanguage'

/**
 * Landing: hero + exactly eight tool cards.
 */
export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900">
      <div className="bg-grid-soft relative overflow-hidden border-b border-zinc-100/80">
        <Header />
      </div>
      <ToolGrid />
      <AdSenseBanner />
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">
              {t('home.contentTitle')}
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              {t('home.contentBody')}
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">
              {t('home.howTitle')}
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-zinc-700">
              <li>{t('home.how1')}</li>
              <li>{t('home.how2')}</li>
              <li>{t('home.how3')}</li>
            </ol>
          </article>
        </div>

        <article className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">{t('home.faqTitle')}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700">
            <div>
              <h3 className="font-semibold text-zinc-900">{t('home.faq1q')}</h3>
              <p>{t('home.faq1a')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">{t('home.faq2q')}</h3>
              <p>{t('home.faq2a')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">{t('home.faq3q')}</h3>
              <p>{t('home.faq3a')}</p>
            </div>
          </div>
        </article>
      </section>

      <footer className="border-t border-zinc-100 bg-white/60 py-8 text-center text-xs text-zinc-500 backdrop-blur-sm">
        <p>{t('home.footer')}</p>
      </footer>
    </div>
  )
}
