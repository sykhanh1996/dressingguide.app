import { useState, createContext } from 'react';
import { RouteProps } from 'react-router-dom';

type ThemeContextType = 'light' | 'dark';

const ThemeContext = createContext('light');

function ThemeProvide({ children }: RouteProps) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvide };
