import { useState } from "react";
import { useTheme } from "./ThemeContext";

const DemoSection = () => {
  const { isDark } = useTheme();
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncrement = () => {
    setIsAnimating(true);
    setCount(count + 1);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <div
      className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm border ${
        isDark
          ? "bg-gray-800/30 border-gray-700"
          : "bg-white/50 border-gray-200"
      }`}
    >
      <h3 className="text-2xl font-bold mb-6 text-center">Interactive Demo</h3>

      <div className="flex flex-col items-center space-y-6">
        <div
          className={`text-6xl font-bold transition-all duration-200 ${
            isAnimating ? "scale-110" : "scale-100"
          } ${isDark ? "text-purple-400" : "text-blue-600"}`}
        >
          {count}
        </div>

        <button
          onClick={handleIncrement}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isDark
              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-purple-500/25"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg hover:shadow-blue-500/25"
          }`}
        >
          Click Me! (+1)
        </button>

        <div
          className={`text-center p-4 rounded-lg ${
            isDark ? "bg-gray-700/50" : "bg-gray-100/50"
          }`}
        >
          <p className="text-sm opacity-75">
            This counter demonstrates that the theme context works perfectly
            with other state management!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
