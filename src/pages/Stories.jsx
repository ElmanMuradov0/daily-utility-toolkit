import { useMemo, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import usePageMeta from '../hooks/usePageMeta'
import TopMenu from '../components/TopMenu'
import { STORY_GENRES } from '../data/stories'

export default function Stories() {
  const { lang } = useLanguage()
  const isTr = lang === 'tr'
  const [activeGenre, setActiveGenre] = useState(STORY_GENRES[0].id)

  usePageMeta(
    isTr ? 'Hikayeler | Daily Utility Toolkit' : 'Stories | Daily Utility Toolkit',
    isTr
      ? 'Komedi, dram, polisiye ve daha fazlası: kısa hikaye seçkisi.'
      : 'Short story collection across comedy, drama, detective, and more.',
    { canonicalPath: '/stories' },
  )

  const active = useMemo(
    () => STORY_GENRES.find((g) => g.id === activeGenre) || STORY_GENRES[0],
    [activeGenre],
  )

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900">
      <div className="bg-grid-soft relative overflow-hidden border-b border-zinc-100/80">
        <TopMenu />
        <header className="mx-auto max-w-5xl px-4 pb-10 pt-10 text-center sm:pb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            {isTr ? 'Hikaye Köşesi' : 'Story Corner'}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            {isTr
              ? 'Türüne göre seç, kısa hikayeyi oku. Her türde 5 özgün hikaye seni bekliyor.'
              : 'Pick a genre and read short stories. Each genre includes five original stories.'}
          </p>
        </header>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <section className="mb-8 flex flex-wrap gap-2" aria-label={isTr ? 'Tür seçimi' : 'Genre selection'}>
          {STORY_GENRES.map((genre) => {
            const activeTab = genre.id === activeGenre
            return (
              <button
                key={genre.id}
                type="button"
                onClick={() => setActiveGenre(genre.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeTab
                    ? 'border-teal-300 bg-teal-50 text-teal-800'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-teal-200 hover:text-teal-800'
                }`}
              >
                {isTr ? genre.trLabel : genre.enLabel}
              </button>
            )
          })}
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {active.stories.map((story, idx) => (
            <article
              key={`${active.id}-${idx}`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                {(isTr ? active.trLabel : active.enLabel).toUpperCase()}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-zinc-900">
                {isTr ? story.trTitle : story.enTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                {isTr ? story.trBody : story.enBody}
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

