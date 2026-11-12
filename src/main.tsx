import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'motion/react'
import '@fontsource-variable/inter'
import '@fontsource-variable/noto-kufi-arabic'
import '@fontsource-variable/vazirmatn'
import './index.css'
import App from './App'
import { LangProvider } from './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LangProvider>
  </StrictMode>,
)
