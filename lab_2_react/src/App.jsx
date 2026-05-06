import { useEffect, useState } from "react";

import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AdditionalInfo from './components/AdditionalInfo';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

import './App.css';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 7 && hour < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`min-h-screen transition ${
        theme === "dark"
          ? "bg-[#11111a]"
          : "bg-[#f5f5f7]"
      }`}
    >
      <div className="max-w-4xl mx-auto p-4">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <About theme={theme} />
          </div>

          <Education theme={theme} />
          <Experience theme={theme} />
          <Skills theme={theme} />
          <AdditionalInfo theme={theme} />

          <div className="md:col-span-2">
            <Reviews theme={theme} />
            <Contacts theme={theme} />
          </div>
        </div>

        <Footer theme={theme} />

        <ContactForm />
      </div>
    </div>
  );
}

export default App;