import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'

/**
 * One dashboard-style card: icon, copy, and CTA to the tool route.
 */
export default function ToolCard({ tool, index, title, description }) {
  const Icon = tool.icon
  const { t } = useLanguage()

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.06 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col rounded-xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100 transition-transform duration-300 group-hover:scale-105 group-hover:ring-teal-200">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
      </div>

      <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-zinc-600">
        {description}
      </p>

      <div className="mt-6">
        <Link
          to={tool.path}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 active:scale-[0.98]"
        >
          {t('home.launchTool')}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  )
}
