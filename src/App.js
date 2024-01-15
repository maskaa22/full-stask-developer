
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Touch from './components/Touch';

function App() {
  return (
    <div >
      <Menu/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Education/>
      <Contact/>
      <Touch/>
    </div>
  );
}

export default App;
