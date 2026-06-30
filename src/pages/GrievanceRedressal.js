// src/pages/GrievanceRedressal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GrievanceRedressal.css';

function GrievanceRedressal() {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Phone call handler
  const handleCall = () => {
    window.location.href = 'tel:8198000803';
  };

  // Email handler
  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="grievance-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Grievance Redressal</span>
            <h1>Your Voice <span className="highlight">Matters</span></h1>
            <p>We're committed to addressing your concerns with transparency, fairness, and speed.</p>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2>How We Handle <span className="highlight">Your Grievance</span></h2>
            <p>We follow a transparent, step-by-step process to ensure your concerns are addressed promptly</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Acknowledgment</h3>
                <p>We acknowledge your grievance within 24 hours with a unique reference number for tracking.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Preliminary Review</h3>
                <p>Our team reviews your grievance within 2 business days and gathers necessary information.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Investigation</h3>
                <p>Thorough investigation with relevant departments and partners (up to 7 business days for complex cases).</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Resolution</h3>
                <p>We provide a resolution within 15 business days with a detailed explanation of the outcome.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Closure</h3>
                <p>We seek your confirmation and feedback before officially closing your grievance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ESCALATION SECTION ===== */}
      <section className="escalation-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Escalation Matrix</span>
            <h2>Escalation <span className="highlight">Pathway</span></h2>
            <p>If you're not satisfied with the resolution, you can escalate through these levels</p>
          </div>
          <div className="escalation-grid">
            <div className="escalation-card level-1">
              <div className="level-badge">Level 1</div>
              <h3>Customer Support</h3>
              <p>Initial point of contact. Resolution within 2-3 business days.</p>
              <span 
                className="contact-info" 
                onClick={() => handleEmail('bluepeakfinserv@gmail.com')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                support@bluepeakfinserv.com
              </span>
            </div>
            <div className="escalation-card level-2">
              <div className="level-badge">Level 2</div>
              <h3>Grievance Officer</h3>
              <p>If not satisfied with Level 1. Resolution within 7 business days.</p>
              <span 
                className="contact-info" 
                onClick={() => handleEmail('bluepeakfinserv@gmail.com')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                grievance@bluepeakfinserv.com
              </span>
            </div>
            <div className="escalation-card level-3">
              <div className="level-badge">Level 3</div>
              <h3>Senior Management</h3>
              <p>If not satisfied with Level 2. Resolution within 15 business days.</p>
              <span 
                className="contact-info" 
                onClick={() => handleEmail('bluepeakfinserv@gmail.com')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                management@bluepeakfinserv.com
              </span>
            </div>
            <div className="escalation-card level-4">
              <div className="level-badge">Level 4</div>
              <h3>Regulatory Authority</h3>
              <p>If not satisfied with internal resolution. Approach RBI/SEBI Ombudsman.</p>
              <span 
                className="contact-info" 
                onClick={() => handleNavigation('/support')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                Visit Support Center
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GRIEVANCE TYPES ===== */}
      <section className="types-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Handle</span>
            <h2>Types of <span className="highlight">Grievances</span></h2>
            <p>We handle a wide range of concerns across our financial services</p>
          </div>
          <div className="types-grid">
            <div className="type-card">
              <span className="type-icon">🔍</span>
              <h3>Service-Related Issues</h3>
              <p>Problems with account opening, loan processing, insurance claims, or investment transactions.</p>
            </div>
            <div className="type-card">
              <span className="type-icon">💳</span>
              <h3>Billing & Payment</h3>
              <p>Disputes regarding charges, fees, payment delays, or unauthorized transactions.</p>
            </div>
            <div className="type-card">
              <span className="type-icon">📱</span>
              <h3>Technical Issues</h3>
              <p>Problems with the mobile app, website, or digital services.</p>
            </div>
            <div className="type-card">
              <span className="type-icon">🤝</span>
              <h3>Partner Complaints</h3>
              <p>Issues related to our partner institutions (banks, insurance companies, etc.).</p>
            </div>
            <div className="type-card">
              <span className="type-icon">🛡️</span>
              <h3>Data Privacy</h3>
              <p>Concerns about data handling, privacy breaches, or unauthorized information sharing.</p>
            </div>
            <div className="type-card">
              <span className="type-icon">⚖️</span>
              <h3>Compliance Issues</h3>
              <p>Concerns about regulatory compliance or legal obligations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OMBUDSMAN SECTION ===== */}
      <section className="ombudsman-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Regulatory Ombudsman</span>
            <h2>External <span className="highlight">Recourse</span></h2>
            <p>If you're not satisfied with our internal resolution, you can approach these regulatory bodies</p>
          </div>
          <div className="ombudsman-grid">
            <div className="ombudsman-card">
              <div className="ombudsman-icon">🏦</div>
              <h3>RBI Ombudsman</h3>
              <p className="ombudsman-desc">For complaints related to banking services, loans, and financial institutions.</p>
              <button 
                className="btn-outline" 
                onClick={() => window.open('https://rbi.org.in', '_blank')}
                style={{ marginTop: '1rem' }}
              >
                Visit RBI Portal
              </button>
            </div>
            <div className="ombudsman-card">
              <div className="ombudsman-icon">📈</div>
              <h3>SEBI Ombudsman</h3>
              <p className="ombudsman-desc">For complaints related to investments, Demat accounts, and mutual funds.</p>
              <button 
                className="btn-outline" 
                onClick={() => window.open('https://sebi.gov.in', '_blank')}
                style={{ marginTop: '1rem' }}
              >
                Visit SEBI Portal
              </button>
            </div>
            <div className="ombudsman-card">
              <div className="ombudsman-icon">🛡️</div>
              <h3>IRDAI Ombudsman</h3>
              <p className="ombudsman-desc">For complaints related to insurance policies and claims.</p>
              <button 
                className="btn-outline" 
                onClick={() => window.open('https://irdai.gov.in', '_blank')}
                style={{ marginTop: '1rem' }}
              >
                Visit IRDAI Portal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Immediate Assistance?</h2>
            <p>Contact our customer support team for quick resolution of your concerns</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleCall}>Call Support</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GrievanceRedressal;