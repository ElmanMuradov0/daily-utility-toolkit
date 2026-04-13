import {
  Activity,
  ChefHat,
  Dices,
  FileText,
  Hourglass,
  Orbit,
  Palette,
  Ruler,
  Shuffle,
  Timer,
} from 'lucide-react'

/**
 * Toolkit entries: route, icon, `localeId` → messages.tools.*
 */
export const TOOLS = [
  {
    id: 'smart-raffler',
    localeId: 'smartRaffler',
    icon: Shuffle,
    path: '/tool/smart-raffler',
  },
  {
    id: 'decision-wheel',
    localeId: 'decisionWheel',
    icon: Orbit,
    path: '/tool/decision-wheel',
  },
  {
    id: 'food-what',
    localeId: 'foodWhat',
    icon: ChefHat,
    path: '/tool/food-what',
  },
  {
    id: 'dice',
    localeId: 'dice',
    icon: Dices,
    path: '/tool/dice',
  },
  {
    id: 'countdown',
    localeId: 'countdown',
    icon: Hourglass,
    path: '/tool/countdown',
  },
  {
    id: 'unit-converter',
    localeId: 'unitConverter',
    icon: Ruler,
    path: '/tool/unit-converter',
  },
  {
    id: 'pomodoro',
    localeId: 'pomodoro',
    icon: Timer,
    path: '/tool/pomodoro',
    icon: Timer,
  },
  {
    id: 'bmi',
    localeId: 'bmi',
    icon: Activity,
    path: '/tool/bmi',
  },
  {
    id: 'color-picker',
    localeId: 'colorPicker',
    icon: Palette,
    path: '/tool/color-picker',
  },
  {
    id: 'text-counter',
    localeId: 'textCounter',
    icon: FileText,
    path: '/tool/text-counter',
  },
]
