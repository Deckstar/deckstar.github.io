import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';
import es from './locales/es.json';
import et from './locales/et.json';
import fr from './locales/fr.json';
import hu from './locales/hu.json';
import ru from './locales/ru.json';
import se from './locales/se.json';

const options = {
  interpolation: {
    escapeValue: false,
  },

  debug: true,

  resources: {
    en: {
      common: en.en,
    },
    de: {
      common: de.de,
    },
    es: {
      common: es.es,
    },
    et: {
      common: et.et,
    },
    fr: {
      common: fr.fr,
    },
    hu: {
      common: hu.hu,
    },
    ru: {
      common: ru.ru,
    },
    se: {
      common: se.se,
    },
  },

  fallbackLng: 'en',

  ns: ['common'],

  defaultNS: 'common',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
  },
};

i18n.use(LanguageDetector).init(options);

export default i18n;

export { default as withTrans } from './components/withTrans';
export { default as langMap } from './utils/langMap';
