import { useLanguage } from '../i18n/useLanguage'
import usePageMeta from '../hooks/usePageMeta'
import TopMenu from '../components/TopMenu'

export default function Faq() {
  const { lang } = useLanguage()
  const isTr = lang === 'tr'

  usePageMeta(
    isTr ? 'SSS | Daily Utility Toolkit' : 'FAQ | Daily Utility Toolkit',
    isTr
      ? 'Sık sorulan sorular: kullanım, gizlilik, mobil destek ve araç mantığı.'
      : 'Frequently asked questions: usage, privacy, mobile support, and tool behavior.',
  )

  return (
    <div className="min-h-dvh bg-zinc-50 bg-grid-soft px-4 py-10 text-zinc-900">
      <div className="bg-grid-soft relative -mx-4 mb-8 overflow-hidden border-b border-zinc-100/80 px-4">
        <TopMenu />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold">{isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}</h1>

          <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-700">
            <div>
              <h2 className="font-semibold text-zinc-900">{isTr ? '1) Bu araçlar ücretsiz mi?' : '1) Are these tools free to use?'}</h2>
              <p>{isTr ? 'Evet, temel kullanım senaryoları için ücretsizdir.' : 'Yes, core usage scenarios are free.'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900">{isTr ? '2) Verilerim sunucuya gidiyor mu?' : '2) Is my data sent to servers?'}</h2>
              <p>{isTr ? 'Çoğu işlem tarayıcı içinde çalışır ve kalıcı kayıt hedeflenmez.' : 'Most operations run in the browser and no persistent storage is intended.'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900">{isTr ? '3) Mobilde kullanabilir miyim?' : '3) Can I use it on mobile?'}</h2>
              <p>{isTr ? 'Evet, modern mobil tarayıcılarda çalışır.' : 'Yes, it works on modern mobile browsers.'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900">{isTr ? '4) Hesap açmam gerekiyor mu?' : '4) Do I need an account?'}</h2>
              <p>{isTr ? 'Hayır, temel araçlar için hesap gerekmez.' : 'No, an account is not required for core tools.'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900">{isTr ? '5) Sonuçlar kesin midir?' : '5) Are results guaranteed to be exact?'}</h2>
              <p>{isTr ? 'Araçlar pratik amaçlıdır; kritik kararlar için ikinci kaynakla doğrulama önerilir.' : 'Tools are practical helpers; for critical decisions, verify with a second source.'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900">{isTr ? '6) Hata bildirimi nasıl yaparım?' : '6) How can I report a bug?'}</h2>
              <p>{isTr ? 'İletişim sayfasından e-posta ile ekran görüntüsü ve adımları paylaşabilirsiniz.' : 'You can email us from the Contact page with steps and screenshots.'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900">{isTr ? '7) Dil seçimi tüm sayfalarda geçerli mi?' : '7) Does language selection apply across pages?'}</h2>
              <p>{isTr ? 'Evet, seçili dil arayüzdeki ilgili içeriklerde korunur.' : 'Yes, selected language is preserved across related UI content.'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900">{isTr ? '8) Bu platformu kimler kullanmalı?' : '8) Who is this platform for?'}</h2>
              <p>{isTr ? 'Öğrenciler, içerik üreticiler, ekipler ve hızlı mikro araçlara ihtiyaç duyan herkes için uygundur.' : 'It is suitable for students, creators, teams, and anyone needing quick utility tools.'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
