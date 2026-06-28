// src/pages/PrivacyPolicy.js
import React, { useState } from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);
  const [consentGiven, setConsentGiven] = useState(false);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'collection', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Your Information' },
    { id: 'legal-basis', title: 'Legal Basis for Processing' },
    { id: 'sharing', title: 'Data Sharing and Disclosure' },
    { id: 'security', title: 'Data Security' },
    { id: 'retention', title: 'Data Retention' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies and Tracking' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'changes', title: 'Changes to Privacy Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const handleConsent = () => {
    setConsentGiven(true);
    alert('Thank you for accepting our Privacy Policy. Your privacy preferences have been saved.');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="privacy-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Privacy Policy</span>
            <h1>Your Privacy <span className="highlight">Matters</span></h1>
            <p>Last updated: June 2026</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('introduction')}>
                Read Policy
              </button>
              <button className="btn-outline">Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONSENT BANNER ===== */}
      {!consentGiven && (
        <section className="consent-banner">
          <div className="container">
            <div className="consent-content">
              <div className="consent-text">
                <span className="consent-icon">🔒</span>
                <div>
                  <h3>We Value Your Privacy</h3>
                  <p>We use cookies and similar technologies to enhance your experience. By continuing to use our services, you agree to our Privacy Policy.</p>
                </div>
              </div>
              <div className="consent-buttons">
                <button className="btn-primary" onClick={handleConsent}>Accept All</button>
                <button className="btn-outline" onClick={handleConsent}>Accept Essential</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== TABLE OF CONTENTS ===== */}
      <section className="toc-section">
        <div className="container">
          <div className="toc-wrapper">
            <h2>Table of Contents</h2>
            <div className="toc-grid">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="toc-number">
                    {String(sections.indexOf(section) + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRIVACY CONTENT ===== */}
      <section className="privacy-content">
        <div className="container">
          <div className="legal-content">
            {/* Section 1: Introduction */}
            <div id="introduction" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">01</span>
                <h2>Introduction</h2>
              </div>
              <p>
                BLUEPEAKFINSERV ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, and mobile application.
              </p>
              <p>
                We respect your privacy and are committed to protecting your personal data. This policy will inform you about how we handle your personal data, your privacy rights, and how the law protects you.
              </p>
              <div className="policy-highlight">
                <strong>📋 Key Principle:</strong> We collect only what we need and protect what we collect.
              </div>
            </div>

            {/* Section 2: Information We Collect */}
            <div id="collection" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">02</span>
                <h2>Information We Collect</h2>
              </div>
              
              <h3>📝 Personal Information</h3>
              <ul>
                <li>Full name and business name</li>
                <li>Contact information (email, phone number, address)</li>
                <li>PAN card details and Aadhaar number</li>
                <li>Business registration documents</li>
                <li>Bank account details</li>
                <li>Financial information and transaction history</li>
                <li>KYC (Know Your Customer) documentation</li>
              </ul>
              
              <h3>💻 Technical Information</h3>
              <ul>
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>

              <div className="policy-note">
                <strong>🔒 Note:</strong> We never collect sensitive information without your explicit consent.
              </div>
            </div>

            {/* Section 3: How We Use Your Information */}
            <div id="usage" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">03</span>
                <h2>How We Use Your Information</h2>
              </div>
              <ul>
                <li>
                  <strong>🏦 Service Delivery:</strong> To provide and maintain our financial services, including loans, insurance, and investment products.
                </li>
                <li>
                  <strong>👤 Account Management:</strong> To manage your account, process transactions, and provide customer support.
                </li>
                <li>
                  <strong>✅ Verification:</strong> To verify your identity and prevent fraud.
                </li>
                <li>
                  <strong>📈 Improvement:</strong> To improve our services, website, and user experience.
                </li>
                <li>
                  <strong>📧 Communication:</strong> To send you important updates, offers, and marketing communications (with your consent).
                </li>
                <li>
                  <strong>⚖️ Compliance:</strong> To comply with legal and regulatory requirements.
                </li>
              </ul>
            </div>

            {/* Section 4: Legal Basis */}
            <div id="legal-basis" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">04</span>
                <h2>Legal Basis for Processing</h2>
              </div>
              <p>We process your personal data based on the following legal grounds:</p>
              <ul>
                <li>
                  <strong>📄 Contractual Necessity:</strong> To fulfill our contract with you for services.
                </li>
                <li>
                  <strong>⚖️ Legal Obligation:</strong> To comply with financial regulations and reporting requirements.
                </li>
                <li>
                  <strong>💡 Legitimate Interest:</strong> To improve our services and prevent fraud.
                </li>
                <li>
                  <strong>✅ Consent:</strong> For marketing communications (you can withdraw consent anytime).
                </li>
              </ul>
            </div>

            {/* Section 5: Data Sharing */}
            <div id="sharing" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">05</span>
                <h2>Data Sharing and Disclosure</h2>
              </div>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>🤝 Partner Institutions:</strong> Banks, insurance companies, and financial partners for service delivery.
                </li>
                <li>
                  <strong>🏛️ Regulatory Bodies:</strong> RBI, SEBI, and other regulatory authorities as required by law.
                </li>
                <li>
                  <strong>🔧 Service Providers:</strong> Third-party vendors who assist in our operations (payment gateways, verification services).
                </li>
                <li>
                  <strong>👮 Law Enforcement:</strong> When required by law or to protect our legal rights.
                </li>
              </ul>
              <p className="policy-note">
                We ensure all third parties respect your privacy and comply with data protection laws.
              </p>
            </div>

            {/* Section 6: Data Security */}
            <div id="security" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">06</span>
                <h2>Data Security</h2>
              </div>
              <p>We implement robust security measures to protect your data:</p>
              <div className="security-grid">
                <div className="security-item">
                  <span className="security-icon">🔐</span>
                  <div>
                    <h4>256-bit SSL Encryption</h4>
                    <p>All data transmission is encrypted</p>
                  </div>
                </div>
                <div className="security-item">
                  <span className="security-icon">🏢</span>
                  <div>
                    <h4>Secure Data Centers</h4>
                    <p>Physical and digital security measures</p>
                  </div>
                </div>
                <div className="security-item">
                  <span className="security-icon">🔍</span>
                  <div>
                    <h4>Regular Audits</h4>
                    <p>Vulnerability assessments and audits</p>
                  </div>
                </div>
                <div className="security-item">
                  <span className="security-icon">👨‍💻</span>
                  <div>
                    <h4>Access Controls</h4>
                    <p>Employee training and access restrictions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Data Retention */}
            <div id="retention" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">07</span>
                <h2>Data Retention</h2>
              </div>
              <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including:</p>
              <ul>
                <li>
                  <strong>Active accounts:</strong> Data retained for the duration of your relationship with us.
                </li>
                <li>
                  <strong>Inactive accounts:</strong> Data retained for 7 years after account closure as per regulatory requirements.
                </li>
                <li>
                  <strong>Transaction records:</strong> Retained for 8 years as per tax laws.
                </li>
                <li>
                  <strong>KYC documents:</strong> Retained for 5 years after account closure.
                </li>
              </ul>
            </div>

            {/* Section 8: Your Rights */}
            <div id="rights" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">08</span>
                <h2>Your Rights</h2>
              </div>
              <p>You have the following rights regarding your personal data:</p>
              <div className="rights-grid">
                <div className="right-item">
                  <span className="right-icon">👁️</span>
                  <h4>Access</h4>
                  <p>Request access to your personal data</p>
                </div>
                <div className="right-item">
                  <span className="right-icon">✏️</span>
                  <h4>Correction</h4>
                  <p>Request correction of inaccurate data</p>
                </div>
                <div className="right-item">
                  <span className="right-icon">🗑️</span>
                  <h4>Deletion</h4>
                  <p>Request deletion of your data</p>
                </div>
                <div className="right-item">
                  <span className="right-icon">⛔</span>
                  <h4>Restriction</h4>
                  <p>Request restriction of processing</p>
                </div>
                <div className="right-item">
                  <span className="right-icon">📤</span>
                  <h4>Portability</h4>
                  <p>Request transfer of your data</p>
                </div>
                <div className="right-item">
                  <span className="right-icon">🚫</span>
                  <h4>Objection</h4>
                  <p>Object to processing for marketing</p>
                </div>
              </div>
              <p className="policy-note">
                <strong>📧 To exercise these rights:</strong> privacy@bluepeakfinserv.com
              </p>
            </div>

            {/* Section 9: Cookies */}
            <div id="cookies" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">09</span>
                <h2>Cookies and Tracking</h2>
              </div>
              <p>We use cookies and similar tracking technologies to:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Provide personalized content and offers</li>
                <li>Improve our services</li>
              </ul>
              <p>You can control cookie preferences through your browser settings.</p>
            </div>

            {/* Section 10: Children's Privacy */}
            <div id="children" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">10</span>
                <h2>Children's Privacy</h2>
              </div>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors.</p>
            </div>

            {/* Section 11: Changes */}
            <div id="changes" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">11</span>
                <h2>Changes to Privacy Policy</h2>
              </div>
              <p>We may update this Privacy Policy periodically. We will notify you of any changes through:</p>
              <ul>
                <li>📧 Email notification</li>
                <li>📱 In-app notification</li>
                <li>🌐 Website announcement</li>
              </ul>
              <p>We encourage you to review this policy regularly.</p>
            </div>

            {/* Section 12: Contact Us */}
            <div id="contact" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">12</span>
                <h2>Contact Us</h2>
              </div>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="contact-grid">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>privacy@bluepeakfinserv.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 1800-XXX-XXXX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>BLUEPEAKFINSERV, [Your Business Address]</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">👤</span>
                  <div>
                    <h4>Grievance Officer</h4>
                    <p>grievance@bluepeakfinserv.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Footer */}
            <div className="policy-footer">
              <div className="footer-last-updated">
                <span>📅 Last Updated: June 2026</span>
                <span>📋 Version: 1.0</span>
              </div>
              <button className="btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ↑ Back to Top
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;