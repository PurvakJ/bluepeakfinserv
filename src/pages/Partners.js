// src/pages/Partners.js
import React, { useState } from 'react';
import './Partners.css';

function Partners() {
  const [activePartner, setActivePartner] = useState(null);

  const partnerCategories = [
    {
      id: 'demat',
      icon: '📈',
      title: 'Demat & Trading',
      description: 'Open your Demat account with India\'s leading trading platforms',
      partners: [
        {
          name: 'Zerodha',
          logo: 'https://www.freelogovectors.net/wp-content/uploads/2021/12/zerodha-logo-freelogovectors.net_.png',
          description: 'India\'s largest stock broker with zero brokerage on delivery',
          features: ['Zero Brokerage', 'Advanced Trading Tools', 'Mobile App'],
          rating: '4.5 ⭐',
          website: 'https://zerodha.com'
        },
        {
          name: 'Angel One',
          logo: 'https://etimg.etb2bimg.com/photo/85027775.cms',
          description: 'Full-service broker with comprehensive research and advisory',
          features: ['Research Support', 'Low Cost', 'Expert Advisory'],
          rating: '4.3 ⭐',
          website: 'https://angelone.in'
        },
        {
          name: 'Upstox',
          logo: 'https://tradebrains.in/wp-content/uploads/2019/09/upstox-logo.png',
          description: 'User-friendly platform with competitive pricing',
          features: ['Low Brokerage', 'Easy Interface', 'Quick KYC'],
          rating: '4.4 ⭐',
          website: 'https://upstox.com'
        },
        {
          name: 'Motilal Oswal',
          logo: 'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/afaqs/media/media_files/2025/01/31/4zUR2dgxsYElMMyDR4UU.png',
          description: 'Premium wealth management and trading services',
          features: ['Premium Service', 'Wealth Management', 'Research Reports'],
          rating: '4.2 ⭐',
          website: 'https://motilaloswal.com'
        }
      ]
    },
    {
      id: 'insurance',
      icon: '🛡️',
      title: 'Insurance',
      description: 'Comprehensive insurance coverage from trusted providers',
      partners: [
        {
          name: 'ICICI Lombard',
          logo: 'https://www.freelogovectors.net/wp-content/uploads/2020/09/icici_lombard_logo.png',
          description: 'Leading health, car, and travel insurance provider',
          features: ['Cashless Claims', 'Network Hospitals', '24/7 Support'],
          rating: '4.4 ⭐',
          website: 'https://www.icicilombard.com'
        },
        {
          name: 'Assure Asset',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZgn39yxHPjicvtucvbjUtlaAYDgw-kbw_Vg&s',
          description: 'Trusted life insurance and investment solutions',
          features: ['Life Coverage', 'Investment Options', 'Tax Benefits'],
          rating: '4.3 ⭐',
          website: 'https://www.assureasset.com'
        },
        {
          name: 'Paisabazaar',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paisabazaar-logo.svg/1280px-Paisabazaar-logo.svg.png',
          description: 'Comprehensive insurance comparison platform',
          features: ['Easy Comparison', 'Best Rates', 'Quick Processing'],
          rating: '4.2 ⭐',
          website: 'https://www.paisabazaar.com'
        }
      ]
    },
    {
      id: 'banking',
      icon: '🏦',
      title: 'Banking & Savings',
      description: 'Premium banking services for your business needs',
      partners: [
        {
          name: 'Kotak Mahindra Bank',
          logo: 'https://i.pinimg.com/736x/95/ee/14/95ee145596f56c0a699a1371a0c70151.jpg',
          description: 'Zero-balance savings account with premium banking features',
          features: ['Zero Balance', 'Premium Features', 'Mobile Banking'],
          rating: '4.5 ⭐',
          website: 'https://www.kotak.com'
        },
        {
          name: 'Tide',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEkJ84EnIyXzrQ7H3WrKDGrG5xu8ciVVLAg&s',
          description: 'Business banking with smart features for growing businesses',
          features: ['Business Account', 'Expense Management', 'Quick Setup'],
          rating: '4.3 ⭐',
          website: 'https://www.tide.co'
        }
      ]
    },
    {
      id: 'lenders',
      icon: '💰',
      title: 'Loan & Credit Partners',
      description: 'Access to multiple lenders for competitive loan rates',
      partners: [
        {
          name: 'Multiple Lenders',
          logo: 'https://t4.ftcdn.net/jpg/01/83/77/65/360_F_183776586_ETr3Lg7pmP2bw0dF2vyNlBaf93eM5TaA.jpg',
          description: 'Access to 50+ lenders for competitive rates',
          features: ['Competitive Rates', 'Quick Approval', 'Flexible Tenure'],
          rating: '4.4 ⭐',
          website: '#'
        }
      ]
    }
  ];

  const stats = [
    { value: '50+', label: 'Trusted Partners' },
    { value: '10K+', label: 'Happy Clients' },
    { value: '4.9', label: 'Average Rating' },
    { value: '24/7', label: 'Partner Support' }
  ];

  const testimonials = [
    {
      quote: "BLUEPEAKFINSERV's partner network is exceptional. I found the perfect trading platform and insurance provider through their recommendations.",
      name: "Rahul Sharma",
      title: "Investor, Delhi"
    },
    {
      quote: "Thanks to BLUEPEAKFINSERV, I was able to compare and choose from India's top banking partners. The process was seamless and transparent.",
      name: "Sneha Patel",
      title: "Small Business Owner, Mumbai"
    }
  ];

  // All partner logos including new ones
  const allPartnerLogos = [
    {
      name: 'Zerodha',
      logo: 'https://www.freelogovectors.net/wp-content/uploads/2021/12/zerodha-logo-freelogovectors.net_.png',
      website: 'https://zerodha.com'
    },
    {
      name: 'Angel One',
      logo: 'https://etimg.etb2bimg.com/photo/85027775.cms',
      website: 'https://angelone.in'
    },
    {
      name: 'Upstox',
      logo: 'https://tradebrains.in/wp-content/uploads/2019/09/upstox-logo.png',
      website: 'https://upstox.com'
    },
    {
      name: 'ICICI Lombard',
      logo: 'https://www.freelogovectors.net/wp-content/uploads/2020/09/icici_lombard_logo.png',
      website: 'https://www.icicilombard.com'
    },
    {
      name: 'Paisabazaar',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paisabazaar-logo.svg/1280px-Paisabazaar-logo.svg.png',
      website: 'https://www.paisabazaar.com'
    },
    {
      name: 'Kotak',
      logo: 'https://i.pinimg.com/736x/95/ee/14/95ee145596f56c0a699a1371a0c70151.jpg',
      website: 'https://www.kotak.com'
    },
    {
      name: 'Tide',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEkJ84EnIyXzrQ7H3WrKDGrG5xu8ciVVLAg&s',
      website: 'https://www.tide.co'
    },
    {
      name: 'Fincova',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVtIcNZGAfxdBzYZ0MqYL_IoCAZ3bcQxpbw&s',
      website: '#'
    },
    {
      name: 'Lemonn',
      logo: 'https://etedge-insights.com/wp-content/uploads/2025/01/resizecom_Logo_Lemonn_PNG_White-BG-002-2.png',
      website: '#'
    }
  ];

  // Phone call handler
  const handleCall = () => {
    window.location.href = 'tel:8198000803';
  };

  // Partner connect handler
  const handlePartnerConnect = (partnerName, website) => {
    alert(`Connecting you to ${partnerName}... Our team will assist you shortly.`);
    handleCall();
  };

  return (
    <div className="partners-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Our Partners</span>
            <h1>Trusted <span className="highlight">Partners</span> Network</h1>
            <p>We collaborate with India's leading financial institutions to bring you the best products and services.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => {
                document.querySelector('.partners-section').scrollIntoView({ behavior: 'smooth' });
              }}>Explore Partners</button>
              <button className="btn-outline" onClick={handleCall}>Become a Partner</button>
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

      {/* ===== PARTNER CATEGORIES ===== */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Partner Categories</span>
            <h2>Our <span className="highlight">Trusted Partners</span></h2>
            <p>Working with India's top financial institutions to serve you better</p>
          </div>

          {partnerCategories.map((category) => (
            <div key={category.id} className="partner-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className="partner-grid">
                {category.partners.map((partner, index) => (
                  <div
                    key={index}
                    className={`partner-card ${activePartner === `${category.id}-${index}` ? 'expanded' : ''}`}
                    onClick={() => setActivePartner(
                      activePartner === `${category.id}-${index}` ? null : `${category.id}-${index}`
                    )}
                  >
                    <div className="partner-logo">
                      <img src={partner.logo} alt={`${partner.name} logo`} />
                    </div>
                    <h4>{partner.name}</h4>
                    <p className="partner-description">{partner.description}</p>
                    <div className="partner-rating">{partner.rating}</div>
                    {activePartner === `${category.id}-${index}` && (
                      <div className="partner-features">
                        <h5>Key Features</h5>
                        <ul>
                          {partner.features.map((feature, idx) => (
                            <li key={idx}>✓ {feature}</li>
                          ))}
                        </ul>
                        <button
                          className="btn-partner"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePartnerConnect(partner.name, partner.website);
                          }}
                        >
                          Connect Now →
                        </button>
                        {partner.website && partner.website !== '#' && (
                          <button
                            className="btn-partner-website"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(partner.website, '_blank');
                            }}
                          >
                            Visit Website →
                          </button>
                        )}
                      </div>
                    )}
                    <div className="partner-expand">
                      {activePartner === `${category.id}-${index}` ? '−' : '+'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PARTNERSHIP BENEFITS ===== */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Partner With Us</span>
            <h2>Benefits of <span className="highlight">Partnering</span> with BLUEPEAKFINSERV</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Increased Reach</h3>
              <p>Connect with 10,000+ active clients across India</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Trusted Network</h3>
              <p>Join a network of 50+ trusted financial partners</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Brand Visibility</h3>
              <p>Enhanced brand presence across our digital platforms</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Easy Integration</h3>
              <p>Seamless integration with our technology platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What Our Partners Say</span>
            <h2>Partner <span className="highlight">Testimonials</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p>{testimonial.quote}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNER LOGOS ===== */}
      <section className="logos-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Partner Ecosystem</span>
            <h2>Trusted by <span className="highlight">Industry Leaders</span></h2>
          </div>
          <div className="logos-grid">
            {allPartnerLogos.map((partner, index) => (
              <div 
                key={index} 
                className="logo-item" 
                onClick={() => partner.website !== '#' && window.open(partner.website, '_blank')} 
                style={{ cursor: partner.website !== '#' ? 'pointer' : 'default' }}
              >
                <img src={partner.logo} alt={partner.name} />
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BECOME A PARTNER ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Become a Partner?</h2>
            <p>Join our network of 50+ trusted financial partners and grow together</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleCall}>Partner With Us</button>
              <button className="btn-outline-light" onClick={handleCall}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;