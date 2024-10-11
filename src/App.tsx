import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/CartProvider';
import { darkTheme } from './styles/themes/dark';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export function App() {
  const { isThemeLightOn } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isThemeLightOn ? defaultTheme : darkTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router/>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}