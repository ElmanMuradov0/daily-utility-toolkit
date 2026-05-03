import { useLanguage } from '../i18n/useLanguage'
import TopMenu from '../components/TopMenu'
import usePageMeta from '../hooks/usePageMeta'

export default function Terms() {
  const { lang } = useLanguage()
  const isTr = lang === 'tr'

  usePageMeta(
    isTr ? 'Kullanım Şartları | Daily Utility Toolkit' : 'Terms of Use | Daily Utility Toolkit',
    isTr
      ? 'Daily Utility Toolkit kullanım şartları, sorumluluk sınırları ve hizmet koşulları.'
      : 'Terms of use, liability limits, and service conditions for Daily Utility Toolkit.',
  )

  return (
    <div className="min-h-dvh bg-zinc-50 bg-grid-soft px-4 py-10 text-zinc-900">
      <div className="bg-grid-soft relative -mx-4 mb-8 overflow-hidden border-b border-zinc-100/80 px-4">
        <TopMenu />
      </div>
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold">{isTr ? 'Kullanım Şartları' : 'Terms of Use'}</h1>
        <p className="mt-4 text-sm leading-7 text-zinc-700">
          {isTr
            ? 'Bu siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Araçlar genel bilgilendirme ve pratik kullanım amaçlıdır.'
            : 'By using this site, you agree to the following terms. The tools are provided for general informational and practical use.'}
        </p>
        <p className="mt-3 text-sm leading-7 text-zinc-700">
          {isTr
            ? 'Sunulan sonuçlar bağlayıcı profesyonel tavsiye yerine geçmez. Tıbbi, hukuki veya finansal kararlar için ek uzman görüşü almanız önerilir.'
            : 'Results do not replace professional advice. For medical, legal, or financial decisions, consult qualified experts.'}
        </p>
        <p className="mt-3 text-sm leading-7 text-zinc-700">
          {isTr
            ? 'Site içeriği önceden bildirim olmadan güncellenebilir. Hizmette kesinti, gecikme veya teknik hata durumlarında mutlak süreklilik taahhüt edilmez.'
            : 'Site content may be updated without prior notice. Continuous uninterrupted service cannot be guaranteed in case of technical issues.'}
        </p>
      </div>
    </div>
  )
}
