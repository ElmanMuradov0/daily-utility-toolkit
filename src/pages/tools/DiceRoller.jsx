import { useEffect, useRef, useState } from 'react'
import { Dices } from 'lucide-react'
import ToolShell from '../../components/ToolShell'
import ResultModal from '../../components/ResultModal'
import { useLanguage } from '../../i18n/useLanguage'

function rollDie() {
  return 1 + Math.floor(Math.random() * 6)
}

/** Roll 1–6 dice with a short roll animation, then result modal. */
export default function DiceRoller() {
  const { t } = useLanguage()
  const [count, setCount] = useState(2)
  const [faces, setFaces] = useState([])
  const [rolling, setRolling] = useState(false)
  const [flicker, setFlicker] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [])

  function roll() {
    if (rolling) return
    setRolling(true)
    setFlicker(Array.from({ length: count }, () => rollDie()))
    let step = 0
    timerRef.current = window.setInterval(() => {
      step += 1
      setFlicker(Array.from({ length: count }, () => rollDie()))
      if (step >= 16) {
        if (timerRef.current) window.clearInterval(timerRef.current)
        const next = Array.from({ length: count }, () => rollDie())
        setFaces(next)
        setRolling(false)
        setFlicker([])
        setModalOpen(true)
      }
    }, 75)
  }

  const sum = faces.reduce((a, b) => a + b, 0)

  return (
    <ToolShell title={t('dice.title')} description={t('dice.desc')}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <aside className="shrink-0 lg:w-44">
          <p className="text-sm font-medium text-zinc-900">{t('dice.countLabel')}</p>
          <select
            value={count}
            disabled={rolling}
            onChange={(e) => setCount(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 shadow-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100 disabled:opacity-50"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {t('dice.countOption', { n })}
              </option>
            ))}
          </select>
        </aside>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-zinc-900">{t('dice.previewHint')}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {Array.from({ length: count }).map((_, i) => {
              const show = rolling ? flicker[i] : faces[i]
              return (
                <div
                  key={i}
                  className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 border-zinc-200 bg-gradient-to-b from-white to-zinc-50 text-2xl font-bold text-zinc-900 shadow-inner ${
                    rolling ? 'dice-rolling' : ''
                  }`}
                >
                  {show ?? '·'}
                </div>
              )
            })}
          </div>
          {rolling ? (
            <p className="mt-4 text-sm font-medium text-teal-700" aria-live="polite">
              {t('dice.rolling')}
            </p>
          ) : null}

          <button
            type="button"
            onClick={roll}
            disabled={rolling}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-500 disabled:cursor-wait disabled:opacity-70"
          >
            <Dices className="h-5 w-5" aria-hidden />
            {t('dice.roll')}
          </button>
        </div>
      </div>

      <ResultModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={t('dice.modalTitle')}
        closeLabel={t('modal.close')}
      >
        <div className="flex flex-wrap gap-3">
          {faces.map((f, i) => (
            <div
              key={i}
              className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-zinc-200 bg-zinc-50 text-2xl font-bold text-zinc-900 shadow-inner"
            >
              {f}
            </div>
          ))}
        </div>
        <p className="mt-6 text-lg font-semibold text-teal-800">
          {t('dice.sum', { sum })}
        </p>
      </ResultModal>
    </ToolShell>
  )
}
