import { useLanguage } from '../i18n/useLanguage'
import usePageMeta from '../hooks/usePageMeta'
import TopMenu from '../components/TopMenu'

export default function Contact() {
  const { lang } = useLanguage()
  const isTr = lang === 'tr'

  usePageMeta(
    isTr ? 'İletişim | Daily Utility Toolkit' : 'Contact | Daily Utility Toolkit',
    isTr
      ? 'Daily Utility Toolkit ile iletişime geçin, geri bildirim ve iş birliği için bize yazın.'
      : 'Contact Daily Utility Toolkit for feedback and collaboration inquiries.',
  )

  return (
    <div className="min-h-dvh bg-zinc-50 bg-grid-soft px-4 py-10 text-zinc-900">
      <div className="bg-grid-soft relative -mx-4 mb-8 overflow-hidden border-b border-zinc-100/80 px-4">
        <TopMenu />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold">{isTr ? 'İletişim' : 'Contact'}</h1>

          <p className="mt-4 text-sm leading-7 text-zinc-700">
            {isTr
              ? 'Öneri, geri bildirim veya iş birliği için bize e-posta üzerinden ulaşabilirsiniz. Mesajınıza mümkün olan en kısa sürede dönüş yapmaya çalışıyoruz.'
              : 'For suggestions, feedback, or collaboration inquiries, reach out by email. We aim to respond as quickly as possible.'}
          </p>

          <a
            href="mailto:info@zippykit.com"
            className="mt-4 inline-block text-sm font-medium text-teal-700 underline-offset-4 hover:underline"
          >
            info@zippykit.com
          </a>

          <div className="mt-6 rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-sm text-zinc-700">
            <p className="font-medium text-zinc-900">{isTr ? 'Bize yazarken' : 'When you contact us'}</p>
            <p className="mt-2 leading-7">
              {isTr
                ? 'Konu başlığında talebinizi kısa belirtirseniz süreci hızlandırabiliriz. Hata bildirimi yapıyorsanız, mümkünse ekran görüntüsü ve adım bilgisi ekleyin.'
                : 'A clear subject line helps us reply faster. For bug reports, include steps and screenshots when possible.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
