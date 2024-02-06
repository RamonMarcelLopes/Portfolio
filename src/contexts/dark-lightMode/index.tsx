import React, { ReactNode, createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';
type arg = 1 | 2;
interface ThemeContextType {
  theme: Theme;
  toggleTheme: Function;
}

interface LightDarkContextProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: React.FC<LightDarkContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('dark');

  let toggleTheme: Function = (arg: arg) => {
    switch (arg) {
      case 1:
        setTheme('dark');
        break;
      case 2:
        setTheme('light');
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
