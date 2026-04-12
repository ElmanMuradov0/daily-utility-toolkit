/**
 * Side count selector + N stacked single-line inputs (label always above each field).
 */
export default function SlotInputs({
  min = 2,
  max = 20,
  count,
  onCountChange,
  countLabel,
  sectionTitle,
  values,
  onChange,
  placeholder = '',
  accentColors,
  /** @type {(index: number) => string} */
  getRowLabel,
}) {
  const options = []
  for (let n = min; n <= max; n += 1) options.push(n)

  const labelFor = (i) =>
    getRowLabel ? getRowLabel(i) : `${sectionTitle} — ${i + 1}`

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      <aside className="shrink-0 lg:w-44">
        <p className="text-sm font-medium text-zinc-900">{countLabel}</p>
        <select
          value={count}
          onChange={(e) => onCountChange(Number(e.target.value))}
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 shadow-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
        >
          {options.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </aside>

      <div className="min-w-0 flex-1 space-y-3">
        <p className="text-sm font-medium text-zinc-900">{sectionTitle}</p>
        <div className="space-y-3">
          {values.map((val, i) => {
            const accent = accentColors?.[i % (accentColors?.length || 1)]
            return (
              <div key={i}>
                <label
                  htmlFor={`slot-${i}`}
                  className="mb-1.5 block text-xs font-medium text-zinc-500"
                >
                  {labelFor(i)}
                </label>
                <input
                  id={`slot-${i}`}
                  type="text"
                  value={val}
                  onChange={(e) => onChange(i, e.target.value)}
                  placeholder={placeholder}
                  className={`w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-3 pr-4 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100 ${
                    accent ? 'border-l-[4px]' : ''
                  }`}
                  style={accent ? { borderLeftColor: accent } : undefined}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
