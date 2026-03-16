import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext.jsx'
import BISK8Landing from './App.jsx'

const CGUPage = React.lazy(() => import('./CGUPage.jsx'))
const PrivacyPage = React.lazy(() => import('./PrivacyPage.jsx'))
const ContactPage = React.lazy(() => import('./ContactPage.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<div style={{ background: "#000", minHeight: "100vh" }} />}>
          <Routes>
            <Route path="/" element={<BISK8Landing />} />
            <Route path="/terms" element={<CGUPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
)
