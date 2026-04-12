import { useCallback, useMemo, useState } from 'react'
import { Copy, Pipette } from 'lucide-react'
import ToolShell from '../../components/ToolShell'
import { useLanguage } from '../../i18n/useLanguage'

function hexToRgb(hex) {
  const h = hex.replace('#', '').trim()
  if (h.length === 3) {
    const r = Number.parseInt(h[0] + h[0], 16)
    const g = Number.parseInt(h[1] + h[1], 16)
    const b = Number.parseInt(h[2] + h[2], 16)
    return Number.isFinite(r) ? { r, g, b } : null
  }
  if (h.length !== 6) return null
  const r = Number.parseInt(h.slice(0, 2), 16)
  const g = Number.parseInt(h.slice(2, 4), 16)
  const b = Number.parseInt(h.slice(4, 6), 16)
  if ([r, g, b].some((x) => Number.isNaN(x))) return null
  return { r, g, b }
}

/** Native color input + hex/RGB sync and copy. */
export default function ColorPickerTool() {
  const { t } = useLanguage()
  const [hex, setHex] = useState('#0d9488')
  const [copied, setCopied] = useState('')

  const rgb = useMemo(() => hexToRgb(hex) ?? { r: 13, g: 148, b: 136 }, [hex])
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

  const setFromHexInput = (v) => {
    const raw = v.startsWith('#') ? v : `#${v}`
    setHex(raw.slice(0, 7))
  }

  const copy = useCallback(async (text, kind) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(kind)
      window.setTimeout(() => setCopied(''), 1600)
    } catch {
      setCopied('')
    }
  }, [])

  return (
    <ToolShell title={t('color.title')} description={t('color.desc')}>
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <label className="relative block h-32 w-32 cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 shadow-inner ring-1 ring-zinc-100">
          <span className="sr-only">{t('color.native')}</span>
          <input
            type="color"
            value={hex.length === 7 ? hex : '#000000'}
            onChange={(e) => setHex(e.target.value)}
            className="absolute inset-0 h-[200%] w-[200%] -translate-x-1/4 -translate-y-1/4 cursor-pointer border-0 p-0"
          />
        </label>

        <div className="min-w-0 flex-1 space-y-4">
          <div>
            <label htmlFor="color-hex" className="mb-2 block text-sm font-medium text-zinc-900">
              {t('color.hex')}
            </label>
            <div className="flex gap-2">
              <input
                id="color-hex"
                value={hex}
                onChange={(e) => setFromHexInput(e.target.value)}
                className="w-full max-w-xs rounded-xl border border-zinc-200 px-3 py-2 font-mono text-sm uppercase outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                maxLength={7}
              />
              <button
                type="button"
                onClick={() => copy(hex.toUpperCase(), 'hex')}
                className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200"
              >
                <Copy className="h-4 w-4" aria-hidden />
                {t('color.copyHex')}
              </button>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-zinc-900">{t('color.rgb')}</p>
            <div className="flex flex-wrap items-center gap-2">
              <code className="rounded-lg bg-zinc-100 px-3 py-2 font-mono text-sm text-zinc-800">
                {rgbString}
              </code>
              <button
                type="button"
                onClick={() => copy(rgbString, 'rgb')}
                className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200"
              >
                <Copy className="h-4 w-4" aria-hidden />
                {t('color.copyRgb')}
              </button>
            </div>
          </div>
          {copied ? (
            <p className="text-sm font-medium text-teal-700" role="status">
              {copied === 'hex' ? t('color.copiedHex') : t('color.copiedRgb')}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex items-start gap-2 rounded-xl border border-zinc-100 bg-zinc-50/80 p-4 text-sm text-zinc-600">
        <Pipette className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden />
        <p>{t('color.tip')}</p>
      </div>
    </ToolShell>
  )
}
