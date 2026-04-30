import { useEffect, useRef } from 'react'

const ADSENSE_CLIENT = 'ca-pub-3773141813813629'
const HOME_SLOT = import.meta.env.VITE_ADSENSE_SLOT_HOME

/**
 * Renders a manual ad unit only when a slot is configured.
 * This prevents automatic ads from appearing on low-content screens.
 */
export default function AdSenseBanner() {
  const adRef = useRef(null)

  useEffect(() => {
    if (!HOME_SLOT) return

    const existing = document.querySelector('script[data-adsense-loader="manual"]')
    if (!existing) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
      script.crossOrigin = 'anonymous'
      script.setAttribute('data-adsense-loader', 'manual')
      document.head.appendChild(script)
    }

    if (adRef.current?.dataset.loaded === 'true') return

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      if (adRef.current) adRef.current.dataset.loaded = 'true'
    } catch {
      // Ignore errors from ad blockers or race conditions.
    }
  }, [])

  if (!HOME_SLOT) return null

  return (
    <section className="mx-auto mt-8 max-w-5xl px-4" aria-label="Reklam alani">
      <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={HOME_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </section>
  )
}
