import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// EN
import adminEn from './en/admin.json';
import commonEn from './en/common.json';
import dashboardEN from './en/dashboard.json';
import homeEn from './en/home.json';
import onboardingEn from './en/onboarding.json';
import profileEn from './en/profile.json';
import submitEn from './en/submit.json';
// // ES
import adminEs from './es/admin.json';
import commonEs from './es/common.json';
import dashboardEs from './es/dashboard.json';
import homeEs from './es/home.json';
import onboardingEs from './es/onboarding.json';
import profileEs from './es/profile.json';
import submitEs from './es/submit.json';
import adminPt from './pt/admin.json';
// // PT
import commonPt from './pt/common.json';
import dashboardPt from './pt/dashboard.json';
import homePt from './pt/home.json';
import onboardingPt from './pt/onboarding.json';
import profilePt from './pt/profile.json';
import submitPt from './pt/submit.json';

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        admin: adminEn,
        common: commonEn,
        dashboard: dashboardEN,
        home: homeEn,
        onboarding: onboardingEn,
        profile: profileEn,
        submit: submitEn,
      },
      es: {
        admin: adminEs,
        common: commonEs,
        dashboard: dashboardEs,
        home: homeEs,
        onboarding: onboardingEs,
        profile: profileEs,
        submit: submitEs,
      },
      pt: {
        admin: adminPt,
        common: commonPt,
        dashboard: dashboardPt,
        home: homePt,
        onboarding: onboardingPt,
        profile: profilePt,
        submit: submitPt,
      },
    },
  });
