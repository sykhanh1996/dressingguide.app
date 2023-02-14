import { useState, createContext } from 'react';
import { RouteProps } from 'react-router-dom';

type ThemeContextType = {};

const ThemeContext = createContext<ThemeContextType>('');

function ThemeProvide({ children }: RouteProps) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const value = {
        theme,
        toggleTheme,
    };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvide };
