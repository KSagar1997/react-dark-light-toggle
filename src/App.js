import { ThemeProvider } from "./components/ThemeContext";
import ThemeControl from "./components/ThemeControl";
import FeatureCard from "./components/FeatureCard";
import DemoSection from "./components/DemoSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Theme Context Demo
          </h1>
          <p className="text-xl opacity-80">
            Experience seamless light and dark mode switching with React Context
            API
          </p>
        </header>

        {/* Theme Control */}
        <div className="mb-12 flex justify-center">
          <ThemeControl />
        </div>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Features & Technologies
          </h2>
          <FeatureCard />
        </section>

        {/* Interactive Demo Section */}
        <DemoSection />

        {/* Footer */}
        <footer className="text-center mt-16 py-8">
          <p className="opacity-60">
            Built with React Context API, Tailwind CSS, and Lucide React Icons
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
