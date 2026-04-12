import { useEffect, useMemo, useRef, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import ToolShell from '../../components/ToolShell'
import ResultModal from '../../components/ResultModal'
import { useLanguage } from '../../i18n/useLanguage'

function clampDur(m, s) {
  const mm = Math.min(120, Math.max(0, Number.parseInt(m, 10) || 0))
  const ss = Math.min(59, Math.max(0, Number.parseInt(s, 10) || 0))
  return mm * 60 + ss
}

/** Pomodoro with configurable work/break (minutes + seconds) and phase popups. */
export default function Pomodoro() {
  const { t } = useLanguage()
  const [workMin, setWorkMin] = useState('25')
  const [workSec, setWorkSec] = useState('0')
  const [breakMin, setBreakMin] = useState('5')
  const [breakSec, setBreakSec] = useState('0')

  const [cfg, setCfg] = useState({ work: 25 * 60, br: 5 * 60 })
  const cfgRef = useRef(cfg)
  const [phase, setPhase] = useState('work')
  const [secondsLeft, setSecondsLeft] = useState(25 * 60)
  const [running, setRunning] = useState(false)
  const phaseRef = useRef('work')

  useEffect(() => {
    cfgRef.current = cfg
  }, [cfg])

  const [modalOpen, setModalOpen] = useState(false)
  const [modalKind, setModalKind] = useState('afterWork')

  const total = phase === 'work' ? cfg.work : cfg.br
  const progress = total > 0 ? 1 - secondsLeft / total : 0

  function applyDurations() {
    const w = clampDur(workMin, workSec) || 60
    const b = clampDur(breakMin, breakSec) || 60
    setCfg({ work: w, br: b })
    if (!running) {
      setSecondsLeft(phase === 'work' ? w : b)
    }
  }

  useEffect(() => {
    if (!running) return undefined
    const id = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s > 1) return s - 1
        const wasWork = phaseRef.current === 'work'
        const next = wasWork ? 'break' : 'work'
        phaseRef.current = next
        setPhase(next)
        setModalKind(wasWork ? 'afterWork' : 'afterBreak')
        setModalOpen(true)
        return next === 'work' ? cfgRef.current.work : cfgRef.current.br
      }) // phaseRef kept in sync here and in reset()
    }, 1000)
    return () => window.clearInterval(id)
  }, [running])

  const label = useMemo(
    () => (phase === 'work' ? t('pomodoro.work') : t('pomodoro.break')),
    [phase, t],
  )

  function reset() {
    setRunning(false)
    phaseRef.current = 'work'
    setPhase('work')
    setSecondsLeft(cfgRef.current.work)
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const ss = String(secondsLeft % 60).padStart(2, '0')

  return (
    <ToolShell title={t('pomodoro.title')} description={t('pomodoro.desc')}>
      <div className="mb-8 grid gap-4 rounded-xl border border-zinc-100 bg-zinc-50/70 p-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
            {t('pomodoro.workBlock')}
          </p>
          <div className="flex gap-2">
            <label className="sr-only" htmlFor="pm-wm">
              {t('pomodoro.minutes')}
            </label>
            <input
              id="pm-wm"
              value={workMin}
              onChange={(e) => setWorkMin(e.target.value)}
              disabled={running}
              className="w-full rounded-lg border border-zinc-200 px-2 py-2 text-sm disabled:opacity-50"
              inputMode="numeric"
            />
            <span className="self-center text-zinc-400">:</span>
            <input
              value={workSec}
              onChange={(e) => setWorkSec(e.target.value)}
              disabled={running}
              className="w-full rounded-lg border border-zinc-200 px-2 py-2 text-sm disabled:opacity-50"
              inputMode="numeric"
            />
          </div>
        </div>
        <div>
          <p className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-600">
            {t('pomodoro.breakBlock')}
          </p>
          <div className="flex gap-2">
            <input
              value={breakMin}
              onChange={(e) => setBreakMin(e.target.value)}
              disabled={running}
              className="w-full rounded-lg border border-zinc-200 px-2 py-2 text-sm disabled:opacity-50"
              inputMode="numeric"
            />
            <span className="self-center text-zinc-400">:</span>
            <input
              value={breakSec}
              onChange={(e) => setBreakSec(e.target.value)}
              disabled={running}
              className="w-full rounded-lg border border-zinc-200 px-2 py-2 text-sm disabled:opacity-50"
              inputMode="numeric"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <button
            type="button"
            onClick={applyDurations}
            disabled={running}
            className="rounded-lg border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-800 transition hover:bg-teal-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t('pomodoro.apply')}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="relative flex h-56 w-56 items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 120 120" aria-hidden>
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#e4e4e7"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#0d9488"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - progress)}`}
              className="transition-[stroke-dashoffset] duration-500 ease-out"
            />
          </svg>
          <div className="relative text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              {label}
            </p>
            <p className="mt-2 text-4xl font-semibold tabular-nums tracking-tight text-zinc-900">
              {mm}:{ss}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-teal-500"
          >
            {running ? (
              <>
                <Pause className="h-4 w-4" aria-hidden />
                {t('pomodoro.pause')}
              </>
            ) : (
              <>
                <Play className="h-4 w-4" aria-hidden />
                {t('pomodoro.start')}
              </>
            )}
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-800"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            {t('pomodoro.reset')}
          </button>
        </div>
      </div>

      <ResultModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={
          modalKind === 'afterWork'
            ? t('pomodoro.modalAfterWorkTitle')
            : t('pomodoro.modalAfterBreakTitle')
        }
        closeLabel={t('modal.close')}
      >
        <p>
          {modalKind === 'afterWork'
            ? t('pomodoro.modalAfterWorkBody')
            : t('pomodoro.modalAfterBreakBody')}
        </p>
      </ResultModal>
    </ToolShell>
  )
}
