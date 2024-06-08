import React, { createContext, useContext, useState } from 'react';
import { Appearance, useColorScheme as _useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemColorScheme = _useColorScheme();
    const [colorScheme, setColorScheme] = useState(systemColorScheme);

    const toggleTheme = () => {
        setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ colorScheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);