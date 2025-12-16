import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
