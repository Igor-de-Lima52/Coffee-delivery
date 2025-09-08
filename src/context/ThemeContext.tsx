import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

type ThemeContextType = {
  isThemeLightOn: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const themeStateAsJSON = localStorage.getItem("@coffee-delivery:theme-state-1.0.0")
  const stateStored = JSON.parse(themeStateAsJSON!)
  
  const [isThemeLightOn, setIsThemeLightOn] = useState<boolean>(stateStored);
  
  function toggleTheme(){
    setIsThemeLightOn(state => !state);
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(isThemeLightOn);

    localStorage.setItem("@coffee-delivery:theme-state-1.0.0", stateJSON);
  }, [isThemeLightOn])

  useEffect(() => {
    

    
  }, [])

  return(
    <ThemeContext.Provider value={{ isThemeLightOn, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}