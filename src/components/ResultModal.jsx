import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Centered overlay for results (raffle, wheel, dice, Pomodoro phase, etc.).
 */
export default function ResultModal({
  open,
  onClose,
  title,
  children,
  closeLabel = 'Kapat',
}) {
  if (typeof document === 'undefined' || !open) return null

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="result-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/45 p-4 backdrop-blur-[2px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-md rounded-2xl border border-zinc-100 bg-white p-6 shadow-2xl"
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
          aria-label={closeLabel}
        >
          <X className="h-5 w-5" />
        </button>
        <h2
          id="result-modal-title"
          className="pr-10 text-lg font-semibold tracking-tight text-zinc-900"
        >
          {title}
        </h2>
        <div className="mt-4 text-base leading-relaxed text-zinc-700">{children}</div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}
