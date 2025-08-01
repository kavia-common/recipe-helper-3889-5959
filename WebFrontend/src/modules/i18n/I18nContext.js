import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    "app.title": "Recipe Helper",
    "navbar.home": "Home",
    "navbar.recipes": "Recipes",
    "navbar.pantry": "Pantry",
    "navbar.collections": "Collections",
    "navbar.profile": "Profile",
    "navbar.settings": "Settings",
    "navbar.logout": "Logout",
    "navbar.login": "Login",
    "navbar.register": "Register",
    // ...more, stubbed here
  },
  es: {
    "app.title": "Asistente de Recetas",
    // ...more
  }
  // Additional languages would be added as needed
};

const I18nContext = createContext({ t: (key) => key, lang: 'en', setLang: () => {} });

// PUBLIC_INTERFACE
export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en');

  // PUBLIC_INTERFACE
  const t = (key) => {
    return (translations[lang] && translations[lang][key]) || translations['en'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useI18n() {
  return useContext(I18nContext);
}
