import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WaraqaPage from './components/WaraqaPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/',
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    window.history.pushState({}, '', '/#projects');
    setCurrentPath('/');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  if (currentPath === '/waraqa') {
    return <WaraqaPage onBack={handleBackToPortfolio} />;
  }

  return (
    <div className="min-h-screen bg-white font-body text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onNavigate={navigateTo} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
