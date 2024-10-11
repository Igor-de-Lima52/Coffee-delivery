import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

type ThemeContextType = {
  isThemeLightOn: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [isThemeLightOn, setIsThemeLightOn] = useState(false);
  
  function toggleTheme(){
    setIsThemeLightOn(state => !state);
  }

  return(
    <ThemeContext.Provider value={{ isThemeLightOn, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}