import React from 'react';
import { Award, Briefcase, Code, GraduationCap, Flame, Terminal } from 'lucide-react';

function About() {
  const stats = [
    { icon: <Code size={24} />, value: '4+', label: 'Featured Projects', desc: 'Full Stack & AI/IoT' },
    { icon: <Briefcase size={24} />, value: '2', label: 'Internships Completed', desc: 'Java & Web Development' },
    { icon: <GraduationCap size={24} />, value: '8.30', label: 'B.E. CGPA', desc: 'Computer Science (2023-2027)' },
    { icon: <Award size={24} />, value: '2', label: 'Nptel Certifications', desc: 'Cloud & IoT' }
  ];

  const focusAreas = [
    {
      title: 'Frontend Engineering',
      desc: 'Crafting responsive, beautiful layouts using React and state managers with smooth client-side workflows.',
      color: 'var(--primary)'
    },
    {
      title: 'Backend Systems',
      desc: 'Developing scalable backend systems and REST APIs with Node.js/Express and Spring Boot frameworks.',
      color: 'var(--accent)'
    },
    {
      title: 'Database & Security',
      desc: 'Optimizing and querying database layers (MongoDB, PostgreSQL) along with JWT user authentications.',
      color: '#f59e0b'
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginTop: '2rem' }}>
          
          {/* Main Story & Profile Description */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              I am a passionate <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Full Stack Developer</span> and Computer Science Engineering Student. 
              I thrive on building scalable, user-centric web applications and solving complex algorithmic challenges. 
              With a strong foundation in Data Structures, Object-Oriented Programming, and database systems, I design backend API architectures and client interfaces that integrate seamlessly.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              My engineering education at Dr. NGP Institute of Technology coupled with real-world internship experiences in Java and Web Development has prepared me to deliver clean code and optimized system performance.
            </p>
          </div>

          {/* Grid of Metric Stats Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="glass shine-card"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)'
                }}
              >
                <div 
                  style={{ 
                    color: 'var(--primary)', 
                    background: 'var(--primary-glow)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }} className="gradient-text">
                  {stat.value}
                </h3>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {stat.label}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Grid of Specializations */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '2rem' }}>
              My Core Focus
            </h3>
            
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.5rem' 
              }}
            >
              {focusAreas.map((area, idx) => (
                <div 
                  key={idx}
                  className="glass"
                  style={{
                    padding: '2rem',
                    background: 'var(--bg-card)',
                    borderLeft: `4px solid ${area.color}`
                  }}
                >
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {area.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
