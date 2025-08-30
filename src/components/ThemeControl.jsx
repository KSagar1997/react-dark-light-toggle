import { Palette, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const ThemeControl = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-2xl shadow-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl ${
        isDark
          ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
          : "bg-white/70 border-gray-200 hover:bg-white/90"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Palette className="w-6 h-6" />
          Theme Control
        </h2>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isDark
              ? "bg-purple-600 text-purple-100"
              : "bg-blue-600 text-blue-100"
          }`}
        >
          {isDark ? "Dark Mode" : "Light Mode"}
        </div>
      </div>

      <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        Switch between light and dark themes with a smooth animated transition.
      </p>

      <button
        onClick={toggleTheme}
        className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          isDark
            ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400 shadow-lg hover:shadow-yellow-500/25"
            : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-indigo-500/25"
        }`}
      >
        <div className="relative">
          {isDark ? (
            <Sun className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
          ) : (
            <Moon className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-12" />
          )}
        </div>
        Switch to {isDark ? "Light" : "Dark"} Mode
        <div
          className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            isDark
              ? "bg-gradient-to-r from-yellow-300/20 to-orange-400/20"
              : "bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeControl;
