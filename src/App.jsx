import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const glowRef = useRef(null);

  // Toggle Theme
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  // Initialize Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Performance-friendly Mouse Tracker for Radial Glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY + window.scrollY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Active Section Tracker and Scroll-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      // Toggle Scroll to Top Button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check Active Section
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Dynamic Radial Glow Background */}
      <div className="radial-bg">
        <div ref={glowRef} className="radial-glow" style={{ position: 'absolute', transform: 'translate(-50%, -50%)', left: '-1000px', top: '-1000px' }}></div>
      </div>

      {/* Floating Header Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      {/* Main Content Layout */}
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <ExperienceTimeline />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Glassmorphic Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2.5rem 0', background: 'var(--bg-secondary)', zIndex: 1, position: 'relative' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              INDUJA <span className="gradient-text">S</span>
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Full Stack Developer, AI/ML Engineer & CS Student</p>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Induja S. All Rights Reserved. Built with React.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Arrow Button */}
      <button 
        onClick={scrollToTop} 
        className={`btn glass`}
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          zIndex: 99, 
          padding: '0.8rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          border: '1px solid rgba(var(--primary-rgb), 0.3)',
          cursor: 'pointer'
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} style={{ color: 'var(--primary)' }} />
      </button>
    </div>
  );
}

export default App;
