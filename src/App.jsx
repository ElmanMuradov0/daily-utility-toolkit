import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLanguage } from './i18n/useLanguage'
import Home from './pages/Home'
import Footer from './components/Footer' // Footer bileşenini import et

const SmartRaffler = lazy(() => import('./pages/tools/SmartRaffler'))
const DecisionWheel = lazy(() => import('./pages/tools/DecisionWheel'))
const FoodWhat = lazy(() => import('./pages/tools/FoodWhat'))
const DiceRoller = lazy(() => import('./pages/tools/DiceRoller'))
const CountdownTool = lazy(() => import('./pages/tools/CountdownTool'))
const UnitConverter = lazy(() => import('./pages/tools/UnitConverter'))
const Pomodoro = lazy(() => import('./pages/tools/Pomodoro'))
const BmiCalculator = lazy(() => import('./pages/tools/BmiCalculator'))
const ColorPickerTool = lazy(() => import('./pages/tools/ColorPickerTool'))
const TextCounter = lazy(() => import('./pages/tools/TextCounter'))

function RouteFallback() {
  const { t } = useLanguage()
  return (
    <div className="flex min-h-dvh items-center justify-center bg-zinc-50 text-sm text-zinc-500">
      {t('common.loading')}
    </div>
  )
}

/**
 * Main app shell: landing grid + isolated routes per utility.
 */
export default function App() {
  return (
    <> {/* Fragment kullanarak birden fazla kök elemanı döndürüyoruz */}
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool/smart-raffler" element={<SmartRaffler />} />
          <Route path="/tool/decision-wheel" element={<DecisionWheel />} />
          <Route path="/tool/food-what" element={<FoodWhat />} />
          <Route path="/tool/dice" element={<DiceRoller />} />
          <Route path="/tool/countdown" element={<CountdownTool />} />
          <Route path="/tool/unit-converter" element={<UnitConverter />} />
          <Route path="/tool/pomodoro" element={<Pomodoro />} />
          <Route path="/tool/bmi" element={<BmiCalculator />} />
          <Route path="/tool/color-picker" element={<ColorPickerTool />} />
          <Route path="/tool/text-counter" element={<TextCounter />} />
        </Routes>
      </Suspense>
      <Footer /> {/* Footer bileşenini buraya ekliyoruz */}
    </>
  )
}
