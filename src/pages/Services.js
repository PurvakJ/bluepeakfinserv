// src/pages/Services.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'loans', label: 'Loans' },
    { id: 'investments', label: 'Investments' },
    { id: 'insurance', label: 'Insurance' },
    { id: 'banking', label: 'Banking & Cards' }
  ];

  const services = [
    {
      id: 1,
      category: 'loans',
      icon: '💰',
      title: 'Business Loans',
      description: 'Get quick and easy business loans starting from ₹50,000 with minimal documentation and competitive interest rates.',
      features: ['Quick Approval', 'Competitive Rates', 'Flexible Tenure'],
      link: '/loans',
      popular: true
    },
    {
      id: 2,
      category: 'loans',
      icon: '🚀',
      title: 'Startup Loans',
      description: 'Special funding solutions for startups with innovative business ideas. No collateral required for up to ₹25 Lakhs.',
      features: ['No Collateral', 'Moratorium Period', 'Dedicated Support'],
      link: '/loans',
      popular: false
    },
    {
      id: 3,
      category: 'loans',
      icon: '🏠',
      title: 'Personal Loans',
      description: 'Quick personal loans for your financial needs. Get approved in 24 hours with minimal paperwork.',
      features: ['24hr Approval', 'Minimal Paperwork', 'Flexible Tenure'],
      link: '/loans',
      popular: false
    },
    {
      id: 4,
      category: 'insurance',
      icon: '🛡️',
      title: 'Health Insurance',
      description: 'Comprehensive health insurance plans for you and your family. Compare plans from top providers.',
      features: ['Cashless Claims', 'Network Hospitals', 'Tax Benefits'],
      link: '/insurance',
      popular: true
    },
    {
      id: 5,
      category: 'insurance',
      icon: '📋',
      title: 'Life Insurance',
      description: 'Secure your family\'s future with comprehensive life insurance plans. Choose from term plans and ULIPs.',
      features: ['High Coverage', 'Flexible Terms', 'Critical Illness Cover'],
      link: '/insurance',
      popular: false
    },
    {
      id: 6,
      category: 'insurance',
      icon: '🚗',
      title: 'Car Insurance',
      description: 'Protect your vehicle with comprehensive car insurance. Get coverage for damages, theft, and third-party liability.',
      features: ['Comprehensive Cover', 'Roadside Assistance', 'No Claim Bonus'],
      link: '/insurance',
      popular: false
    },
    {
      id: 7,
      category: 'investments',
      icon: '📈',
      title: 'Demat & Trading',
      description: 'Open your Demat account with India\'s top trading platforms. Start investing in stocks, ETFs, and IPOs.',
      features: ['Zero Brokerage', 'Advanced Tools', 'Expert Advisory'],
      link: '/investments',
      popular: true
    },
    {
      id: 8,
      category: 'investments',
      icon: '📊',
      title: 'Mutual Funds',
      description: 'Invest in professionally managed mutual funds across equity, debt, and hybrid categories.',
      features: ['Expert Management', 'Low Investment', 'Tax Benefits'],
      link: '/investments',
      popular: false
    },
    {
      id: 9,
      category: 'investments',
      icon: '📋',
      title: 'SIP Reports',
      description: 'Track your investments with comprehensive SIP reports. Get real-time insights and performance analysis.',
      features: ['Real-time Updates', 'Performance Analysis', 'Tax Reports'],
      link: '/investments',
      popular: false
    },
    {
      id: 10,
      category: 'banking',
      icon: '💳',
      title: 'Credit Cards',
      description: 'Premium business credit cards with exclusive rewards, cashback, and travel benefits.',
      features: ['2x Rewards', 'Cashback', 'Travel Benefits'],
      link: '/offers',
      popular: true
    },
    {
      id: 11,
      category: 'banking',
      icon: '🏦',
      title: 'Saving Accounts',
      description: 'High-yield business saving accounts with zero balance options and premium banking features.',
      features: ['Zero Balance', 'Premium Features', 'Mobile Banking'],
      link: '/partners',
      popular: false
    },
    {
      id: 12,
      category: 'banking',
      icon: '💳',
      title: 'Expense Cards',
      description: 'Corporate expense cards with real-time tracking, spending limits, and rewards on business spends.',
      features: ['Real-time Tracking', 'Spending Limits', '1% Cashback'],
      link: '/offers',
      popular: false
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Happy Clients' },
    { value: '50+', label: 'Services' },
    { value: '24/7', label: 'Support' },
    { value: '4.9', label: '⭐ Rating' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="services-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Our Services</span>
            <h1>Comprehensive <span className="highlight">Financial Solutions</span></h1>
            <p>From loans and insurance to investments and banking - we've got all your financial needs covered under one roof.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Explore Services</button>
              <button className="btn-outline">Schedule a Call</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2>Explore Our <span className="highlight">Services</span></h2>
            <p>Choose from a wide range of financial services designed to meet your business and personal needs</p>
          </div>

          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className={`service-card ${service.popular ? 'featured' : ''}`}>
                {service.popular && (
                  <div className="service-badge">⭐ Popular</div>
                )}
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to={service.link} className="service-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="no-services">
              <span className="no-services-icon">🔍</span>
              <h3>No services found in this category</h3>
              <p>Check back later for new services</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== SERVICE HIGHLIGHTS ===== */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Service <span className="highlight">Highlights</span></h2>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">⚡</div>
              <h3>Quick Processing</h3>
              <p>Get approval within 24 hours for loans and other services</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤝</div>
              <h3>Trusted Partners</h3>
              <p>Connected to India's top financial institutions</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📱</div>
              <h3>Digital Experience</h3>
              <p>Complete digital journey from application to approval</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🛡️</div>
              <h3>Secure & Safe</h3>
              <p>Bank-grade security for all your transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>Get Started in <span className="highlight">3 Steps</span></h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">🔍</div>
              <h3>Explore Services</h3>
              <p>Browse our comprehensive range of financial services</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">📋</div>
              <h3>Choose & Apply</h3>
              <p>Select the service you need and complete the application</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">✅</div>
              <h3>Get Connected</h3>
              <p>Get connected to the right partner and start benefiting</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-card">
            <div className="testimonial-icon">⭐</div>
            <blockquote>
              "BLUEPEAKFINSERV has been a game-changer for my business. From getting a quick loan to finding the right insurance, they've been with us every step of the way."
            </blockquote>
            <div className="testimonial-author">
              <strong>Rahul Sharma</strong>
              <span>Business Owner, Mumbai</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Explore our services and find the perfect solution for your needs</p>
            <div className="cta-buttons">
              <button className="btn-primary">Explore All Services</button>
              <button className="btn-outline-light">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;