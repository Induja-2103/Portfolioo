import React, { useState } from 'react';
import { Search, ExternalLink, Code, Sparkles, ShoppingBag, Coffee, ArrowRight, X } from 'lucide-react';

const Github = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null); // stores project object when modal is open

  const projectsData = [
    {
      id: 1,
      title: 'StudentBuddy – AI Mentorship Platform',
      shortDesc: 'AI-driven full-stack mentorship and guidance platform with real-time roles and analytics.',
      icon: <Sparkles size={36} style={{ color: '#0ea5e9' }} />,
      gradient: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
      category: ['Full Stack', 'React/Node.js', 'AI'],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Socket.io', 'OpenAI API'],
      features: [
        'Built a complete role-based system separating students, mentors, and administrators.',
        'Integrated real-time chat functionality enabling direct student-mentor communication.',
        'Engineered an AI-powered guidance helper module utilizing customized endpoints for study plans.',
        'Designed scalable REST APIs for test generation, score analytics, and account management.'
      ],
      impact: 'Allows academic departments to easily scale student tutoring and streamline feedback collection.'
    },
    {
      id: 2,
      title: 'Feed The Need – Food Waste Manager',
      shortDesc: 'A dynamic food recovery and customization app with dynamic pricing and menus.',
      icon: <ShoppingBag size={36} style={{ color: '#10b981' }} />,
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      category: ['Full Stack', 'React/Node.js', 'Databases'],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'State Management'],
      features: [
        'Developed full user registration and authentication for restaurants and local NGO partners.',
        'Implemented customizable menu items and live cart updates to coordinate excess food redistribution.',
        'Created a dynamic pricing engine and state logic enabling custom packaging selections.',
        'Designed lightweight backend APIs for listing, modifying, and claiming available food batches.'
      ],
      impact: 'Successfully streamlines surplus distribution, helping reduce local food waste.'
    },
    {
      id: 3,
      title: 'Food Buds – Food Customization App',
      shortDesc: 'Interactive order workflow application with real-time cart pricing and billing systems.',
      icon: <ShoppingBag size={36} style={{ color: '#a855f7' }} />,
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      category: ['React/Node.js', 'Full Stack'],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'State Context', 'Session Handling'],
      features: [
        'Developed an interactive cart drawer with instant pricing calculators for side item additions.',
        'Structured Express.js session handling to keep user orders secure during checkout.',
        'Optimized client-side rendering speed for menu layouts, preventing lag on mobile devices.',
        'Integrated a responsive invoice generator that formats orders instantly upon submission.'
      ],
      impact: 'Improves digital dining experiences through optimized item customizer controls.'
    },
    {
      id: 4,
      title: 'Kapiyum Kadhalum – Café Ordering Web App',
      shortDesc: 'Full-stack cafe ordering platform built using Spring Boot backend and PostgreSQL storage.',
      icon: <Coffee size={36} style={{ color: '#f59e0b' }} />,
      gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
      category: ['Full Stack', 'Java & Databases'],
      tech: ['React.js', 'Spring Boot', 'Java', 'PostgreSQL', 'RESTful APIs', 'JDBC Connection'],
      features: [
        'Designed a structured relational database in PostgreSQL for managing orders and menu catalogs.',
        'Built powerful Spring Boot controllers exposing secure endpoints for order lifecycle management.',
        'Ensured highly efficient query routines to fetch menu updates and user purchase histories.',
        'Created a beautiful interface that simplifies digital bill checkouts and receipt exports.'
      ],
      impact: 'Brings enterprise-ready backend safety to local dining through Spring Boot validation structures.'
    }
  ];

  const filters = ['All', 'Full Stack', 'React/Node.js', 'Java & Databases'];

  // Match search and category filter
  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = 
      selectedFilter === 'All' || 
      project.category.some(cat => cat.toLowerCase().includes(selectedFilter.split(' ')[0].toLowerCase()));
    
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        {/* Filters and Search Bar Container */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Tag Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                style={{
                  border: 'none',
                  background: selectedFilter === filter ? 'var(--primary)' : 'var(--bg-primary)',
                  color: selectedFilter === filter ? '#fff' : 'var(--text-secondary)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: selectedFilter === filter ? 'var(--primary)' : 'var(--border-color)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  transition: 'all 0.3s ease'
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div 
            style={{ 
              position: 'relative', 
              maxWidth: '300px', 
              width: '100%' 
            }}
          >
            <Search 
              size={18} 
              style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: 'var(--text-muted)' 
              }} 
            />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.5rem',
                borderRadius: '9999px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>
        </div>

        {/* Project Grid Layout */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass shine-card"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}
              onClick={() => setActiveModal(project)}
            >
              {/* Project Preview Mock (visual gradient block with floating icon) */}
              <div 
                style={{ 
                  height: '160px', 
                  background: project.gradient, 
                  position: 'relative', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '1rem'
                }}
              >
                <div 
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    padding: '1rem', 
                    borderRadius: '20px', 
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {project.icon}
                </div>
              </div>

              {/* Card Details */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flexGrow: 1, lineHeight: 1.5 }}>
                  {project.shortDesc}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="badge badge-accent">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="badge" style={{ fontSize: '0.75rem' }}>+{project.tech.length - 4} more</span>
                  )}
                </div>

                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem', 
                    color: 'var(--primary)', 
                    fontWeight: 600, 
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  View Details & Features <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 1.5rem' }}>
              <Code size={40} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.25rem' }}>No projects found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try modifying your filter categories or text query.</p>
            </div>
          )}
        </div>

        {/* Dynamic Details Drawer/Modal */}
        {activeModal && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(3, 7, 18, 0.85)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeIn 0.25s ease'
            }}
            onClick={() => setActiveModal(null)}
          >
            <div 
              className="glass"
              style={{
                width: '100%',
                maxWidth: '680px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                overflow: 'hidden',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                onClick: (e) => e.stopPropagation() // Stop close event bubble
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header block with gradient and icon */}
              <div 
                style={{ 
                  background: activeModal.gradient, 
                  padding: '2.5rem 2rem 1.5rem 2rem',
                  position: 'relative',
                  color: '#fff'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModal(null)}
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '0.4rem',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <X size={18} />
                </button>

                <h3 style={{ fontSize: '1.65rem', fontWeight: 900, textShadow: '0 2px 10px rgba(0,0,0,0.2)', color: '#fff', marginBottom: '0.5rem' }}>
                  {activeModal.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.4 }}>
                  {activeModal.shortDesc}
                </p>
              </div>

              {/* Scrollable details container */}
              <div style={{ padding: '2rem', overflowY: 'auto', flexGrow: 1 }}>
                
                {/* Core Accomplishments */}
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Key Features & Implementation
                </h4>
                <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
                  {activeModal.features.map((feat, index) => (
                    <li key={index} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Impact */}
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Project Value & Impact
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {activeModal.impact}
                </p>

                {/* Full Stack Tech Badges */}
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Complete Tech Stack
                </h4>
                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {activeModal.tech.map((t, index) => (
                    <span key={index} className="badge badge-primary">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                  <button 
                    onClick={() => alert(`Simulating connection to GitHub repo: https://github.com/Induja-2103/${activeModal.title.split(' ')[0]}`)}
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <Github size={16} /> Code Codebase
                  </button>
                  <button 
                    onClick={() => alert('Simulating dynamic frontend connection. Production URL live shortly!')}
                    className="btn btn-secondary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Projects;
