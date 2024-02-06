import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Languages {}

export const LanguageContext = createContext<Languages | null>(null);

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContextProvider: React.FC<
  LanguageContextProviderProps
> = ({ children }) => {
  let [language, setlanguage] = useState('pt-BR');
  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext)!;
};
