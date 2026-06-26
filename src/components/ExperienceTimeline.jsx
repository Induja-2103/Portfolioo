import React, { useState } from 'react';
import { Briefcase, GraduationCap, Users, Calendar, Award } from 'lucide-react';

function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState('work'); // 'work' or 'education'

  const workData = [
    {
      role: 'Web Developer Intern',
      company: 'Skylena InfoTechnology PVT. LTD',
      location: 'Coimbatore, India',
      duration: 'Jun 2025',
      icon: <Briefcase size={18} />,
      points: [
        'Developed responsive and reusable UI components using React.js, ensuring cross-browser compatibility and seamless performance across devices.',
        'Implemented dynamic and interactive frontend features using React hooks, JavaScript, and AJAX to enhance user engagement and responsiveness.',
        'Optimized client-side performance through efficient state management and asynchronous data handling, enabling smooth client-server communication.'
      ],
      tags: ['React.js', 'JavaScript', 'AJAX', 'State Management', 'UI/UX']
    },
    {
      role: 'Java Developer Intern',
      company: 'Oasis Infobyte',
      location: 'Online, India',
      duration: 'May 2025',
      icon: <Briefcase size={18} />,
      points: [
        'Developed modular Java applications using OOP principles, improving code reusability and maintainability.',
        'Implemented JDBC-based database connectivity for multiple applications, enabling efficient data storage and retrieval.',
        'Collaborated in writing clean, efficient, and optimized code following best development practices.',
        'Improved backend processing performance by 35% through optimized query handling and structured data management.'
      ],
      tags: ['Java', 'OOP', 'JDBC', 'SQL', 'Query Optimization']
    }
  ];

  const educationData = [
    {
      role: 'Open Source Club - Co-Chair',
      company: 'Organizer & Leader',
      location: 'Dr NGP Institution of Technology',
      duration: 'Jun 2025 - Mar 2026',
      icon: <Users size={18} />,
      points: [
        'Organized interactive sessions on Open Source & AI collaboration.',
        'Guided 60+ members in hands-on projects and open-source contributions.'
      ],
      tags: ['Leadership', 'Open Source', 'Mentoring', 'Event Management']
    },
    {
      role: 'GFG Campus Mantri',
      company: 'GeeksforGeeks Campus Representative',
      location: 'Dr NGP Institution of Technology',
      duration: 'Ongoing',
      icon: <Award size={18} />,
      points: [
        'Represented the GeeksforGeeks community on campus and promoted coding culture.',
        'Organized technical events and coding activities for students.',
        'Mentored peers and encouraged participation in programming and DSA practice.'
      ],
      tags: ['DSA', 'Community Building', 'Public Speaking', 'Coding Culture']
    },
    {
      role: 'B.E. Computer Science and Engineering',
      company: 'Dr NGP Institution of Technology',
      location: 'Coimbatore, India',
      duration: '2023 - 2027',
      icon: <GraduationCap size={18} />,
      points: [
        'Pursuing Bachelor of Engineering in CSE.',
        'Maintaining a strong academic profile with a CGPA of 8.30.'
      ],
      tags: ['Data Structures', 'Algorithms', 'OOP', 'Database Management', 'Web Dev']
    },
    {
      role: 'Higher Secondary School Certificate (HSLC)',
      company: 'Jai Saradha Matriculation Higher Secondary School',
      location: 'Tirupur, India',
      duration: '2021 - 2023',
      icon: <GraduationCap size={18} />,
      points: [
        'Completed HSC Board Examinations with a score of 89.2%.'
      ],
      tags: ['Mathematics', 'Computer Science', 'Physics', 'Chemistry']
    }
  ];

  const timelineItems = activeTab === 'work' ? workData : educationData;

  return (
    <section className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title">Timeline</h2>

        {/* Tab Toggle Switch */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '4rem' 
          }}
        >
          <div 
            style={{ 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '9999px',
              padding: '0.35rem',
              display: 'flex',
              gap: '0.25rem',
              boxShadow: 'var(--shadow-inset)'
            }}
          >
            <button
              onClick={() => setActiveTab('work')}
              style={{
                border: 'none',
                background: activeTab === 'work' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'work' ? '#fff' : 'var(--text-secondary)',
                padding: '0.6rem 1.5rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              style={{
                border: 'none',
                background: activeTab === 'education' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'education' ? '#fff' : 'var(--text-secondary)',
                padding: '0.6rem 1.5rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              Education & Leadership
            </button>
          </div>
        </div>

        {/* Timeline Component */}
        <div className="timeline">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`timeline-item ${isLeft ? 'left-item' : 'right-item'}`}
              >
                <div className="timeline-content glass shine-card">
                  {/* Timeline Header info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    <span 
                      style={{ 
                        color: 'var(--primary)', 
                        background: 'var(--primary-glow)',
                        padding: '0.4rem',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {item.icon}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={12} /> {item.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '0.5rem' }}>
                    {item.role}
                  </h3>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
                    {item.company} <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 400 }}>| {item.location}</span>
                  </h4>

                  {/* Bullet accomplishments */}
                  <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.25rem', listStyleType: 'disc' }}>
                    {item.points.map((pt, pIdx) => (
                      <li 
                        key={pIdx} 
                        style={{ 
                          fontSize: '0.9rem', 
                          color: 'var(--text-secondary)', 
                          marginBottom: '0.5rem',
                          lineHeight: 1.5
                        }}
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Skill Badges */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="badge badge-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ExperienceTimeline;
