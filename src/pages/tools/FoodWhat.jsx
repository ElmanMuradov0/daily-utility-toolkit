import { useMemo, useState } from 'react'
import { ChefHat, Sparkles } from 'lucide-react'
import ToolShell from '../../components/ToolShell'
import ResultModal from '../../components/ResultModal'
import { useLanguage } from '../../i18n/useLanguage'
import { CATEGORY_IDS, pickRandomMeal } from '../../data/foodPool'

/** “Ne yesek?” — categories, budget, mood → random meal suggestion. */
export default function FoodWhat() {
  const { lang, t } = useLanguage()
  const [selected, setSelected] = useState(() => new Set(CATEGORY_IDS))
  const [budget, setBudget] = useState('mid')
  const [mood, setMood] = useState('any')
  const [suggestion, setSuggestion] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const categoryIds = useMemo(() => [...selected], [selected])

  function toggleCat(id) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        if (next.size <= 1) return next
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function suggest() {
    const text = pickRandomMeal(categoryIds, budget, mood, lang)
    setSuggestion(text)
    setModalOpen(true)
  }

  return (
    <ToolShell title={t('food.title')} description={t('food.desc')}>
      <p className="mb-2 text-sm font-medium text-zinc-900">{t('food.categories')}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {CATEGORY_IDS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => toggleCat(id)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              selected.has(id)
                ? 'border-teal-500 bg-teal-50 text-teal-900'
                : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300'
            }`}
          >
            {t(`food.cat.${id}`)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium text-zinc-900">{t('food.budgetTitle')}</p>
          <div className="flex flex-wrap gap-2">
            {['low', 'mid', 'high'].map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  budget === b
                    ? 'border-teal-600 bg-teal-600 text-white'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-teal-200'
                }`}
              >
                {t(`food.budget.${b}`)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-zinc-900">{t('food.moodTitle')}</p>
          <div className="flex flex-wrap gap-2">
            {['any', 'quick', 'comfort', 'light', 'sweet'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMood(m)}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  mood === m
                    ? 'border-teal-600 bg-teal-600 text-white'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-teal-200'
                }`}
              >
                {t(`food.mood.${m}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={suggest}
        className="mt-10 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-500"
      >
        <Sparkles className="h-4 w-4" aria-hidden />
        {t('food.cta')}
      </button>

      <ResultModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={t('food.modalTitle')}
        closeLabel={t('modal.close')}
      >
        <p className="flex items-start gap-3 text-xl font-semibold tracking-tight text-zinc-900">
          <ChefHat className="mt-0.5 h-7 w-7 shrink-0 text-teal-600" aria-hidden />
          <span>{suggestion}</span>
        </p>
        <p className="mt-4 text-sm text-zinc-500">{t('food.modalHint')}</p>
      </ResultModal>
    </ToolShell>
  )
}
