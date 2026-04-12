import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { RefreshCw } from 'lucide-react'
import ToolShell from '../../components/ToolShell'
import ResultModal from '../../components/ResultModal'
import SlotInputs from '../../components/SlotInputs'
import { useLanguage } from '../../i18n/useLanguage'
import { WHEEL_PALETTE } from '../../data/wheelPalette'

function buildConicGradient(n) {
  const slice = 360 / n
  const parts = []
  for (let i = 0; i < n; i += 1) {
    const start = slice * i
    const end = slice * (i + 1)
    parts.push(`${WHEEL_PALETTE[i % WHEEL_PALETTE.length]} ${start}deg ${end}deg`)
  }
  return `conic-gradient(${parts.join(', ')})`
}

function useSlots(initialCount = 6, min = 2, max = 12) {
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

  const parts = useMemo(
    () => values.map((s) => s.trim()).filter(Boolean),
    [values],
  )

  return { count, setCount: setCountSafe, values, setVal, parts }
}

/** Spinning wheel + colored slots matching slices; legend above wheel. */
export default function DecisionWheel() {
  const { t } = useLanguage()
  const { count, setCount, values, setVal, parts } = useSlots(6, 2, 12)
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalChoice, setModalChoice] = useState('')

  const displayOptions = useMemo(() => {
    if (parts.length === 0) return []
    if (parts.length === 1) return [parts[0], `${parts[0]} · ${t('wheel.encore')}`]
    return parts
  }, [parts, t])

  const optionsRef = useRef(displayOptions)
  useEffect(() => {
    optionsRef.current = displayOptions
  }, [displayOptions])

  const ready = displayOptions.length >= 2
  const n = displayOptions.length
  const gradient = useMemo(
    () => (ready ? buildConicGradient(n) : 'transparent'),
    [n, ready],
  )

  function spin() {
    if (spinning || !ready) return
    const slice = 360 / n
    const winnerIndex = Math.floor(Math.random() * n)
    const theta = winnerIndex * slice + slice / 2
    const current = ((rotation % 360) + 360) % 360
    const remainder = (360 - theta - current + 1080) % 360
    const extra = 360 * (6 + Math.floor(Math.random() * 3))
    const target = rotation + extra + remainder

    setSpinning(true)
    setRotation(target)

    window.setTimeout(() => {
      setSpinning(false)
      const opts = optionsRef.current
      const label = opts[winnerIndex] ?? '—'
      setModalChoice(label)
      setModalOpen(true)
    }, 5100)
  }

  return (
    <ToolShell title={t('wheel.title')} description={t('wheel.desc')}>
      <SlotInputs
        min={2}
        max={12}
        count={count}
        onCountChange={setCount}
        countLabel={t('common.lineCountLabel')}
        sectionTitle={t('wheel.slotSection')}
        values={values}
        onChange={setVal}
        placeholder={t('wheel.fieldPh')}
        accentColors={WHEEL_PALETTE}
        getRowLabel={(i) => t('common.fieldN', { n: i + 1 })}
      />

      <div className="mt-10 flex flex-col items-center gap-6">
        {ready ? (
          <>
            <div className="w-full max-w-xl">
              <p className="mb-3 text-center text-sm font-semibold text-zinc-800">
                {t('wheel.legendTitle')}
              </p>
              <ul className="flex flex-wrap justify-center gap-2">
                {displayOptions.map((label, i) => {
                  const col = WHEEL_PALETTE[i % WHEEL_PALETTE.length]
                  return (
                    <li
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm"
                      style={{ borderLeft: `4px solid ${col}` }}
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: col }}
                        aria-hidden
                      />
                      <span className="max-w-[10rem] truncate">{label}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="relative flex h-64 w-64 items-start justify-center sm:h-72 sm:w-72">
              <div
                className="absolute -top-3 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-x-[10px] border-b-[14px] border-x-transparent border-b-zinc-900 drop-shadow-md"
                aria-hidden
              />
              <div
                role="img"
                aria-label={t('wheel.wheelAria')}
                className="h-full w-full rounded-full border-[6px] border-white shadow-2xl ring-1 ring-zinc-200/80"
                style={{
                  background: gradient,
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning
                    ? 'transform 5.1s cubic-bezier(0.15, 0.85, 0.2, 1)'
                    : 'none',
                }}
              />
            </div>
          </>
        ) : (
          <div className="flex h-48 w-full max-w-md items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50 px-6 text-center text-sm leading-relaxed text-zinc-500">
            {t('wheel.needTwo')}
          </div>
        )}

        <div className="w-full max-w-xs space-y-4 text-center">
          <button
            type="button"
            onClick={spin}
            disabled={!ready || spinning}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              className={`h-4 w-4 ${spinning ? 'animate-spin' : ''}`}
              aria-hidden
            />
            {t('wheel.spin')}
          </button>
          <p className="text-sm text-zinc-500">{t('wheel.hint')}</p>
        </div>
      </div>

      <ResultModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={t('wheel.modalTitle')}
        closeLabel={t('modal.close')}
      >
        <p className="text-center text-xl font-semibold text-zinc-900">
          {t('wheel.result', { choice: modalChoice })}
        </p>
      </ResultModal>
    </ToolShell>
  )
}
