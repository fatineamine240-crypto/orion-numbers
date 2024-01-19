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

// fix 100vh problem on mobile screens
// when defined mobile screen size matches, set initial height:
const deviceWidth = window.matchMedia('(max-width: 1024px)');
if (deviceWidth.matches) {
  document.getElementById('root').style.minHeight = window.innerHeight + 'px';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
