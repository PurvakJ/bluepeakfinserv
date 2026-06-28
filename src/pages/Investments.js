// src/pages/Investments.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Investments.css';

function Investments() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('demat');

  const investmentTypes = [
    {
      id: 'demat',
      icon: '📈',
      title: 'Demat & Trading',
      description: 'Open your Demat account and start trading in stocks, ETFs, and IPOs. Compare top platforms and choose the one that fits your investment style.',
      features: [
        'Zero or low brokerage fees',
        'Instant account opening',
        'Trading in stocks, ETFs, IPOs',
        'Advanced trading tools',
        'Research and advisory services'
      ],
      providers: ['Zerodha', 'Angel One', 'Upstox', 'Motilal Oswal']
    },
    {
      id: 'mutual',
      icon: '📊',
      title: 'Mutual Funds',
      description: 'Invest in professionally managed mutual funds across equity, debt, and hybrid categories. Start with as little as ₹500.',
      features: [
        'Equity, debt, and hybrid funds',
        'ELSS tax-saving funds',
        'Professional fund management',
        'Systematic Investment Plans (SIP)',
        'Lump sum investment options'
      ],
      providers: ['Top AMCs', 'Expert Curated']
    },
    {
      id: 'sip',
      icon: '📋',
      title: 'SIP Reports',
      description: 'Track your investments with comprehensive SIP reports. Get real-time insights and performance analysis.',
      features: [
        'Daily portfolio updates',
        'Detailed performance reports',
        'Investment analytics',
        'Tax reports and statements',
        'Goal tracking dashboard'
      ],
      providers: ['Real-time', 'Comprehensive']
    }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Easy Start',
      description: 'Open your Demat account in minutes with minimal documentation'
    },
    {
      icon: '💰',
      title: 'Low Cost',
      description: 'Compare platforms and choose the one with the lowest brokerage fees'
    },
    {
      icon: '📱',
      title: 'Digital Experience',
      description: 'Manage all your investments from our mobile app and web platform'
    },
    {
      icon: '📊',
      title: 'Smart Insights',
      description: 'Get expert insights and recommendations for better investment decisions'
    }
  ];

  const faqs = [
    {
      question: 'What is a Demat account and how do I open one?',
      answer: 'A Demat account holds your shares and securities in electronic form. You can open one instantly through BLUEPEAKFINSERV by connecting with top providers like Zerodha, Angel One, Upstox, or Motilal Oswal. The process is completely digital and takes just a few minutes.'
    },
    {
      question: 'What is the minimum investment for mutual funds?',
      answer: 'You can start investing in mutual funds with as little as ₹500 through our platform. We offer a wide range of equity, debt, hybrid, and ELSS tax-saving funds from top AMCs.'
    },
    {
      question: 'How do I track my SIP investments?',
      answer: 'Our platform provides real-time tracking of all your SIP investments. You get daily portfolio updates, detailed performance reports, and investment analytics to help you make informed decisions.'
    },
    {
      question: 'Which trading platform should I choose?',
      answer: 'We help you compare top trading platforms including Zerodha, Angel One, Upstox, and Motilal Oswal. You can compare their brokerage fees, features, and research tools to choose the one that best suits your trading style.'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Active Investors' },
    { value: '₹50K+', label: 'Min Investment' },
    { value: '50+', label: 'Partner Platforms' },
    { value: '24/7', label: 'Support Available' }
  ];

  // Investment partners with logos
  const investmentPartners = [
    {
      name: 'Zerodha',
      logo: 'https://www.freelogovectors.net/wp-content/uploads/2021/12/zerodha-logo-freelogovectors.net_.png',
      description: "India's largest stock broker with zero brokerage on equity delivery",
      badge: '✓ Popular Choice',
      website: 'https://zerodha.com'
    },
    {
      name: 'Angel One',
      logo: 'https://etimg.etb2bimg.com/photo/85027775.cms',
      description: 'Full-service broker with advanced trading tools and research',
      badge: '✓ Trusted Partner',
      website: 'https://angelone.in'
    },
    {
      name: 'Upstox',
      logo: 'https://tradebrains.in/wp-content/uploads/2019/09/upstox-logo.png',
      description: 'Low-cost brokerage platform with user-friendly interface',
      badge: '✓ Recommended',
      website: 'https://upstox.com'
    },
    {
      name: 'Motilal Oswal',
      logo: 'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/afaqs/media/media_files/2025/01/31/4zUR2dgxsYElMMyDR4UU.png',
      description: 'Premium wealth management and trading services',
      badge: '✓ Premium Service',
      website: 'https://motilaloswal.com'
    },
    {
      name: 'Paywith Ring',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2DcHs0RaJ-I3lNEB5_r6r7hgfwn4IrMPuOA&s',
      description: 'Digital payment solutions and investment integration',
      badge: '✓ Trusted Partner',
      website: '#'
    },
    {
      name: 'Fincova',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVtIcNZGAfxdBzYZ0MqYL_IoCAZ3bcQxpbw&s',
      description: 'Financial technology and investment platform',
      badge: '✓ Trusted Partner',
      website: '#'
    },
    {
      name: 'Lemonn',
      logo: 'https://etedge-insights.com/wp-content/uploads/2025/01/resizecom_Logo_Lemonn_PNG_White-BG-002-2.png',
      description: 'Investment and wealth management solutions',
      badge: '✓ Trusted Partner',
      website: '#'
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
    <div className="investments-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Investment Solutions</span>
            <h1>Start Your <span className="highlight">Investment Journey</span></h1>
            <p>Open your Demat account, invest in mutual funds, and track your SIPs with BLUEPEAKFINSERV. Start with as little as ₹500.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => handleNavigation('/services')}>Open Demat Account</button>
              <button className="btn-outline" onClick={() => handleNavigation('/services')}>Explore Mutual Funds</button>
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

      {/* ===== INVESTMENT TYPES ===== */}
      <section className="investments-types-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Investment Products</span>
            <h2>Start Investing with <span className="highlight">BLUEPEAKFINSERV</span></h2>
            <p>Choose from Demat accounts, mutual funds, and SIPs to start your investment journey</p>
          </div>

          <div className="investment-tabs">
            {investmentTypes.map((type) => (
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

          {investmentTypes.map((type) => (
            <div key={type.id} className={`investment-detail ${activeTab === type.id ? 'active' : ''}`}>
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
                  <div className="detail-buttons">
                    <button className="btn-primary" onClick={handleCall}>
                      {type.id === 'demat' ? 'Open Account' : type.id === 'mutual' ? 'Invest Now' : 'View Reports'}
                    </button>
                    <button className="btn-outline" onClick={() => handleNavigation('/services')}>Learn More</button>
                  </div>
                </div>
                <div className="detail-image">
                  <div className="image-placeholder">
                    <span className="image-icon">{type.icon}</span>
                    <h4>{type.title}</h4>
                    <p>Start with just ₹500</p>
                    <span className="image-badge">✓ Trusted Platform</span>
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
            <span className="section-tag">Trading Platforms</span>
            <h2>Connected to <span className="highlight">Top Trading Platforms</span></h2>
            <p>Compare and choose from India's leading Demat and trading platforms</p>
          </div>
          <div className="partners-grid">
            {investmentPartners.map((partner, index) => (
              <div 
                key={index} 
                className="partner-card" 
                onClick={() => partner.website !== '#' && window.open(partner.website, '_blank')} 
                style={{ cursor: partner.website !== '#' ? 'pointer' : 'default' }}
              >
                <div className="partner-logo">
                  <img src={partner.logo} alt={`${partner.name} logo`} />
                </div>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
                <span className="partner-badge">{partner.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Benefits of Investing with <span className="highlight">BLUEPEAKFINSERV</span></h2>
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
            <h2>Start Investing in <span className="highlight">3 Simple Steps</span></h2>
          </div>
          <div className="steps-grid">
            <div className="step-card" onClick={() => handleNavigation('/services')} style={{ cursor: 'pointer' }}>
              <div className="step-number">1</div>
              <div className="step-icon">📝</div>
              <h3>Choose Your Platform</h3>
              <p>Compare and select from top trading platforms like Zerodha, Angel One, Upstox, or Motilal Oswal</p>
            </div>
            <div className="step-card" onClick={handleCall} style={{ cursor: 'pointer' }}>
              <div className="step-number">2</div>
              <div className="step-icon">📋</div>
              <h3>Complete KYC</h3>
              <p>Complete your digital KYC in minutes with minimal documentation</p>
            </div>
            <div className="step-card" onClick={handleCall} style={{ cursor: 'pointer' }}>
              <div className="step-number">3</div>
              <div className="step-icon">💹</div>
              <h3>Start Investing</h3>
              <p>Start trading in stocks, mutual funds, and create your SIP portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Compare Platforms</span>
            <h2>Find the Right <span className="highlight">Trading Platform</span></h2>
            <p>Compare features and choose the platform that best suits your investment needs</p>
          </div>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-cell">Features</div>
              <div className="comparison-cell">Zerodha</div>
              <div className="comparison-cell">Angel One</div>
              <div className="comparison-cell">Upstox</div>
              <div className="comparison-cell">Motilal Oswal</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Brokerage Fee</div>
              <div className="comparison-cell">₹0 delivery</div>
              <div className="comparison-cell">Low cost</div>
              <div className="comparison-cell">₹0 delivery</div>
              <div className="comparison-cell">Premium</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Minimum Investment</div>
              <div className="comparison-cell">₹500</div>
              <div className="comparison-cell">₹500</div>
              <div className="comparison-cell">₹500</div>
              <div className="comparison-cell">₹10,000</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Trading Tools</div>
              <div className="comparison-cell">Advanced</div>
              <div className="comparison-cell">Advanced</div>
              <div className="comparison-cell">User-friendly</div>
              <div className="comparison-cell">Premium</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Research Support</div>
              <div className="comparison-cell">Basic</div>
              <div className="comparison-cell">Comprehensive</div>
              <div className="comparison-cell">Basic</div>
              <div className="comparison-cell">Premium</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Mobile App</div>
              <div className="comparison-cell">⭐ 4.5</div>
              <div className="comparison-cell">⭐ 4.3</div>
              <div className="comparison-cell">⭐ 4.4</div>
              <div className="comparison-cell">⭐ 4.2</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2>Common Investment <span className="highlight">Questions</span></h2>
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
            <h2>Ready to Start Investing?</h2>
            <p>Join 10,000+ investors who trust BLUEPEAKFINSERV for their investment journey</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => handleNavigation('/services')}>Open Demat Account</button>
              <button className="btn-outline-light" onClick={handleCall}>Start SIP</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Investments;