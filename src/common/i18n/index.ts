import i18next, { InitOptions } from 'i18next';
import { initReactI18next } from "react-i18next";

import commonEn from "./locales/en/common.json";
import commonJa from "./locales/ja/common.json";

const queryParams = new URLSearchParams(window.location.search);
const language = queryParams.get("language") || "en";

const i18nOptions: InitOptions = {
  resources: {
    en: {
      common: commonEn,
    },
    ja: {
      common: commonJa,
    },
  },
  defaultNS: 'common',
  lng: language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
};

i18next.use(initReactI18next).init(i18nOptions);

export default i18next;
