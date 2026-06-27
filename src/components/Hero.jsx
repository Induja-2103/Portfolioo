import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowRight, Download, Terminal, Code2 } from 'lucide-react';

const Github = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Full Stack Developer',
    'AI/ML Engineer',
    'Computer Science Student',
    'Java & React Specialist',
    'Open Source Enthusiast'
  ];

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before starting deletion
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    if (!timer) {
      timer = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrintResume = () => {
    // Generate a beautiful print view or alert
    window.print();
  };

  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '6rem',
        zIndex: 2
      }}
    >
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
        
        {/* Left column: Text details */}
        <div>
          <span 
            style={{
              display: 'inline-flex',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              background: 'var(--primary-glow)',
              color: 'var(--primary)',
              border: '1px solid rgba(var(--primary-rgb), 0.2)',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              boxShadow: 'var(--shadow-inset)'
            }}
          >
            Welcome to my space
          </span>
          
          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: 900, 
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}
          >
            Hi, I'm <span className="gradient-text">Induja S</span>
          </h1>

          <div style={{ height: '3.5rem', marginBottom: '1.5rem' }}>
            <h2 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)'
              }}
            >
              I am a <span style={{ color: 'var(--primary)', borderRight: '3px solid var(--primary)', paddingRight: '4px', animation: 'blink 0.75s step-end infinite' }}>{text}</span>
            </h2>
          </div>

          <p 
            style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)', 
              maxWidth: '540px', 
              marginBottom: '2.5rem',
              lineHeight: 1.7
            }}
          >
            Full Stack & AI/ML Engineer specializing in building intelligent web platforms, combining React frontends, FastAPI/Node.js backends, and customized machine learning architectures.
          </p>

          {/* Social Icons Bar */}
          <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <a href="https://github.com/Induja-2103" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/induja-s-972bab346" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="mailto:indujas2103@gmail.com" className="hero-social-link" title="Email">
              <Mail size={22} />
            </a>
            <a href="tel:+918248807407" className="hero-social-link" title="Phone">
              <Phone size={22} />
            </a>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={handleScrollToProjects} className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </button>
            <button onClick={handlePrintResume} className="btn btn-secondary">
              Resume / Print <Download size={18} />
            </button>
          </div>
        </div>

        {/* Right column: Interactive Visual Card (IDE Code Panel Mock) */}
        <div className="animated-float right-column-hero">
          <div 
            className="glass shine-card" 
            style={{ 
              width: '100%', 
              maxWidth: '440px', 
              aspectRatio: '4/3', 
              overflow: 'hidden', 
              borderRadius: '16px',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--glass-border)'
            }}
          >
            {/* Window bar */}
            <div 
              style={{ 
                background: 'rgba(0,0,0,0.3)', 
                padding: '0.75rem 1rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                <Terminal size={12} /> index.js
              </div>
              <div style={{ width: '30px' }}></div>
            </div>

            {/* Code Body */}
            <div 
              style={{ 
                padding: '1.25rem', 
                fontFamily: 'Consolas, Monaco, monospace', 
                fontSize: '0.85rem', 
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}
            >
              <div><span style={{ color: '#ec4899' }}>const</span> developer = &#123;</div>
              <div style={{ paddingLeft: '1.5rem' }}>name: <span style={{ color: 'var(--primary)' }}>'Induja S'</span>,</div>
              <div style={{ paddingLeft: '1.5rem' }}>role: <span style={{ color: 'var(--primary)' }}>'Full Stack & AI/ML Engineer'</span>,</div>
              <div style={{ paddingLeft: '1.5rem' }}>skills: [</div>
              <div style={{ paddingLeft: '3rem' }}>
                <span style={{ color: 'var(--accent)' }}>'React'</span>, <span style={{ color: 'var(--accent)' }}>'Node.js'</span>,
              </div>
              <div style={{ paddingLeft: '3rem' }}>
                <span style={{ color: 'var(--accent)' }}>'Java'</span>, <span style={{ color: 'var(--accent)' }}>'Spring Boot'</span>
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>],</div>
              <div style={{ paddingLeft: '1.5rem' }}>database: [<span style={{ color: 'var(--primary)' }}>'MongoDB'</span>, <span style={{ color: 'var(--primary)' }}>'PostgreSQL'</span>],</div>
              <div style={{ paddingLeft: '1.5rem' }}>passionate: <span style={{ color: '#f59e0b' }}>true</span></div>
              <div>&#125;;</div>
              <br />
              <div style={{ color: 'var(--text-muted)' }}>// Outputting connection...</div>
              <div>console.log(developer.name + <span style={{ color: 'var(--primary)' }}>" is ready!"</span>);</div>
            </div>
          </div>
        </div>

      </div>

      {/* Styled Inline Classes */}
      <style>{`
        .hero-social-link {
          display: flex;
          align-items: center;
          justifyContent: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.02);
        }
        .hero-social-link:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px var(--primary-glow);
          background: var(--primary-glow);
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--primary); }
        }
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem;
          }
          .hero-social-link {
            margin: 0 auto;
          }
          div[style*="display: flex; gap: 1.2rem;"] {
            justify-content: center;
          }
          div[style*="display: flex; gap: 1rem;"] {
            justify-content: center;
          }
          .right-column-hero {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
