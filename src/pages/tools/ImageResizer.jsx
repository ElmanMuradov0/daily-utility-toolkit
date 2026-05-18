import { useEffect, useMemo, useRef, useState } from 'react'
import ToolShell from '../../components/ToolShell'
import { useLanguage } from '../../i18n/useLanguage'

function extFor(type) {
  if (type === 'image/png') return 'png'
  if (type === 'image/webp') return 'webp'
  return 'jpg'
}

export default function ImageResizer() {
  const { t } = useLanguage()
  const [sourceUrl, setSourceUrl] = useState('')
  const [sourceName, setSourceName] = useState('image')
  const [original, setOriginal] = useState({ w: 0, h: 0 })
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [keepRatio, setKeepRatio] = useState(true)
  const [format, setFormat] = useState('image/jpeg')
  const [resultUrl, setResultUrl] = useState('')
  const [status, setStatus] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    return () => {
      if (sourceUrl) URL.revokeObjectURL(sourceUrl)
      if (resultUrl) URL.revokeObjectURL(resultUrl)
    }
  }, [])

  async function onPick(file) {
    if (!file) return
    if (sourceUrl) URL.revokeObjectURL(sourceUrl)
    if (resultUrl) {
      URL.revokeObjectURL(resultUrl)
      setResultUrl('')
    }
    setStatus('')
    const local = URL.createObjectURL(file)
    setSourceUrl(local)
    setSourceName(file.name.replace(/\.[^.]+$/, '') || 'image')
    if (file.type === 'image/png' || file.type === 'image/webp' || file.type === 'image/jpeg') {
      setFormat(file.type)
    }

    const img = new window.Image()
    img.onload = () => {
      setOriginal({ w: img.naturalWidth, h: img.naturalHeight })
      setWidth(String(img.naturalWidth))
      setHeight(String(img.naturalHeight))
    }
    img.src = local
  }

  function onFileChange(e) {
    const file = e.target.files?.[0]
    onPick(file)
    e.target.value = ''
  }

  function onWidth(v) {
    setWidth(v)
    if (!keepRatio || !original.w || !original.h) return
    const nextW = Number.parseInt(v, 10)
    if (!Number.isFinite(nextW) || nextW <= 0) return
    const nextH = Math.round((nextW / original.w) * original.h)
    setHeight(String(nextH))
  }

  function onHeight(v) {
    setHeight(v)
    if (!keepRatio || !original.w || !original.h) return
    const nextH = Number.parseInt(v, 10)
    if (!Number.isFinite(nextH) || nextH <= 0) return
    const nextW = Math.round((nextH / original.h) * original.w)
    setWidth(String(nextW))
  }

  async function resizeNow() {
    if (!sourceUrl) return
    const w = Number.parseInt(width, 10)
    const h = Number.parseInt(height, 10)
    if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
      setStatus(t('imageResizer.invalid'))
      return
    }

    const img = new window.Image()
    img.onload = async () => {
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(img, 0, 0, w, h)

      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, format, 1),
      )
      if (!blob) return
      if (resultUrl) URL.revokeObjectURL(resultUrl)
      const next = URL.createObjectURL(blob)
      setResultUrl(next)
      setStatus(t('imageResizer.ready'))
    }
    img.src = sourceUrl
  }

  function resetAll() {
    if (sourceUrl) URL.revokeObjectURL(sourceUrl)
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    setSourceUrl('')
    setResultUrl('')
    setSourceName('image')
    setOriginal({ w: 0, h: 0 })
    setWidth('')
    setHeight('')
    setStatus('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const downloadName = useMemo(
    () => `${sourceName}-${width || 'resized'}x${height || 'resized'}.${extFor(format)}`,
    [sourceName, width, height, format],
  )

  return (
    <ToolShell title={t('imageResizer.title')} description={t('imageResizer.desc')}>
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-900">{t('imageResizer.upload')}</label>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:border-teal-200 hover:text-teal-800"
            >
              {t('imageResizer.choose')}
            </button>
            <span className="text-sm text-zinc-500">
              {sourceUrl ? `${sourceName}.${extFor(format)}` : t('imageResizer.noFile')}
            </span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="hidden"
          />
        </div>

        {sourceUrl && !resultUrl ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t('imageResizer.original')}</p>
              <img src={sourceUrl} alt="source" className="max-h-56 w-full rounded-lg object-contain bg-white" />
              <p className="mt-2 text-xs text-zinc-600">{original.w} x {original.h}px</p>
            </div>
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t('imageResizer.result')}</p>
              <p className="text-sm text-zinc-500">{t('imageResizer.noFile')}</p>
            </div>
          </div>
        ) : null}

        {resultUrl ? (
          <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t('imageResizer.result')}</p>
            <img src={resultUrl} alt="result" className="max-h-72 w-full rounded-lg object-contain bg-white" />
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={resultUrl}
                download={downloadName}
                className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500"
              >
                {t('imageResizer.download')}
              </a>
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:border-teal-200 hover:text-teal-800"
              >
                {t('imageResizer.reset')}
              </button>
            </div>
          </div>
        ) : (
          !sourceUrl ? <p className="text-sm text-zinc-500">{t('imageResizer.noFile')}</p> : null
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-900">{t('imageResizer.width')}</label>
            <input
              type="number"
              min="1"
              value={width}
              onChange={(e) => onWidth(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-900">{t('imageResizer.height')}</label>
            <input
              type="number"
              min="1"
              value={height}
              onChange={(e) => onHeight(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <label className="inline-flex items-center gap-2 text-sm text-zinc-700">
            <input
              type="checkbox"
              checked={keepRatio}
              onChange={(e) => setKeepRatio(e.target.checked)}
            />
            {t('imageResizer.keepRatio')}
          </label>

          <label className="inline-flex items-center gap-2 text-sm text-zinc-700">
            {t('imageResizer.format')}
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="rounded-lg border border-zinc-200 bg-white px-2 py-1.5 text-sm"
            >
              <option value="image/jpeg">JPEG</option>
              <option value="image/png">PNG</option>
              <option value="image/webp">WEBP</option>
            </select>
          </label>
        </div>

        {!resultUrl ? (
          <button
            type="button"
            onClick={resizeNow}
            disabled={!sourceUrl}
            className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t('imageResizer.resize')}
          </button>
        ) : null}

        {status ? <p className="text-sm font-medium text-teal-700">{status}</p> : null}
      </div>
    </ToolShell>
  )
}
