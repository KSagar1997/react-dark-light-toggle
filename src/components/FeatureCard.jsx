import { Code, Palette, Heart, Star } from "lucide-react";
import { useTheme } from "./ThemeContext";

const FeatureCard = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: Code,
      title: "Context API",
      description: "Efficient state management across components",
    },
    {
      icon: Palette,
      title: "Tailwind CSS",
      description: "Beautiful, responsive styling with utilities",
    },
    {
      icon: Heart,
      title: "Smooth Transitions",
      description: "Animated theme switching experience",
    },
    {
      icon: Star,
      title: "Interactive UI",
      description: "Engaging hover effects and animations",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg backdrop-blur-sm border transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/40 border-gray-700 hover:bg-gray-700/60"
                : "bg-white/60 border-gray-200 hover:bg-white/80"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                isDark
                  ? "bg-gradient-to-br from-purple-500 to-pink-500"
                  : "bg-gradient-to-br from-blue-500 to-indigo-500"
              }`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;
