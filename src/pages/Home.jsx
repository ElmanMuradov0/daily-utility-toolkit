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

      <footer className="border-t border-zinc-100 bg-white/60 py-8 text-center text-xs text-zinc-500 backdrop-blur-sm">
        <p>{t('home.footer')}</p>
      </footer>
    </div>
  )
}
