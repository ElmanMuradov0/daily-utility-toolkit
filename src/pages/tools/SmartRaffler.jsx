import { useCallback, useMemo, useState } from 'react'
import { Sparkles } from 'lucide-react'
import ToolShell from '../../components/ToolShell'
import ResultModal from '../../components/ResultModal'
import SlotInputs from '../../components/SlotInputs'
import { useLanguage } from '../../i18n/useLanguage'

function useSlots(initialCount = 2, min = 2, max = 20) {
  const [count, setCount] = useState(initialCount)
  const [values, setValues] = useState(() => Array(initialCount).fill(''))

  const setCountSafe = useCallback(
    (n) => {
      const c = Math.min(max, Math.max(min, n))
      setCount(c)
      setValues((prev) => {
        if (c > prev.length) return [...prev, ...Array(c - prev.length).fill('')]
        return prev.slice(0, c)
      })
    },
    [min, max],
  )

  const setVal = useCallback((i, v) => {
    setValues((prev) => prev.map((x, j) => (j === i ? v : x)))
  }, [])

  const filled = useMemo(
    () => values.map((s) => s.trim()).filter(Boolean),
    [values],
  )

  return { count, setCount: setCountSafe, values, setVal, filled }
}

/** Pick a random name from N single-line fields. */
export default function SmartRaffler() {
  const { t } = useLanguage()
  const { count, setCount, values, setVal, filled } = useSlots(2, 2, 24)
  const [winner, setWinner] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  function draw() {
    if (!filled.length) {
      setWinner(null)
      return
    }
    const pick = filled[Math.floor(Math.random() * filled.length)]
    setWinner(pick)
    setModalOpen(true)
  }

  return (
    <ToolShell title={t('raffler.title')} description={t('raffler.desc')}>
      <SlotInputs
        min={2}
        max={24}
        count={count}
        onCountChange={setCount}
        countLabel={t('common.lineCountLabel')}
        sectionTitle={t('raffler.slotSection')}
        values={values}
        onChange={setVal}
        placeholder={t('raffler.listPh')}
        getRowLabel={(i) => t('common.fieldN', { n: i + 1 })}
      />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={draw}
          disabled={!filled.length}
          className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Sparkles className="h-4 w-4" aria-hidden />
          {t('raffler.draw')}
        </button>
        <span className="text-sm text-zinc-500">
          {t('raffler.loaded', { n: filled.length })}
        </span>
      </div>

      <ResultModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={t('raffler.winner')}
        closeLabel={t('modal.close')}
      >
        <p className="text-center text-2xl font-semibold tracking-tight text-zinc-900">
          {winner}
        </p>
      </ResultModal>
    </ToolShell>
  )
}
