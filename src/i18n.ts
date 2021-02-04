import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ELanguage } from './types/enums/language.enum';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ELanguage.EN,
    ns: 'translation',
    load: 'all',
    backend: {
      loadPath: '/team_work_practice/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });


export default i18n;