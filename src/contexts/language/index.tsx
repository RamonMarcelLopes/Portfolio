import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import * as Ln from './languages';

interface LanguagesValues {
  language: languages;
  changeLanguage: Function | any;
  interfaceLanguage: Ln.Texts;
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
  let [language, setlanguage] = useState<languages>('en-US');

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
  let [interfaceLanguage, setInterfaceLanguage] = useState(Ln.textsEN);
  useEffect(() => {
    if (language == 'pt-BR') {
      setInterfaceLanguage(Ln.textsPT);
    }
    if (language == 'en-US') {
      setInterfaceLanguage(Ln.textsEN);
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ interfaceLanguage, changeLanguage, language }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
