import { useEffect, useMemo, useState } from 'react'
import ToolShell from '../../components/ToolShell'
import { useLanguage } from '../../i18n/useLanguage'

function pad(n) {
  return String(n).padStart(2, '0')
}

/** Live countdown toward a picked local datetime. */
export default function CountdownTool() {
  const { t } = useLanguage()
  const [target, setTarget] = useState(() => defaultTarget())
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const end = useMemo(() => new Date(target), [target])
  const diffMs = end.getTime() - now.getTime()

  const done = diffMs <= 0
  const abs = Math.abs(diffMs)
  const days = Math.floor(abs / 86400000)
  const hours = Math.floor((abs % 86400000) / 3600000)
  const minutes = Math.floor((abs % 3600000) / 60000)
  const seconds = Math.floor((abs % 60000) / 1000)

  return (
    <ToolShell title={t('countdown.title')} description={t('countdown.desc')}>
      <div>
        <label
          htmlFor="countdown-target"
          className="mb-2 block text-sm font-medium text-zinc-900"
        >
          {t('countdown.target')}
        </label>
        <input
          id="countdown-target"
          type="datetime-local"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="w-full max-w-md rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
        />
      </div>

      <div
        className={`mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 ${done ? 'opacity-90' : ''}`}
        aria-live="polite"
      >
        <TimeChip label={t('countdown.days')} value={days} />
        <TimeChip label={t('countdown.hours')} value={hours} />
        <TimeChip label={t('countdown.minutes')} value={minutes} />
        <TimeChip label={t('countdown.seconds')} value={seconds} />
      </div>

      <p className="mt-8 text-center text-lg font-medium text-zinc-800">
        {done ? t('countdown.done') : t('countdown.running')}
      </p>
    </ToolShell>
  )
}

function TimeChip({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 px-4 py-6 text-center shadow-inner">
      <div className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {pad(value)}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </div>
    </div>
  )
}

function defaultTarget() {
  const d = new Date()
  d.setDate(d.getDate() + 7)
  d.setMinutes(0, 0, 0)
  const iso = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16)
  return iso
}
