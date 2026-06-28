// src/pages/TermsConditions.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TermsConditions.css';

function TermsConditions() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'definitions', title: 'Definitions' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'account', title: 'Account Registration' },
    { id: 'services', title: 'Services and Products' },
    { id: 'obligations', title: 'User Obligations' },
    { id: 'fees', title: 'Fees and Charges' },
    { id: 'repayment', title: 'Loan Repayment' },
    { id: 'partners', title: 'Partner Relationships' },
    { id: 'intellectual', title: 'Intellectual Property' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Termination' },
    { id: 'governing', title: 'Governing Law' },
    { id: 'dispute', title: 'Dispute Resolution' },
    { id: 'amendments', title: 'Amendments' },
    { id: 'contact', title: 'Contact Information' }
  ];

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

  // PDF download handler
  const handleDownloadPDF = () => {
    alert('📄 Terms & Conditions PDF download will be available soon. Please check back later.');
    // You can add actual PDF download logic here
  };

  const handleAccept = () => {
    setAcceptedTerms(true);
    alert('Thank you for accepting the Terms & Conditions. You can now proceed with using our services.');
    // Navigate to home or services after acceptance
    handleNavigation('/services');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="terms-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Terms & Conditions</span>
            <h1>Understanding Our <span className="highlight">Terms</span></h1>
            <p>Last updated: June 2026</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('acceptance')}>
                Read Terms
              </button>
              <button className="btn-outline" onClick={handleDownloadPDF}>Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACCEPTANCE BANNER ===== */}
      {!acceptedTerms && (
        <section className="acceptance-banner">
          <div className="container">
            <div className="acceptance-content">
              <div className="acceptance-text">
                <span className="acceptance-icon">📋</span>
                <div>
                  <h3>Accept Our Terms & Conditions</h3>
                  <p>By using BLUEPEAKFINSERV's services, you agree to our Terms & Conditions. Please review them carefully.</p>
                </div>
              </div>
              <div className="acceptance-buttons">
                <button className="btn-primary" onClick={handleAccept}>Accept Terms</button>
                <button className="btn-outline" onClick={() => scrollToSection('acceptance')}>Review Later</button>
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

      {/* ===== TERMS CONTENT ===== */}
      <section className="terms-content">
        <div className="container">
          <div className="legal-content">
            {/* Section 1: Acceptance */}
            <div id="acceptance" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">01</span>
                <h2>Acceptance of Terms</h2>
              </div>
              <p>
                By using BLUEPEAKFINSERV's services, website, and mobile application, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
              </p>
              <p>
                These terms constitute a legally binding agreement between you and BLUEPEAKFINSERV.
              </p>
              <div className="policy-highlight">
                <strong>📌 Important:</strong> By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </div>
            </div>

            {/* Section 2: Definitions */}
            <div id="definitions" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">02</span>
                <h2>Definitions</h2>
              </div>
              <ul>
                <li>
                  <strong>"BLUEPEAKFINSERV"</strong> - Refers to BLUEPEAKFINSERV and its affiliates.
                </li>
                <li>
                  <strong>"User"</strong> - Any individual or entity using our services.
                </li>
                <li>
                  <strong>"Services"</strong> - Includes loans, insurance, investment, and financial products offered.
                </li>
                <li>
                  <strong>"Account"</strong> - Your registered account with BLUEPEAKFINSERV.
                </li>
                <li>
                  <strong>"Agreement"</strong> - These Terms & Conditions.
                </li>
                <li>
                  <strong>"Partner"</strong> - Third-party institutions we collaborate with.
                </li>
              </ul>
            </div>

            {/* Section 3: Eligibility */}
            <div id="eligibility" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">03</span>
                <h2>Eligibility</h2>
              </div>
              <p>To use our services, you must:</p>
              <ul>
                <li>Be at least 18 years of age</li>
                <li>Be an Indian citizen or resident</li>
                <li>Have a valid PAN card</li>
                <li>Have a valid Aadhaar number linked to a mobile number</li>
                <li>Provide accurate and complete information</li>
                <li>Not have any existing fraud or default history</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <div className="policy-note">
                <strong>🔒 Note:</strong> We verify all eligibility criteria during the registration process.
              </div>
            </div>

            {/* Section 4: Account Registration */}
            <div id="account" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">04</span>
                <h2>Account Registration</h2>
              </div>
              <h3>4.1 Creating an Account</h3>
              <p>You must create an account to access our services. You agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Keep your login credentials confidential</li>
                <li>Notify us immediately of unauthorized access</li>
                <li>Take responsibility for all activities under your account</li>
              </ul>
              
              <h3>4.2 Verification</h3>
              <p>We may require you to complete KYC (Know Your Customer) verification, including:</p>
              <ul>
                <li>Identity verification (PAN, Aadhaar)</li>
                <li>Address verification</li>
                <li>Business verification (if applicable)</li>
                <li>Income and financial verification</li>
              </ul>
            </div>

            {/* Section 5: Services */}
            <div id="services" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">05</span>
                <h2>Services and Products</h2>
              </div>
              <h3>5.1 Loans</h3>
              <p>We offer business loans with the following terms:</p>
              <ul>
                <li>Loan amounts: ₹50,000 to ₹50 Lakhs</li>
                <li>Interest rates: As communicated at the time of application</li>
                <li>Repayment: Flexible terms up to 60 months</li>
                <li>Processing fees: As applicable</li>
                <li>Late payment fees: As per loan agreement</li>
                <li>Prepayment: May be allowed with applicable charges</li>
              </ul>
              
              <h3>5.2 Insurance</h3>
              <p>Insurance products are provided through our partners:</p>
              <ul>
                <li>Health Insurance</li>
                <li>Life Insurance</li>
                <li>Car Insurance</li>
                <li>Terms and conditions apply as per partner policies</li>
              </ul>
              
              <h3>5.3 Investments</h3>
              <p>Investment services include:</p>
              <ul>
                <li>Demat accounts</li>
                <li>Mutual funds</li>
                <li>SIP (Systematic Investment Plans)</li>
                <li>Risk disclosure and terms apply</li>
              </ul>
            </div>

            {/* Section 6: User Obligations */}
            <div id="obligations" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">06</span>
                <h2>User Obligations</h2>
              </div>
              <p>As a user, you agree to:</p>
              <ul>
                <li>Provide accurate and truthful information</li>
                <li>Use services for lawful purposes only</li>
                <li>Not engage in fraudulent or illegal activities</li>
                <li>Not misuse or attempt to hack our systems</li>
                <li>Pay all fees and charges on time</li>
                <li>Update your information promptly when changes occur</li>
                <li>Comply with all financial regulations</li>
                <li>Maintain confidentiality of your account</li>
              </ul>
            </div>

            {/* Section 7: Fees */}
            <div id="fees" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">07</span>
                <h2>Fees and Charges</h2>
              </div>
              <p>We may charge fees for our services, including:</p>
              <ul>
                <li>
                  <strong>Loan Processing Fee:</strong> As communicated at application
                </li>
                <li>
                  <strong>Annual Maintenance Fee:</strong> For Demat accounts and other services
                </li>
                <li>
                  <strong>Transaction Fees:</strong> For specific transactions
                </li>
                <li>
                  <strong>Late Payment Fee:</strong> For delayed loan repayments
                </li>
                <li>
                  <strong>Account Closure Fee:</strong> If applicable
                </li>
                <li>
                  <strong>Service Charges:</strong> For premium services
                </li>
              </ul>
              <p className="policy-note">
                All fees are communicated before service delivery and are subject to change with prior notice.
              </p>
            </div>

            {/* Section 8: Repayment */}
            <div id="repayment" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">08</span>
                <h2>Loan Repayment</h2>
              </div>
              <ul>
                <li>Repayments must be made on the scheduled due dates</li>
                <li>Auto-debit facility may be available</li>
                <li>Late payments will incur penalty charges</li>
                <li>Defaulting may affect your credit score</li>
                <li>Prepayment may be allowed with conditions</li>
                <li>We reserve the right to take legal action for default</li>
              </ul>
            </div>

            {/* Section 9: Partners */}
            <div id="partners" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">09</span>
                <h2>Partner Relationships</h2>
              </div>
              <p>Our services are delivered in partnership with:</p>
              <div className="partner-grid">
                <div className="partner-type" onClick={() => handleNavigation('/partners')} style={{ cursor: 'pointer' }}>
                  <h4>📈 Demat & Trading</h4>
                  <p>Zerodha, Angel One, Upstox, Motilal Oswal</p>
                </div>
                <div className="partner-type" onClick={() => handleNavigation('/partners')} style={{ cursor: 'pointer' }}>
                  <h4>🛡️ Insurance</h4>
                  <p>ICICI Lombard, Assure Asset, Paisabazaar</p>
                </div>
                <div className="partner-type" onClick={() => handleNavigation('/partners')} style={{ cursor: 'pointer' }}>
                  <h4>🏦 Banking & Savings</h4>
                  <p>Kotak Mahindra Bank, Tide</p>
                </div>
              </div>
              <p className="policy-note">
                Each partner may have their own terms and conditions that apply.
              </p>
            </div>

            {/* Section 10: Intellectual Property */}
            <div id="intellectual" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">10</span>
                <h2>Intellectual Property</h2>
              </div>
              <p>All content, trademarks, and intellectual property on our platform are owned by BLUEPEAKFINSERV. You may not:</p>
              <ul>
                <li>Copy, reproduce, or distribute our content</li>
                <li>Use our trademarks without permission</li>
                <li>Reverse engineer our software</li>
                <li>Create derivative works</li>
              </ul>
            </div>

            {/* Section 11: Liability */}
            <div id="liability" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">11</span>
                <h2>Limitation of Liability</h2>
              </div>
              <p>BLUEPEAKFINSERV is not liable for:</p>
              <ul>
                <li>Indirect or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Damages caused by third-party partners</li>
                <li>Technical issues beyond our control</li>
                <li>Market risks in investments</li>
                <li>Unauthorized access to your account</li>
              </ul>
              <p className="policy-note">
                Our total liability is limited to the fees paid by you in the preceding 12 months.
              </p>
            </div>

            {/* Section 12: Termination */}
            <div id="termination" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">12</span>
                <h2>Termination</h2>
              </div>
              <p>We may terminate or suspend your account if:</p>
              <ul>
                <li>You violate these terms</li>
                <li>You provide false information</li>
                <li>You engage in fraudulent activities</li>
                <li>You default on loan repayments</li>
                <li>Required by law or regulation</li>
              </ul>
              <p>You may close your account at any time by contacting support.</p>
            </div>

            {/* Section 13: Governing Law */}
            <div id="governing" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">13</span>
                <h2>Governing Law</h2>
              </div>
              <p>These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Mumbai, India.</p>
            </div>

            {/* Section 14: Dispute Resolution */}
            <div id="dispute" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">14</span>
                <h2>Dispute Resolution</h2>
              </div>
              <p>Any disputes arising from these terms shall be resolved through:</p>
              <ul>
                <li>First, attempt at amicable resolution through discussion</li>
                <li>Mediation by a neutral third party</li>
                <li>Arbitration as per Indian Arbitration and Conciliation Act</li>
                <li>Legal proceedings if necessary</li>
              </ul>
            </div>

            {/* Section 15: Amendments */}
            <div id="amendments" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">15</span>
                <h2>Amendments</h2>
              </div>
              <p>We reserve the right to amend these terms at any time. We will notify users of significant changes. Continued use constitutes acceptance of amended terms.</p>
            </div>

            {/* Section 16: Contact */}
            <div id="contact" className="legal-section">
              <div className="section-header-inline">
                <span className="section-number">16</span>
                <h2>Contact Information</h2>
              </div>
              <p>For questions about these terms:</p>
              <div className="contact-grid">
                <div className="contact-item" onClick={() => handleEmail('legal@bluepeakfinserv.com')} style={{ cursor: 'pointer' }}>
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p style={{ color: '#0066cc', textDecoration: 'underline' }}>legal@bluepeakfinserv.com</p>
                  </div>
                </div>
                <div className="contact-item" onClick={handleCall} style={{ cursor: 'pointer' }}>
                  <span className="contact-icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p style={{ color: '#0066cc', textDecoration: 'underline' }}>+91 8198000803</p>
                  </div>
                </div>
                <div className="contact-item" onClick={() => handleNavigation('/grievance')} style={{ cursor: 'pointer' }}>
                  <span className="contact-icon">⚖️</span>
                  <div>
                    <h4>Compliance Officer</h4>
                    <p style={{ color: '#0066cc', textDecoration: 'underline' }}>File a Complaint</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="terms-footer">
              <div className="footer-last-updated">
                <span>📅 Last Updated: June 2026</span>
                <span>📋 Version: 1.0</span>
                <span>⚖️ Jurisdiction: Mumbai, India</span>
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

export default TermsConditions;