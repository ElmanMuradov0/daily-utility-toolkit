import { useLanguage } from '../i18n/useLanguage'
import { TOOLS } from '../data/tools'
import ToolCard from './ToolCard'

/**
 * Tool cards in a responsive SaaS-style grid.
 */
export default function ToolGrid() {
  const { t } = useLanguage()

  return (
    <section
      aria-label={t('home.toolsAria')}
      className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 pb-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5"
    >
      {TOOLS.map((tool, index) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          index={index}
          title={t(`tools.${tool.localeId}.title`)}
          description={t(`tools.${tool.localeId}.desc`)}
        />
      ))}
    </section>
  )
}
