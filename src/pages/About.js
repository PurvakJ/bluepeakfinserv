// src/pages/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();

  const partnerCompanies = [
    {
      category: "Demat & Trading",
      companies: ["Zerodha", "Angel One", "Upstox", "Motilal Oswal"],
      icon: "📈"
    },
    {
      category: "Insurance",
      companies: ["ICICI Lombard", "Assure Asset", "Paisabazaar"],
      icon: "🛡️"
    },
    {
      category: "Banking & Savings",
      companies: ["Kotak Mahindra Bank", "Tide"],
      icon: "🏦"
    },
    {
      category: "Loans & Credit",
      companies: ["Starting from ₹50,000", "Multiple Lenders"],
      icon: "💰"
    }
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

  return (
    <div className="about-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">About BLUEPEAKFINSERV</span>
            <h1>Simplifying Finance, <br /><span className="highlight">Delivering Trust</span></h1>
            <p>Your trusted financial partner since 2026, connecting you to India's top financial brands for loans, insurance, Demat accounts, and more.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => handleNavigation('/services')}>Get Started</button>
              <button className="btn-outline" onClick={handleCall}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPANY OVERVIEW ===== */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text">
              <span className="section-tag">Who We Are</span>
              <h2>Empowering Financial <span className="highlight">Freedom</span></h2>
              <p>
                BLUEPEAKFINSERV is a premier financial services platform dedicated to democratizing access to 
                quality financial products. Founded in 2026, we've quickly grown to serve over 10,000+ clients 
                across India.
              </p>
              <p>
                We believe in transparency, trust, and convenience. Our mission is to connect you with the best 
                financial products from India's top brands, making your financial journey simple and rewarding.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>10,000+ satisfied clients</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Starting loans from ₹50,000</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>50+ trusted industry partners</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>24/7 dedicated support</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Bank-grade security & transparency</span>
                </div>
              </div>
            </div>
            <div className="overview-stats">
              <div className="stat-card-large">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card-large">
                <div className="stat-number">2026</div>
                <div className="stat-label">Year Established</div>
              </div>
              <div className="stat-card-large">
                <div className="stat-number">₹50K</div>
                <div className="stat-label">Starting Loan</div>
              </div>
              <div className="stat-card-large">
                <div className="stat-number">50+</div>
                <div className="stat-label">Trusted Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS SECTION ===== */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Partners</span>
            <h2>Connected to <span className="highlight">India's Top Financial Brands</span></h2>
            <p>We've partnered with the best to bring you comprehensive financial solutions</p>
          </div>
          <div className="partners-grid">
            {partnerCompanies.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-icon">{partner.icon}</div>
                <h4>{partner.category}</h4>
                <div className="partner-companies">
                  {partner.companies.map((company, idx) => (
                    <span key={idx} className="company-tag">{company}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2>We Listen, Think Independently, <br /><span className="highlight">Advise & Take Action</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We uphold the highest ethical standards in every interaction, ensuring transparency and trust in our work.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Client Focus</h3>
              <p>We put our clients first, understanding their unique needs and delivering personalized financial solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We continuously innovate to bring you the best financial products and services in an ever-evolving market.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from customer service to financial advisory and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Financial Journey?</h2>
            <p>Join 10,000+ satisfied clients who trust BLUEPEAKFINSERV for their financial needs</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => handleNavigation('/services')}>Get Started Now</button>
              <button className="btn-outline-light" onClick={handleCall}>Schedule a Call</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;