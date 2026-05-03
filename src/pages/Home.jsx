import Header from '../components/Header'
import ToolGrid from '../components/ToolGrid'
import TopMenu from '../components/TopMenu'
import { useLanguage } from '../i18n/useLanguage'
import usePageMeta from '../hooks/usePageMeta'

/**
 * Landing: hero + exactly eight tool cards.
 */
export default function Home() {
  const { t, lang } = useLanguage()
  const isTr = lang === 'tr'
  usePageMeta(
    isTr ? 'Daily Utility Toolkit | Ana Sayfa' : 'Daily Utility Toolkit | Home',
    isTr
      ? 'Tarayıcıda çalışan günlük araçlar: karar çarkı, ne yesek, sayaçlar, dönüştürücüler ve daha fazlası.'
      : 'Browser-based daily tools: decision wheel, meal picker, timers, converters, and more.',
  )

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900">
      <div className="bg-grid-soft relative overflow-hidden border-b border-zinc-100/80">
        <TopMenu />
        <Header />
      </div>
      <ToolGrid />
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <article className="mb-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            {isTr ? 'Günlük Utility Toolkit Nedir?' : 'What Is Daily Utility Toolkit?'}
          </h2>
          <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-700">
            {isTr ? (
              <>
                <p>
                  Daily Utility Toolkit, günlük hayatta tekrar eden küçük ama zaman alan işlerinizi tek bir noktada toplamak için hazırlanmış hafif bir araç setidir. Kurulum istemeyen bu yaklaşım, sadece tarayıcı açarak çekiliş yapma, karar verme, sayaç başlatma, metin analizi, renk seçimi ya da birim dönüşümü gibi ihtiyaçları hızlıca karşılamanızı sağlar. Bir uygulamayı açıp bir diğerine geçmek yerine, tek bir sayfadan farklı görevleri yönetmek daha temiz bir akış sunar. Özellikle ekip içinde hızlı karar vermek, içerik üretirken basit ölçüm yapmak veya gündelik planlarınızı sayısallaştırmak istediğinizde bu araçlar pratik bir yardımcıya dönüşür.
                </p>
                <p>
                  Araçların büyük kısmı cihazınızda çalışan istemci tarafı mantıkla tasarlandığı için kullanım deneyimi hızlıdır ve bekleme süresi düşüktür. Birçok işlem için dış servis bağımlılığı olmadığı için bağlantı dalgalanmalarında bile temel işlevler stabil kalır. Bu yapı aynı zamanda gizlilik açısından da avantaj sağlar; yazdığınız metin, girdiğiniz değerler ya da yaptığınız denemeler çoğu senaryoda uzak sunuculara gönderilmeden tarayıcı içinde işlenir. Böylece hem performans hem de veri minimizasyonu birlikte korunur.
                </p>
                <p>
                  Bu platform bir “her şeyi yapan dev sistem” olmayı hedeflemez; bunun yerine en sık kullanılan kısa görevleri kaliteli bir deneyimle çözmeye odaklanır. Örneğin çekiliş aracıyla ekip toplantılarında sıra belirlemek, decision wheel ile fikirleri tarafsızca seçmek, text counter ile sosyal medya metinlerini sınır içinde tutmak veya pomodoro ile odak döngüsü kurmak mümkündür. Bu yaklaşım özellikle üretkenlik senaryolarında kazanım sağlar; çünkü kullanıcı arayüzü sade kaldığında insanlar araç öğrenmeye değil işi bitirmeye enerji harcar.
                </p>
              </>
            ) : (
              <>
                <p>
                  Daily Utility Toolkit is a compact set of browser-based tools built to remove friction from repetitive micro-tasks. Instead of juggling multiple websites for random picking, countdowns, text counting, color conversion, or quick calculations, you can complete them in one flow. The tools are intentionally simple, fast, and predictable, so users can focus on outcomes rather than setup.
                </p>
                <p>
                  Most interactions run on the client side, which helps responsiveness and reduces unnecessary data transfer. This structure is practical for students, content creators, and remote teams who need utility functions without account creation or heavy interfaces. A familiar shell and clear controls keep the learning curve low while preserving speed.
                </p>
                <p>
                  Beyond speed, the product philosophy is clarity. Each tool is shaped around one core job with immediate feedback, fewer clicks, and less context switching. Over time, these small gains compound into better daily flow, especially when you return multiple times for quick decisions and lightweight calculations.
                </p>
              </>
            )}
          </div>
        </article>
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

      </section>

      <footer className="border-t border-zinc-100 bg-white/60 py-8 text-center text-xs text-zinc-500 backdrop-blur-sm">
        <p>{t('home.footer')}</p>
      </footer>
    </div>
  )
}
