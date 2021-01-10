import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      "CONCERN_01": "legalmente me lo exigen",
      "CONCERN_02": "Quiero proteger mis ingresos en caso de algún percance",
      "CONCERN_03": "No quiero enfermarme o tener un accidente porque no me permitiría trabajar",
      "CONCERN_04": "No quiero perder mi comercio por algún evento desafortunado",
      "CONCERN_05": "Quiero proteger mis equipos. Comprarlos fue un gran esfuerzo",
      "CONCERN_06": "No quiero que me demande un cliente por algún imprevisto y que signifique un gasto más ",
    }
  },
  en: {
    translation: {
      "CONCERN_01": "legally required of me",
      "CONCERN_02": "I want to protect my income in case of any mishap",
      "CONCERN_03": "I don't want to get sick or have an accident because it wouldn't allow me to work",
      "CONCERN_04": "I don't want to lose my trade due to some unfortunate event",
      "CONCERN_05": "I want to protect my equipment. Buying them was a great effort",
      "CONCERN_06": "I don't want a client to sue me for something unforeseen and that means one more expense",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;