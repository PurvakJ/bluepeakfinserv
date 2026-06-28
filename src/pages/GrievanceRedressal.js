// src/pages/GrievanceRedressal.js
import React, { useState } from 'react';
import './GrievanceRedressal.css';

function GrievanceRedressal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grievanceType: '',
    subject: '',
    description: '',
    preferredResolution: '',
    accountNumber: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Grievance submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
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

      {/* ===== GRIEVANCE FORM ===== */}
      <section className="grievance-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>File a Grievance</h2>
              <p>Fill out the form below and our team will get back to you within 24 hours</p>
            </div>
            
            {formSubmitted && (
              <div className="success-message">
                ✅ Your grievance has been submitted successfully! You will receive a confirmation email shortly with your reference number.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grievance-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="accountNumber">Account/Reference Number</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    placeholder="If applicable"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="grievanceType">Type of Grievance *</label>
                <select
                  id="grievanceType"
                  name="grievanceType"
                  value={formData.grievanceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select grievance type</option>
                  <option value="service">Service-Related Issues</option>
                  <option value="billing">Billing & Payment Disputes</option>
                  <option value="technical">Technical Issues</option>
                  <option value="partner">Partner Complaints</option>
                  <option value="privacy">Data Privacy Concerns</option>
                  <option value="compliance">Compliance Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Brief subject of your grievance"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please provide a detailed description of your issue..."
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="preferredResolution">Preferred Resolution</label>
                <textarea
                  id="preferredResolution"
                  name="preferredResolution"
                  value={formData.preferredResolution}
                  onChange={handleChange}
                  rows="3"
                  placeholder="How would you like us to resolve this issue?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                Submit Grievance
              </button>
            </form>
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
              <span className="contact-info">support@bluepeakfinserv.com</span>
            </div>
            <div className="escalation-card level-2">
              <div className="level-badge">Level 2</div>
              <h3>Grievance Officer</h3>
              <p>If not satisfied with Level 1. Resolution within 7 business days.</p>
              <span className="contact-info">grievance@bluepeakfinserv.com</span>
            </div>
            <div className="escalation-card level-3">
              <div className="level-badge">Level 3</div>
              <h3>Senior Management</h3>
              <p>If not satisfied with Level 2. Resolution within 15 business days.</p>
              <span className="contact-info">management@bluepeakfinserv.com</span>
            </div>
            <div className="escalation-card level-4">
              <div className="level-badge">Level 4</div>
              <h3>Regulatory Authority</h3>
              <p>If not satisfied with internal resolution. Approach RBI/SEBI Ombudsman.</p>
              <span className="contact-info">Visit RBI/SEBI Portal</span>
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
              <div className="ombudsman-contact">
                <p><strong>Website:</strong> cms.rbi.org.in</p>
                <p><strong>Email:</strong> cpio@rbi.org.in</p>
              </div>
            </div>
            <div className="ombudsman-card">
              <div className="ombudsman-icon">📈</div>
              <h3>SEBI Ombudsman</h3>
              <p className="ombudsman-desc">For complaints related to investments, Demat accounts, and mutual funds.</p>
              <div className="ombudsman-contact">
                <p><strong>Website:</strong> sebi.gov.in</p>
                <p><strong>Email:</strong> complaints@sebi.gov.in</p>
              </div>
            </div>
            <div className="ombudsman-card">
              <div className="ombudsman-icon">🛡️</div>
              <h3>IRDAI Ombudsman</h3>
              <p className="ombudsman-desc">For complaints related to insurance policies and claims.</p>
              <div className="ombudsman-contact">
                <p><strong>Website:</strong> irdai.gov.in</p>
                <p><strong>Email:</strong> complaints@irdai.gov.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFICER SECTION ===== */}
      <section className="officer-section">
        <div className="container">
          <div className="officer-card">
            <div className="officer-icon">👤</div>
            <div className="officer-details">
              <span className="section-tag">Grievance Officer</span>
              <h2>Meet Your <span className="highlight">Grievance Officer</span></h2>
              <div className="officer-info">
                <p><strong>Name:</strong> Grievance Redressal Officer</p>
                <p><strong>Email:</strong> grievance@bluepeakfinserv.com</p>
                <p><strong>Phone:</strong> +91 1800-XXX-XXXX</p>
                <p><strong>Working Hours:</strong> 9:00 AM - 6:00 PM (Mon-Fri)</p>
                <p><strong>Address:</strong> BLUEPEAKFINSERV, [Your Business Address]</p>
              </div>
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
              <button className="btn-primary">Call Support</button>
              <button className="btn-outline-light">Email Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GrievanceRedressal;