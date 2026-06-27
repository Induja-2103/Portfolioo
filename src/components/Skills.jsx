import React, { useState } from 'react';
import { Code2, Layout, Server, Database, BrainCircuit, Wrench, Users } from 'lucide-react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Competencies', icon: null },
    { id: 'programming', name: 'Languages', icon: <Code2 size={16} /> },
    { id: 'aiml', name: 'AI & ML', icon: <BrainCircuit size={16} /> },
    { id: 'frontend', name: 'Frontend', icon: <Layout size={16} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={16} /> },
    { id: 'database', name: 'Database', icon: <Database size={16} /> },
    { id: 'tools', name: 'Tools', icon: <Wrench size={16} /> },
    { id: 'softskills', name: 'Soft-skills', icon: <Users size={16} /> }
  ];

  const skillsData = [
    // Programming
    { name: 'Java', category: 'programming', level: 90 },
    { name: 'Python', category: 'programming', level: 85 },
    { name: 'C', category: 'programming', level: 80 },
    // AI & ML
    { name: 'PyTorch', category: 'aiml', level: 80 },
    { name: 'TensorFlow', category: 'aiml', level: 75 },
    { name: 'Scikit-learn', category: 'aiml', level: 85 },
    { name: 'Random Forest', category: 'aiml', level: 85 },
    { name: 'NLP', category: 'aiml', level: 80 },
    { name: 'LLM', category: 'aiml', level: 80 },
    { name: 'ML Flow', category: 'aiml', level: 70 },
    // Frontend
    { name: 'HTML & CSS', category: 'frontend', level: 92 },
    { name: 'JavaScript', category: 'frontend', level: 88 },
    { name: 'React js', category: 'frontend', level: 90 },
    // Backend
    { name: 'FastAPI', category: 'backend', level: 80 },
    { name: 'SpringBoot', category: 'backend', level: 80 },
    { name: 'Node.js', category: 'backend', level: 85 },
    // Database
    { name: 'MongoDB', category: 'database', level: 85 },
    { name: 'PostgresSQL', category: 'database', level: 80 },
    // Tools
    { name: 'Streamlit', category: 'tools', level: 80 },
    { name: 'Google Colab', category: 'tools', level: 85 },
    { name: 'Jupyter', category: 'tools', level: 85 },
    { name: 'GitHub', category: 'tools', level: 88 },
    { name: 'Visual Studio', category: 'tools', level: 90 },
    { name: 'Android Studio', category: 'tools', level: 75 },
    // Soft-skills
    { name: 'Leadership', category: 'softskills', level: 90 },
    { name: 'Critical Thinking', category: 'softskills', level: 85 },
    { name: 'Problem Solving', category: 'softskills', level: 90 }
  ];

  // Get icon for category display
  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'programming': return <Code2 size={20} style={{ color: 'var(--primary)' }} />;
      case 'aiml': return <BrainCircuit size={20} style={{ color: 'var(--primary)' }} />;
      case 'frontend': return <Layout size={20} style={{ color: 'var(--primary)' }} />;
      case 'backend': return <Server size={20} style={{ color: 'var(--primary)' }} />;
      case 'database': return <Database size={20} style={{ color: 'var(--primary)' }} />;
      case 'tools': return <Wrench size={20} style={{ color: 'var(--primary)' }} />;
      case 'softskills': return <Users size={20} style={{ color: 'var(--primary)' }} />;
      default: return null;
    }
  };

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Group filtered skills by category for nice structured rendering
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        {/* Skill Filter Buttons */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                border: 'none',
                background: activeCategory === cat.id ? 'var(--primary)' : 'var(--bg-secondary)',
                color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: activeCategory === cat.id ? 'var(--primary)' : 'var(--border-color)',
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.3s ease'
              }}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Structured Skill Grids */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {Object.keys(groupedSkills).map((catId) => {
            const catInfo = categories.find(c => c.id === catId);
            return (
              <div 
                key={catId} 
                className="glass"
                style={{ 
                  padding: '2rem', 
                  background: 'var(--bg-card)', 
                  border: '1px solid var(--border-color)' 
                }}
              >
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  {getCategoryIcon(catId)}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'capitalize', letterSpacing: '-0.01em' }}>
                    {catInfo ? catInfo.name : catId}
                  </h3>
                </div>

                {/* Progress bars inside the card */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {groupedSkills[catId].map((skill, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        <span>{skill.name}</span>
                        <span style={{ color: 'var(--primary)' }}>{skill.level}%</span>
                      </div>
                      
                      {/* Outer bar */}
                      <div 
                        style={{ 
                          width: '100%', 
                          height: '6px', 
                          background: 'var(--bg-secondary)', 
                          borderRadius: '9999px',
                          overflow: 'hidden',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {/* Inner filled progress with glow */}
                        <div 
                          style={{ 
                            width: `${skill.level}%`, 
                            height: '100%', 
                            background: 'var(--primary)', 
                            borderRadius: '9999px',
                            boxShadow: '0 0 8px var(--primary)',
                            transition: 'width 1s cubic-bezier(0.1, 1, 0.1, 1)'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
