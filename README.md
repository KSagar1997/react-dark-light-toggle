# Theme Context Component - React

A React + Tailwind CSS demo project showcasing how to build a Dark/Light theme toggle using React Context API.
It also includes interactive UI components with smooth animations powered by Lucide Icons and Tailwind utilities.



## ✨ Features

- **🌓 Dark & Light Mode Toggle (Context API + Tailwind)**

- **🎨 Reusable Feature Cards with animations**

- **⚡ Interactive Counter Demo with transitions**

- **📦 Component-Based Structure for scalability**

- **🖌️ Lucide React Icons integration**




## 🚀 Quick Start

### Installation

```bash
npm install framer-motion react tailwindcss postcss autoprefixer
```

### Basic Usage

```jsx
import { ThemeProvider } from "./components/ThemeContext";
import ThemeControl from "./components/ThemeControl";
import FeatureCard from "./components/FeatureCard";
import DemoSection from "./components/DemoSection";


function App() {
  return <ThemeControl />;
}
```

## 📦 Dependencies

- `react`: ^19.0.0 - React framework
- `tailwindcss`: 4.1.12 - Utility-first CSS framework

## 🎨 Customization

### Modify Content

Color Scheme - Update the tailwind setup and config



## 🧩 Component Breakdown

### Main Components

1. **ThemeContext.js** - Handles global theme state (light / dark) using React Context API.
2. **ThemeControl** - Interactive toggle button with Sun/Moon icons.
3. **FeatureCard** - Responsive feature grid with Lucide icons & hover animations. 
4. **DemoSection** - Counter demo that shows state + theme management integration.

### Key Hooks Used

- `useState`  
- `useContext`  
- `Custom Hook → useTheme`  


## 📱 Responsive Design

All animations are responsive and work on:
- Desktop 
- Tablet (768px - 1023px)
- Mobile (320px - 767px)


## 📄 License

MIT License - Feel free to use in personal and commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. update and install tailwind, autoprefixer, lucide-react, and postcss 
4. Make your changes
5. Submit a pull request

## 📞 Support

If you have questions or need help implementing:

- Open an issue on GitHub
- Please check Context API documentation
- Review Tailwind CSS documentation

## 🔗 Links

- [Codesandbox.io Link](https://codesandbox.io/p/sandbox/react-dark-light-toggle-qxx62t)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

Built with ❤️ by Krishna S (Waller)