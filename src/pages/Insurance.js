// src/pages/Insurance.js
import React, { useState } from 'react';
import './Insurance.css';

function Insurance() {
  const [activeTab, setActiveTab] = useState('health');

  const insuranceTypes = [
    {
      id: 'health',
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family. Compare plans from top providers and get the best coverage at the most competitive prices.',
      features: [
        'Cashless treatment at network hospitals',
        'Pre and post hospitalization coverage',
        'Day care procedures covered',
        'No claim bonus benefits',
        'Tax benefits under Section 80D'
      ],
      providers: ['ICICI Lombard', 'Assure Asset', 'Paisabazaar']
    },
    {
      id: 'life',
      icon: '🛡️',
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with comprehensive life insurance plans. Choose from term plans, endowment plans, and ULIPs.',
      features: [
        'High sum assured at affordable premiums',
        'Flexible policy terms',
        'Critical illness riders available',
        'Tax benefits under Section 80C',
        'Multiple payout options'
      ],
      providers: ['ICICI Lombard', 'Assure Asset', 'Paisabazaar']
    },
    {
      id: 'car',
      icon: '🚗',
      title: 'Car Insurance',
      description: 'Protect your vehicle with comprehensive car insurance. Get coverage for damages, theft, and third-party liability.',
      features: [
        'Comprehensive coverage',
        'Cashless repair network',
        'No claim bonus',
        '24/7 roadside assistance',
        'Easy claim settlement'
      ],
      providers: ['ICICI Lombard', 'Assure Asset', 'Paisabazaar']
    },
    {
      id: 'term',
      icon: '📋',
      title: 'Term Insurance',
      description: 'Pure protection plans that provide financial security to your loved ones in case of unforeseen events.',
      features: [
        'High coverage at low premiums',
        'Flexible tenure options',
        'Critical illness cover',
        'Accidental death benefit',
        'Premium waiver options'
      ],
      providers: ['ICICI Lombard', 'Assure Asset', 'Paisabazaar']
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'We compare multiple providers to get you the most competitive rates'
    },
    {
      icon: '📱',
      title: 'Easy Comparison',
      description: 'Compare policies side-by-side and choose what fits your needs'
    },
    {
      icon: '⚡',
      title: 'Quick Processing',
      description: 'Get your policy issued quickly with minimal documentation'
    },
    {
      icon: '🤝',
      title: 'Claim Assistance',
      description: 'We guide you through the claims process for hassle-free settlement'
    }
  ];

  const faqs = [
    {
      question: 'What types of insurance do you offer?',
      answer: 'We offer a comprehensive range of insurance products including health insurance, life insurance, car insurance, and term insurance. We compare plans from leading providers like ICICI Lombard, Assure Asset, and Paisabazaar to help you find the best coverage.'
    },
    {
      question: 'How can I compare insurance plans?',
      answer: 'Simply select the type of insurance you need, and we\'ll show you plans from multiple providers side-by-side. You can compare premiums, coverage, features, and benefits to make an informed decision.'
    },
    {
      question: 'What is the claim process?',
      answer: 'The claim process is simple and hassle-free. You can file a claim online, through our app, or by contacting our support team. We\'ll guide you through the process and ensure quick settlement.'
    },
    {
      question: 'Do you offer tax benefits on insurance?',
      answer: 'Yes, most insurance policies offer tax benefits under Section 80C, 80D, and 10(10D) of the Income Tax Act. The specific benefits depend on the type of policy and provider.'
    }
  ];

  return (
    <div className="insurance-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Insurance Solutions</span>
            <h1>Protect What <span className="highlight">Matters Most</span></h1>
            <p>Compare and choose from the best insurance plans from India's top providers. Get comprehensive coverage for health, life, car, and more.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Compare Plans</button>
              <button className="btn-outline">Get a Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSURANCE TYPES ===== */}
      <section className="insurance-types-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Insurance Products</span>
            <h2>Find the Right <span className="highlight">Insurance</span> Plan</h2>
            <p>Choose from a wide range of insurance products from India's top providers</p>
          </div>

          <div className="insurance-tabs">
            {insuranceTypes.map((type) => (
              <button
                key={type.id}
                className={`tab-btn ${activeTab === type.id ? 'active' : ''}`}
                onClick={() => setActiveTab(type.id)}
              >
                <span className="tab-icon">{type.icon}</span>
                {type.title}
              </button>
            ))}
          </div>

          {insuranceTypes.map((type) => (
            <div key={type.id} className={`insurance-detail ${activeTab === type.id ? 'active' : ''}`}>
              <div className="detail-grid">
                <div className="detail-content">
                  <h3>{type.title}</h3>
                  <p className="detail-description">{type.description}</p>
                  <ul className="feature-list">
                    {type.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                  <div className="provider-tags">
                    {type.providers.map((provider, index) => (
                      <span key={index} className="provider-tag">{provider}</span>
                    ))}
                  </div>
                  <button className="btn-primary">Get Quote Now</button>
                </div>
                <div className="detail-image">
                  <div className="image-placeholder">
                    <span className="image-icon">{type.icon}</span>
                    <h4>{type.title}</h4>
                    <p>Starting from affordable premiums</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PARTNERS SECTION ===== */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Insurance Partners</span>
            <h2>Connected to <span className="highlight">Top Providers</span></h2>
            <p>We partner with India's leading insurance companies to bring you the best coverage</p>
          </div>
          <div className="partners-grid">
          <div className="partner-card">
  <div className="partner-icon">🏦</div>
  <h3>ICICI Lombard</h3>
  <p>Health, car, and travel insurance with extensive network coverage</p>
  <span className="partner-badge">✓ Trusted Partner</span>
</div>
<div className="partner-card">
  <div className="partner-icon">🛡️</div>
  <h3>Assure Asset</h3>
  <p>Life insurance and investment solutions for long-term security</p>
  <span className="partner-badge">✓ Trusted Partner</span>
</div>
<div className="partner-card">
  <div className="partner-icon">📊</div>
  <h3>Paisabazaar</h3>
  <p>Comprehensive insurance comparison platform</p>
  <span className="partner-badge">✓ Trusted Partner</span>
</div>
<div className="partner-card">
  <div className="partner-icon">🏥</div>
  <h3>Max Life Insurance</h3>
  <p>Term life insurance, ULIPs, and retirement solutions with high claim settlement ratio</p>
  <span className="partner-badge">✓ Trusted Partner</span>
</div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Benefits of Using <span className="highlight">BLUEPEAKFINSERV</span></h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>Get Insured in <span className="highlight">3 Simple Steps</span></h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📋</div>
              <h3>Compare Plans</h3>
              <p>Browse and compare insurance plans from multiple providers side-by-side</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">📝</div>
              <h3>Choose & Apply</h3>
              <p>Select the best plan for your needs and complete the application online</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">✅</div>
              <h3>Get Covered</h3>
              <p>Receive your policy instantly and enjoy comprehensive coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2>Common Insurance <span className="highlight">Questions</span></h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Protect Your Future?</h2>
            <p>Get the best insurance coverage with BLUEPEAKFINSERV</p>
            <div className="cta-buttons">
              <button className="btn-primary">Compare Plans</button>
              <button className="btn-outline-light">Call for Assistance</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insurance;