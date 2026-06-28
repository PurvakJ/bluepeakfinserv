// src/pages/Offers.js
import React, { useState } from 'react';
import './Offers.css';

function Offers() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [claimedOffers, setClaimedOffers] = useState([]);

  const categories = [
    { id: 'all', label: 'All Offers' },
    { id: 'loans', label: 'Loans' },
    { id: 'insurance', label: 'Insurance' },
    { id: 'investments', label: 'Investments' },
    { id: 'cards', label: 'Cards' }
  ];

  const offers = [
    {
      id: 1,
      category: 'loans',
      icon: '💰',
      title: 'Business Loan Special',
      description: 'Get up to ₹50 Lakhs business loan with 0% processing fee. Limited time offer for new customers.',
      discount: '0% Processing Fee',
      savings: 'Save up to ₹50,000',
      validity: 'Valid till Dec 31, 2026',
      popular: true
    },
    {
      id: 2,
      category: 'loans',
      icon: '🚀',
      title: 'Startup Loan Launch Offer',
      description: 'First 100 startups get 6 months moratorium and 1% lower interest rate.',
      discount: '1% Lower Rate',
      savings: 'Save ₹25,000+',
      validity: 'Limited slots available',
      popular: false
    },
    {
      id: 3,
      category: 'insurance',
      icon: '🛡️',
      title: 'Insurance Combo Deal',
      description: 'Bundle health and life insurance policies with 20% discount on premium.',
      discount: '20% Off',
      savings: 'Save ₹15,000+',
      validity: 'Valid till Mar 31, 2026',
      popular: true
    },
    {
      id: 4,
      category: 'investments',
      icon: '📈',
      title: 'Free Demat Account Opening',
      description: 'Open your Demat account with zero AMC (Annual Maintenance Charges) for the first year.',
      discount: 'Free Account',
      savings: 'Save ₹1,500',
      validity: 'Valid till Feb 28, 2026',
      popular: false
    },
    {
      id: 5,
      category: 'cards',
      icon: '💳',
      title: 'Credit Card Rewards Boost',
      description: 'Get 2x reward points on all business spends for the first 3 months.',
      discount: '2x Rewards',
      savings: 'Earn ₹5,000+ cashback',
      validity: 'Valid for new cardholders',
      popular: false
    },
    {
      id: 6,
      category: 'investments',
      icon: '📊',
      title: 'SIP Investment Bonus',
      description: 'Start your SIP with just ₹500 and get ₹500 cashback on your first investment.',
      discount: '₹500 Cashback',
      savings: '₹500 Bonus',
      validity: 'Valid till Jan 31, 2026',
      popular: true
    },
    {
      id: 7,
      category: 'cards',
      icon: '💳',
      title: 'Corporate Expense Card',
      description: 'Get corporate expense cards with 1% cashback on all business spends.',
      discount: '1% Cashback',
      savings: 'Unlimited cashback',
      validity: 'No expiration',
      popular: false
    },
    {
      id: 8,
      category: 'insurance',
      icon: '🚗',
      title: 'Car Insurance Festival Offer',
      description: 'Get comprehensive car insurance with 15% discount and free roadside assistance.',
      discount: '15% Off',
      savings: 'Save ₹8,000+',
      validity: 'Limited period offer',
      popular: false
    },
    {
      id: 9,
      category: 'loans',
      icon: '🏠',
      title: 'Personal Loan Festival Offer',
      description: 'Get personal loans at 10.5% p.a. with no prepayment charges.',
      discount: '10.5% p.a.',
      savings: 'Save ₹20,000+',
      validity: 'Valid till Mar 31, 2026',
      popular: false
    }
  ];

  const stats = [
    { value: '50+', label: 'Active Offers' },
    { value: '₹50K', label: 'Max Savings' },
    { value: '24/7', label: 'Customer Support' },
    { value: '4.9', label: '⭐ Customer Rating' }
  ];

  const filteredOffers = activeCategory === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === activeCategory);


  // Phone call handler
  const handleCall = () => {
    window.location.href = 'tel:8198000803';
  };

  const handleClaimOffer = (offerId) => {
    if (!claimedOffers.includes(offerId)) {
      setClaimedOffers([...claimedOffers, offerId]);
      // Show success message
      alert('🎉 Offer claimed successfully! Our team will contact you shortly with details.');
      // Also trigger phone call for immediate assistance
      handleCall();
    } else {
      alert('You have already claimed this offer!');
    }
  };

  return (
    <div className="offers-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Exclusive Offers</span>
            <h1>Save More with <span className="highlight">BLUEPEAKFINSERV</span></h1>
            <p>Discover exclusive deals on loans, insurance, investments, and credit cards. Limited time offers with maximum savings.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => {
                document.querySelector('.offers-section').scrollIntoView({ behavior: 'smooth' });
              }}>View All Offers</button>
              <button className="btn-outline" onClick={handleCall}>Get Notified</button>
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

      {/* ===== OFFERS SECTION ===== */}
      <section className="offers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Current Offers</span>
            <h2>Exclusive <span className="highlight">Deals & Discounts</span></h2>
            <p>Explore our curated offers and start saving today</p>
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

          <div className="offers-grid">
            {filteredOffers.map((offer) => (
              <div key={offer.id} className={`offer-card ${offer.popular ? 'featured' : ''}`}>
                {offer.popular && (
                  <div className="offer-badge">⭐ Popular</div>
                )}
                <div className="offer-icon">{offer.icon}</div>
                <h3>{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <div className="offer-details">
                  <div className="offer-discount">{offer.discount}</div>
                  <div className="offer-savings">💰 {offer.savings}</div>
                </div>
                <div className="offer-validity">📅 {offer.validity}</div>
                <button 
                  className={`btn-claim ${claimedOffers.includes(offer.id) ? 'claimed' : ''}`}
                  onClick={() => handleClaimOffer(offer.id)}
                  disabled={claimedOffers.includes(offer.id)}
                >
                  {claimedOffers.includes(offer.id) ? '✓ Claimed' : 'Claim Offer →'}
                </button>
              </div>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <div className="no-offers">
              <span className="no-offers-icon">🔍</span>
              <h3>No offers available in this category</h3>
              <p>Check back later for new deals</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>Claim Your Offer in <span className="highlight">3 Steps</span></h2>
          </div>
          <div className="steps-grid">
            <div className="step-card" onClick={() => {
              document.querySelector('.offers-section').scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <div className="step-number">1</div>
              <div className="step-icon">🔍</div>
              <h3>Browse Offers</h3>
              <p>Explore our curated list of exclusive offers across all categories</p>
            </div>
            <div className="step-card" onClick={handleCall} style={{ cursor: 'pointer' }}>
              <div className="step-number">2</div>
              <div className="step-icon">📋</div>
              <h3>Choose & Apply</h3>
              <p>Select the offer that suits you best and click "Claim Offer"</p>
            </div>
            <div className="step-card" onClick={handleCall} style={{ cursor: 'pointer' }}>
              <div className="step-number">3</div>
              <div className="step-icon">✅</div>
              <h3>Get Benefits</h3>
              <p>Receive your offer details via email and start saving immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY HIGHLIGHTS ===== */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Featured Categories</span>
            <h2>Offers by <span className="highlight">Category</span></h2>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card" onClick={() => {
              setActiveCategory('loans');
              document.querySelector('.offers-section').scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <span className="highlight-icon">💰</span>
              <h3>Loans</h3>
              <p>0% processing fee, lower interest rates, and moratorium periods</p>
              <span className="highlight-count">{offers.filter(o => o.category === 'loans').length} offers</span>
            </div>
            <div className="highlight-card" onClick={() => {
              setActiveCategory('insurance');
              document.querySelector('.offers-section').scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <span className="highlight-icon">🛡️</span>
              <h3>Insurance</h3>
              <p>Up to 20% discount on premiums and combo deals</p>
              <span className="highlight-count">{offers.filter(o => o.category === 'insurance').length} offers</span>
            </div>
            <div className="highlight-card" onClick={() => {
              setActiveCategory('investments');
              document.querySelector('.offers-section').scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <span className="highlight-icon">📈</span>
              <h3>Investments</h3>
              <p>Free Demat account, SIP bonuses, and investment rewards</p>
              <span className="highlight-count">{offers.filter(o => o.category === 'investments').length} offers</span>
            </div>
            <div className="highlight-card" onClick={() => {
              setActiveCategory('cards');
              document.querySelector('.offers-section').scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <span className="highlight-icon">💳</span>
              <h3>Cards</h3>
              <p>2x reward points, cashback, and corporate expense cards</p>
              <span className="highlight-count">{offers.filter(o => o.category === 'cards').length} offers</span>
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
              "BLUEPEAKFINSERV helped me save over ₹40,000 with their exclusive offers. The process was seamless and the savings were incredible!"
            </blockquote>
            <div className="testimonial-author">
              <strong>Priya Patel</strong>
              <span>Small Business Owner, Mumbai</span>
            </div>
            <div className="testimonial-rating">⭐⭐⭐⭐⭐ 4.9/5</div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Saving?</h2>
            <p>Explore our offers and start your savings journey today</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => {
                document.querySelector('.offers-section').scrollIntoView({ behavior: 'smooth' });
              }}>View All Offers</button>
              <button className="btn-outline-light" onClick={handleCall}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offers;