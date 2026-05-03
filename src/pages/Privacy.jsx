import { useLanguage } from '../i18n/useLanguage'
import usePageMeta from '../hooks/usePageMeta'
import TopMenu from '../components/TopMenu'

export default function Privacy() {
  const { lang } = useLanguage()
  const isTr = lang === 'tr'

  usePageMeta(
    isTr ? 'Gizlilik Politikası | Daily Utility Toolkit' : 'Privacy Policy | Daily Utility Toolkit',
    isTr
      ? 'Daily Utility Toolkit gizlilik politikası, veri minimizasyonu ve kullanım ilkeleri.'
      : 'Privacy policy, data minimization, and usage principles for Daily Utility Toolkit.',
  )

  return (
    <div className="min-h-dvh bg-zinc-50 bg-grid-soft px-4 py-10 text-zinc-900">
      <div className="bg-grid-soft relative -mx-4 mb-8 overflow-hidden border-b border-zinc-100/80 px-4">
        <TopMenu />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold">{isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}</h1>

          <p className="mt-4 text-sm leading-7 text-zinc-700">
            {isTr
              ? 'Uygulamadaki çoğu işlem tarayıcı içinde gerçekleşir. Kişisel verileri gereksiz toplamamayı esas alıyoruz. Yine de üçüncü taraf tarayıcı eklentileri veya servisler kendi politikalarına göre veri işleyebilir.'
              : 'Most app operations run in the browser. We follow a data-minimization approach and avoid unnecessary collection of personal data. Third-party browser extensions or services may process data under their own policies.'}
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-700">
            {isTr
              ? 'Araç girişleri mümkün olduğunca cihaz üzerinde işlenir. Kritik kararlar öncesinde çıktıları ikinci bir kaynakla doğrulamanızı öneririz.'
              : 'Inputs are processed on-device whenever possible. For critical decisions, validate outputs with a second trusted source.'}
          </p>

          <ul className="mt-5 space-y-2 text-sm text-zinc-700">
            <li>{isTr ? '• Gereksiz veri toplamamaya odaklanırız.' : '• We focus on minimizing unnecessary data collection.'}</li>
            <li>{isTr ? '• Temel işlevler için hesap zorunluluğu yoktur.' : '• Core features do not require account creation.'}</li>
            <li>{isTr ? '• Harici servislerin kendi gizlilik kuralları geçerlidir.' : '• External services follow their own privacy policies.'}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
