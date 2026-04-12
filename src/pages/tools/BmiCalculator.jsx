import { useMemo, useState } from 'react'
import ToolShell from '../../components/ToolShell'
import { useLanguage } from '../../i18n/useLanguage'

function bmiValue(kg, cm) {
  const h = cm / 100
  if (!Number.isFinite(kg) || !Number.isFinite(h) || h <= 0 || kg <= 0) return null
  return kg / (h * h)
}

function zoneKey(bmi) {
  if (bmi < 18.5) return 'thin'
  if (bmi < 25) return 'normal'
  if (bmi < 30) return 'over'
  return 'obese'
}

/** BMI from height (cm) + weight (kg); semicircle gauge. */
export default function BmiCalculator() {
  const { t } = useLanguage()
  const [cm, setCm] = useState('')
  const [kg, setKg] = useState('')

  const bmi = useMemo(() => {
    const c = Number.parseFloat(cm.replace(',', '.'))
    const k = Number.parseFloat(kg.replace(',', '.'))
    return bmiValue(k, c)
  }, [cm, kg])

  const z = bmi != null ? zoneKey(bmi) : null
  const needleAngle = useMemo(() => {
    if (bmi == null) return -90
    const clamped = Math.min(Math.max(bmi, 15), 40)
    return -90 + ((clamped - 15) / 25) * 180
  }, [bmi])

  return (
    <ToolShell title={t('bmi.title')} description={t('bmi.desc')}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="bmi-cm" className="mb-2 block text-sm font-medium text-zinc-900">
            {t('bmi.height')}
          </label>
          <input
            id="bmi-cm"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
            inputMode="decimal"
            className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            placeholder={t('bmi.heightPh')}
          />
        </div>
        <div>
          <label htmlFor="bmi-kg" className="mb-2 block text-sm font-medium text-zinc-900">
            {t('bmi.weight')}
          </label>
          <input
            id="bmi-kg"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            inputMode="decimal"
            className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            placeholder={t('bmi.weightPh')}
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <svg viewBox="0 0 200 120" className="h-44 w-full max-w-md" aria-hidden>
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e4e4e7"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 20 100 A 80 80 0 0 1 62 38"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="14"
            strokeLinecap="butt"
          />
          <path
            d="M 62 38 A 80 80 0 0 1 118 28"
            fill="none"
            stroke="#22c55e"
            strokeWidth="14"
          />
          <path
            d="M 118 28 A 80 80 0 0 1 154 52"
            fill="none"
            stroke="#eab308"
            strokeWidth="14"
          />
          <path
            d="M 154 52 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#f97316"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <g transform="translate(100,100)">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-72"
              stroke="#18181b"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${needleAngle})`}
            />
            <circle r="6" fill="#18181b" />
          </g>
        </svg>

        {bmi != null ? (
          <div className="mt-2 text-center">
            <p className="text-3xl font-semibold tabular-nums text-zinc-900">
              {bmi.toFixed(1)}
            </p>
            <p className="mt-1 text-sm font-medium text-teal-800">
              {t(`bmi.zone.${z}`)}
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-zinc-500">
              {t('bmi.disclaimer')}
            </p>
          </div>
        ) : (
          <p className="mt-4 text-sm text-zinc-500">{t('bmi.empty')}</p>
        )}
      </div>
    </ToolShell>
  )
}
