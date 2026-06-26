import React from 'react';
import { Award, ShieldAlert, Cpu, Sparkles, BookOpen, Lightbulb } from 'lucide-react';

function Certifications() {
  const certifications = [
    {
      title: 'Introduction to IoT (Elite + Silver)',
      provider: 'NPTEL National Certification',
      date: 'November 2025',
      icon: <Cpu size={20} />,
      badgeText: 'Elite + Silver'
    },
    {
      title: 'Cloud Computing',
      provider: 'NPTEL National Certification',
      date: 'May 2025',
      icon: <Award size={20} />,
      badgeText: 'Completed'
    }
  ];

  const coCurricular = [
    {
      title: 'Smart India Hackathon (SIH)',
      type: 'National Hackathon - 2024 & 2025',
      desc: 'Collaborated on innovative technology-driven solutions for real-world problem statements, designing frontends and backend modules.',
      icon: <Sparkles size={20} />
    },
    {
      title: 'MSME Idea Hackathon',
      type: 'Government Innovation Initiative',
      desc: 'Presented an innovative project proposal and secured a shortlist at the college-level evaluation round.',
      icon: <Lightbulb size={20} />
    },
    {
      title: 'Paper Presentation: "Energy Mate"',
      type: 'IoT-based Smart Energy System',
      desc: 'Presented a detailed design proposal for monitoring energy consumption, optimizing usage, and promoting carbon footprint reductions.',
      icon: <BookOpen size={20} />
    },
    {
      title: 'Specialized Seminars & Tech Forums',
      type: 'AI Navigation & CyberSecurity',
      desc: 'Attended seminars on Missile Navigation & Control using AI and In-Vehicle Intrusion Detection Systems.',
      icon: <ShieldAlert size={20} />
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginTop: '2rem' }}>
          
          {/* Left Column: Certifications */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={22} style={{ color: 'var(--primary)' }} />
              Professional Certifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="glass shine-card"
                  style={{
                    padding: '1.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <div 
                    style={{ 
                      color: 'var(--primary)', 
                      background: 'var(--primary-glow)',
                      padding: '0.6rem',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <span className="badge badge-primary" style={{ marginBottom: '0.4rem' }}>
                      {cert.badgeText}
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.25rem 0' }}>
                      {cert.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {cert.provider} • <span style={{ color: 'var(--text-muted)' }}>{cert.date}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hackathons & Presentations */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={22} style={{ color: 'var(--accent)' }} />
              Hackathons & Research
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {coCurricular.map((item, index) => (
                <div 
                  key={index} 
                  className="glass shine-card"
                  style={{
                    padding: '1.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <div 
                    style={{ 
                      color: 'var(--accent)', 
                      background: 'var(--accent-glow)',
                      padding: '0.6rem',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                      {item.title}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, display: 'block', margin: '0.2rem 0 0.5rem 0' }}>
                      {item.type}
                    </span>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Certifications;
