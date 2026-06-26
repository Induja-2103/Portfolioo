import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Github = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setShowToast(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Hide success toast after 4 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 4000);
      }, 1000);
    }
  };

  return (
    <section className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        {/* Success Toast */}
        {showToast && (
          <div 
            className="glass"
            style={{
              position: 'fixed',
              top: '5.5rem',
              right: '2rem',
              background: 'var(--bg-secondary)',
              border: '1px solid #10b981',
              borderRadius: '12px',
              padding: '1rem 1.5rem',
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 10px 25px rgba(16, 185, 129, 0.2)',
              animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <CheckCircle2 size={20} style={{ color: '#10b981' }} />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Message Sent!</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>Thank you Induja will connect with you soon.</p>
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3rem', marginTop: '2rem' }}>
          
          {/* Left Column: Direct Contact Channels */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>
              Let's build something great together.
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Whether you have an opening, an interesting project idea, or just want to talk about open source or DSA, my inbox is open!
            </p>

            {/* Channels Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              
              {/* Channel Item 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary)', background: 'var(--primary-glow)', padding: '0.75rem', borderRadius: '12px', display: 'flex' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Me</h4>
                  <a href="mailto:indujas2103@gmail.com" style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>
                    indujas2103@gmail.com
                  </a>
                </div>
              </div>

              {/* Channel Item 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary)', background: 'var(--primary-glow)', padding: '0.75rem', borderRadius: '12px', display: 'flex' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Me</h4>
                  <a href="tel:+918248807407" style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>
                    (+91) 8248807407
                  </a>
                </div>
              </div>

              {/* Channel Item 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary)', background: 'var(--primary-glow)', padding: '0.75rem', borderRadius: '12px', display: 'flex' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600, margin: 0 }}>
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>

            </div>

            {/* Custom Networking Grid */}
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Connect with me
            </h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://github.com/Induja-2103" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass network-card"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.75rem 1.25rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  background: 'var(--bg-card)'
                }}
              >
                <Github size={18} /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/induja-s-972bab346" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass network-card"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.75rem 1.25rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  background: 'var(--bg-card)'
                }}
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="glass" style={{ padding: '2.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Name Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 500 }}>{errors.name}</span>}
              </div>

              {/* Email Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 500 }}>{errors.email}</span>}
              </div>

              {/* Subject Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                />
                {errors.subject && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 500 }}>{errors.subject}</span>}
              </div>

              {/* Message Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  style={{ resize: 'vertical' }}
                />
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 500 }}>{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ 
                  justifyContent: 'center', 
                  marginTop: '0.5rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Styled Input Elements */}
      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }
        .form-input.error {
          border-color: #ef4444;
        }
        .network-card {
          transition: all 0.3s ease;
        }
        .network-card:hover {
          border-color: var(--primary) !important;
          color: var(--primary) !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px var(--primary-glow) !important;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: 0.9fr 1.1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
