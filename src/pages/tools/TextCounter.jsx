import { useCallback, useMemo, useState } from 'react'
import ToolShell from '../../components/ToolShell'
import SlotInputs from '../../components/SlotInputs'
import { useLanguage } from '../../i18n/useLanguage'

function countStats(text) {
  const chars = text.length
  const charsNoSpace = text.replace(/\s/g, '').length
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const sentences =
    text.trim() === ''
      ? 0
      : text
          .split(/[.!?]+/)
          .map((s) => s.trim())
          .filter(Boolean).length
  return { chars, charsNoSpace, words, sentences }
}

function useSlots(initialCount = 5, min = 1, max = 16) {
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

  return { count, setCount: setCountSafe, values, setVal }
}

/** Word / character / sentence counts across N text fields. */
export default function TextCounter() {
  const { t } = useLanguage()
  const { count, setCount, values, setVal } = useSlots(5, 1, 16)

  const combined = useMemo(
    () => values.map((s) => s.trim()).filter(Boolean).join('\n'),
    [values],
  )

  const stats = useMemo(() => countStats(combined), [combined])

  return (
    <ToolShell title={t('textcounter.title')} description={t('textcounter.desc')}>
      <SlotInputs
        min={1}
        max={16}
        count={count}
        onCountChange={setCount}
        countLabel={t('common.lineCountLabel')}
        sectionTitle={t('textcounter.slotSection')}
        values={values}
        onChange={setVal}
        placeholder={t('textcounter.placeholder')}
        getRowLabel={(i) => t('common.fieldN', { n: i + 1 })}
      />

      <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label={t('textcounter.words')} value={stats.words} />
        <Stat label={t('textcounter.chars')} value={stats.chars} />
        <Stat label={t('textcounter.charsNoSpace')} value={stats.charsNoSpace} />
        <Stat label={t('textcounter.sentences')} value={stats.sentences} />
      </dl>
    </ToolShell>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-100 bg-white px-4 py-4 text-center shadow-sm">
      <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-semibold tabular-nums text-zinc-900">
        {value.toLocaleString()}
      </dd>
    </div>
  )
}
