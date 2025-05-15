import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { MainContent } from './MainContent.jsx'

export function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
