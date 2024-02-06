import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguagesValues {
  language: languages;
  changeLanguage: Function;
}
type languages = 'pt-BR' | 'en-US';
type argsChangeFunction = 1 | 2;

export const LanguageContext = createContext<LanguagesValues | null>(null);

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContextProvider: React.FC<
  LanguageContextProviderProps
> = ({ children }) => {
  let [language, setlanguage] = useState<languages>('pt-BR');

  let changeLanguage: Function = (arg: argsChangeFunction) => {
    switch (arg) {
      case 1:
        setlanguage('pt-BR');
        break;

      case 2:
        setlanguage('en-US');
        break;
    }
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
