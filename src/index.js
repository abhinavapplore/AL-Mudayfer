import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: "en",
    whitelist: ["en", "ar"],
    detection: {
      order: ["localStorage", "htmlTag", "path", "cookie", "subdomain"],
      caches: ["localStorage"],
      checkWhitelist: true,
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/lang/{{lng}}.json",
    },
  });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
