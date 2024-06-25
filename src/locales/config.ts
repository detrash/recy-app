import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

// import admin from './en/admin.json';
import calculatorEn from './en/calculator.json';
import calculatorEs from './es/calculator.json';
import calculatorPt from './pt/calculator.json';
// import common from './en/common.json';
// import dashboard from './en/dashboard.json';
// import home from './en/home.json';
// import onboarding from './en/onboarding.json';
// import submit from './en/submit.json';

i18next.use(initReactI18next).init({
  // if you're using a language detector, do not define the lng option
  debug: true,
  lng: 'en',
  resources: {
    en: {
      // admin,
      calculator: calculatorEn,
      // common,
      // dashboard,
      // home,
      // onboarding,
      // profile,
      // submit,
    },
    es: {
      calculator: calculatorEs,
    },
    pt: {
      calculator: calculatorPt,
    },
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});
