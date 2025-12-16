import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Service pages
import { Acoustics } from './pages/Services/acoustics.tsx';
import { AudioVisual } from './pages/Services/audiovisual.tsx';
import { ELV } from './pages/Services/elv.tsx';
import { Security } from './pages/Services/security.tsx';
import { InfoTech } from './pages/Services/infotech.tsx';
import { IOT } from './pages/Services/iot.tsx';
import { BMSEPMS } from './pages/Services/bmsepms.tsx';
import { GRMS } from './pages/Services/grms.tsx';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/services/acoustics" element={<Acoustics />} />
        <Route path="/services/audio-visual" element={<AudioVisual />} />
        <Route path="/services/elv" element={<ELV />} />
        <Route path="/services/security" element={<Security />} />
        <Route path="/services/infotech" element={<InfoTech />} />
        <Route path="/services/iot" element={<IOT />} />
        <Route path="/services/bmsepms" element={<BMSEPMS />} />
        <Route path="/services/grms" element={<GRMS />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
