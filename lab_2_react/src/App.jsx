import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AdditionalInfo from './components/AdditionalInfo';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <AdditionalInfo />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;