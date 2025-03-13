import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/dist';

import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';

import PortofolioGame from './components/PortofolioGame';
import PortofolioWeb from './components/PortofolioWeb';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Portofolio" element={<Portofolio />} />
            <Route path="/Contact" element={<Contact />} />

            {/* <Route path="/Portofolio" element={<Portofolio />} /> */}
            <Route path="/PortofolioGame" element={<PortofolioGame />} />
            <Route path="/PortofolioWeb" element={<PortofolioWeb />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
