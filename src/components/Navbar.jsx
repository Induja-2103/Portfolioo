import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

function Navbar({ theme, toggleTheme, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1100px',
        zIndex: 100,
        padding: '0.75rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '9999px',
        border: '1px solid var(--glass-border)',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: 'var(--shadow)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Brand logo */}
      <div 
        onClick={() => handleNavClick('home')}
        style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 900, 
          fontSize: '1.25rem', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '-0.03em'
        }}
      >
        INDUJA<span className="gradient-text" style={{ marginLeft: '0.15rem' }}>S.</span>
      </div>

      {/* Desktop Navigation Links */}
      <div style={{ display: 'none' }} className="desktop-menu-container">
        {/* We will handle display using custom styles or classes in index.css */}
      </div>
      
      {/* Inline styles for responsiveness via simple JS matches or classes */}
      <ul 
        className="nav-links-desktop"
        style={{
          display: 'flex',
          gap: '1.5rem',
          listStyle: 'none',
          alignItems: 'center'
        }}
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '0.25rem 0'
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Action Buttons: Theme Toggle & Mobile Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={toggleTheme}
          className="btn glass"
          style={{
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: 'transparent',
            border: '1px solid var(--border-color)'
          }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun size={18} style={{ color: 'var(--primary)' }} />
          ) : (
            <Moon size={18} style={{ color: 'var(--accent)' }} />
          )}
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="mobile-toggle-btn"
          style={{
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: 'transparent',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)'
          }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '4.5rem',
            left: '5%',
            width: '90%',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--shadow)',
            borderRadius: '20px',
            padding: '1.5rem',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'slideDown 0.3s ease'
          }}
          className="mobile-drawer"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '0.5rem 0',
                textAlign: 'left',
                width: '100%'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
