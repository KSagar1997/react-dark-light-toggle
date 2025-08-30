import { createContext, useContext, useState } from "react";

// Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? "dark" : "light",
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`min-h-screen transition-all duration-500 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
