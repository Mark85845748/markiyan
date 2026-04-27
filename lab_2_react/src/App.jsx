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
    <div className="max-w-4xl mx-auto p-4">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="md:col-span-2">
          <About />
        </div>

        <Education />
        <Experience />
        <Skills />
        <AdditionalInfo />

        <div className="md:col-span-2">
          <Contacts />
        </div>

      </div>

      <Footer />
    </div>
  );
};


export default App;