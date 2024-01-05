import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_en from './translations/en/global.json';
import global_ar from './translations/ar/global.json';

document.documentElement.lang = localStorage.getItem('lang') || 'ar';
document.documentElement.dir = localStorage.getItem('dir') || 'rtl';

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

i18next.init({
  lng: localStorage.lang || 'ar',
  debug: import.meta.env.DEV,
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
