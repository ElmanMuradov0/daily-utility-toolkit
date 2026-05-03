import { useLanguage } from '../i18n/useLanguage'
import usePageMeta from '../hooks/usePageMeta'
import TopMenu from '../components/TopMenu'

export default function About() {
  const { lang } = useLanguage()
  const isTr = lang === 'tr'
  usePageMeta(
    isTr ? 'Hakkımızda | Daily Utility Toolkit' : 'About | Daily Utility Toolkit',
    isTr
      ? "Daily Utility Toolkit'in amacı, yaklaşımı ve ürün odağı hakkında bilgi."
      : "Learn about Daily Utility Toolkit's mission, approach, and product focus.",
  )

  return (
    <div className="min-h-dvh bg-zinc-50 bg-grid-soft px-4 py-10 text-zinc-900">
      <div className="bg-grid-soft relative -mx-4 mb-8 overflow-hidden border-b border-zinc-100/80 px-4">
        <TopMenu />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold">{isTr ? 'Hakkımızda' : 'About Us'}</h1>

          <p className="mt-4 text-sm leading-7 text-zinc-700">
            {isTr
              ? 'Daily Utility Toolkit, günlük işlerde hızlı karar almayı ve basit hesaplamaları kolaylaştırmak için geliştirildi. Amacımız, karmaşık olmayan, hızlı açılan ve herkesin rahat kullanabileceği yardımcı araçlar sunmaktır.'
              : 'Daily Utility Toolkit was created to simplify quick decisions and lightweight calculations in everyday workflows. Our goal is to provide simple, fast, and accessible utility tools for everyone.'}
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-700">
            {isTr
              ? 'Ürün yaklaşımımız sadelik, hız ve güvenilirlik ekseninde ilerler. Her araç tek bir işi iyi yapacak şekilde tasarlanır; böylece kullanıcılar gereksiz adımlarla vakit kaybetmeden sonuca ulaşır.'
              : 'Our product philosophy is built around simplicity, speed, and reliability. Each tool is designed to do one job well so users can reach outcomes without unnecessary steps.'}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
              <h2 className="text-sm font-semibold text-zinc-900">{isTr ? 'Misyon' : 'Mission'}</h2>
              <p className="mt-2 text-xs leading-6 text-zinc-600">{isTr ? 'Günlük mikro görevleri daha akıcı hale getirmek.' : 'Make daily micro-tasks smoother and faster.'}</p>
            </div>
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
              <h2 className="text-sm font-semibold text-zinc-900">{isTr ? 'Vizyon' : 'Vision'}</h2>
              <p className="mt-2 text-xs leading-6 text-zinc-600">{isTr ? 'Basit ama güçlü bir yardımcı katman olmak.' : 'Be a simple yet dependable utility layer.'}</p>
            </div>
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
              <h2 className="text-sm font-semibold text-zinc-900">{isTr ? 'Odak' : 'Focus'}</h2>
              <p className="mt-2 text-xs leading-6 text-zinc-600">{isTr ? 'Hızlı kullanım, düşük karmaşıklık, net sonuç.' : 'Fast use, low complexity, clear output.'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
