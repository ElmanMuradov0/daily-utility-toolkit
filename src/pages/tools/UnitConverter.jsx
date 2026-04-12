import { useMemo, useState } from 'react'
import ToolShell from '../../components/ToolShell'
import { useLanguage } from '../../i18n/useLanguage'

const LENGTH = [
  { id: 'm', toM: (v) => v, fromM: (v) => v },
  { id: 'km', toM: (v) => v * 1000, fromM: (v) => v / 1000 },
  { id: 'mi', toM: (v) => v * 1609.344, fromM: (v) => v / 1609.344 },
  { id: 'ft', toM: (v) => v * 0.3048, fromM: (v) => v / 0.3048 },
]

const TEMP = [
  { id: 'c', toC: (v) => v, fromC: (v) => v },
  { id: 'f', toC: (v) => ((v - 32) * 5) / 9, fromC: (v) => (v * 9) / 5 + 32 },
  { id: 'k', toC: (v) => v - 273.15, fromC: (v) => v + 273.15 },
]

/** Lightweight kitchen / travel conversions — no network calls. */
export default function UnitConverter() {
  const { t } = useLanguage()
  const [tab, setTab] = useState('length')

  return (
    <ToolShell title={t('units.title')} description={t('units.desc')}>
      <div className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 p-1 text-sm font-medium">
        <button
          type="button"
          onClick={() => setTab('length')}
          className={`rounded-full px-4 py-1.5 transition ${tab === 'length' ? 'bg-white text-teal-800 shadow-sm' : 'text-zinc-600'}`}
        >
          {t('units.length')}
        </button>
        <button
          type="button"
          onClick={() => setTab('temp')}
          className={`rounded-full px-4 py-1.5 transition ${tab === 'temp' ? 'bg-white text-teal-800 shadow-sm' : 'text-zinc-600'}`}
        >
          {t('units.temp')}
        </button>
      </div>

      <div className="mt-8">
        {tab === 'length' ? <LengthPanel /> : <TempPanel />}
      </div>
    </ToolShell>
  )
}

function LengthPanel() {
  const { t } = useLanguage()
  const [unit, setUnit] = useState('m')
  const [raw, setRaw] = useState('')

  const meters = useMemo(() => {
    const v = Number.parseFloat(raw)
    if (!Number.isFinite(v)) return 0
    const def = LENGTH.find((x) => x.id === unit) ?? LENGTH[0]
    return def.toM(v)
  }, [raw, unit])

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-900">{t('units.from')}</label>
        <div className="flex gap-2">
          <input
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            inputMode="decimal"
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="rounded-xl border border-zinc-200 bg-white px-2 text-sm outline-none focus:border-teal-400"
          >
            {LENGTH.map((u) => (
              <option key={u.id} value={u.id}>
                {t(`units.lengthUnits.${u.id}`)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-zinc-900">{t('units.equivalents')}</p>
        <ul className="space-y-2 text-sm text-zinc-700">
          {LENGTH.filter((u) => u.id !== unit).map((u) => (
            <li
              key={u.id}
              className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50/80 px-3 py-2"
            >
              <span className="text-zinc-500">{t(`units.lengthUnits.${u.id}`)}</span>
              <span className="font-medium tabular-nums">
                {fmt(u.fromM(meters))} {u.id}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function TempPanel() {
  const { t } = useLanguage()
  const [unit, setUnit] = useState('c')
  const [raw, setRaw] = useState('')

  const celsius = useMemo(() => {
    const v = Number.parseFloat(raw)
    if (!Number.isFinite(v)) return 0
    const def = TEMP.find((x) => x.id === unit) ?? TEMP[0]
    return def.toC(v)
  }, [raw, unit])

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-900">{t('units.from')}</label>
        <div className="flex gap-2">
          <input
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            inputMode="decimal"
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="rounded-xl border border-zinc-200 bg-white px-2 text-sm outline-none focus:border-teal-400"
          >
            {TEMP.map((u) => (
              <option key={u.id} value={u.id}>
                {t(`units.tempUnits.${u.id}`)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-zinc-900">{t('units.equivalents')}</p>
        <ul className="space-y-2 text-sm text-zinc-700">
          {TEMP.filter((u) => u.id !== unit).map((u) => (
            <li
              key={u.id}
              className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50/80 px-3 py-2"
            >
              <span className="text-zinc-500">{t(`units.tempUnits.${u.id}`)}</span>
              <span className="font-medium tabular-nums">
                {fmt(u.fromC(celsius))} °{u.id.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function fmt(n) {
  const rounded = Math.round(n * 1000) / 1000
  return Number.isFinite(rounded) ? rounded.toLocaleString() : '—'
}
