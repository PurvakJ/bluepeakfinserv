import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const tabs = [
    "We connect you to the best financial products from India's top brands. Whether it's a loan, Demat account, insurance, or a credit card, we make it simple for you.",
    "Our mission is to empower you with the right financial choices. We compare and connect you to leading providers, helping you save time and money.",
    "We believe in transparency and convenience. Get connected to trusted partners for all your financial needs, from opening a Demat account to securing a loan."
  ];

  const statsData = [
    { 
      label: "Happy Clients", 
      value: "10,000+",
      icon: "vamtam-theme-layer"
    },
    { 
      label: "Partners", 
      value: "50+",
      icon: "vamtam-theme-stats"
    },
    { 
      label: "Established", 
      value: "2026",
      icon: "vamtam-theme-stats"
    },
    { 
      label: "Minimum Loan Disbursed", 
      value: "₹50000",
      icon: "vamtam-theme-layer"
    }
  ];

  const testimonials = [
    {
      quote: "BLUEPEAKFINSERV made opening my Demat account with Zerodha incredibly easy. Their guidance saved me time and helped me start my investment journey.",
      name: "Priya Sharma",
      title: "Mumbai – Investor",
      image: "https://finovate.vamtam.com/wp-content/uploads/2025/02/pexels-divinetechygirl-1181391-1-150x150.jpg"
    },
    {
      quote: "I got a fantastic health insurance policy through their comparison service. The entire process was smooth and hassle-free. Highly recommend BLUEPEAKFINSERV!",
      name: "Rahul Verma",
      title: "Delhi – Small Business Owner",
      image: "https://finovate.vamtam.com/wp-content/uploads/2025/02/pexels-shazardr-14156490-1-150x150.jpg"
    },
    {
      quote: "Thanks to BLUEPEAKFINSERV, I found the perfect credit card for my needs and even secured a quick personal loan. Truly a one-stop solution for all my financial needs.",
      name: "Ananya Reddy",
      title: "Bengaluru – IT Professional",
      image: "https://finovate.vamtam.com/wp-content/uploads/2025/02/pexels-thisisengineering-3861962-1-150x150.jpg"
    }
  ];

  const servicesData = [
    { title: "Loans" },
    { title: "Demat & Trading" },
    { title: "Insurance" },
    { title: "Credit Cards" },
    { title: "Mutual Funds" },
    { title: "SIP Report" }
  ];

  const insights = [
    {
      category: "FINANCING",
      title: "Use Physician Lifecycle Planning to Maximize Your Financial Potential",
      image: "https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-2162109308.jpg"
    },
    {
      category: "REPORT",
      title: "Diversity, Equity, and Inclusion",
      image: "https://finovate.vamtam.com/wp-content/uploads/2025/02/Piled-Up-Books-Mockup.png"
    },
    {
      category: "ADVISE",
      title: "How to Overcome the Impact of Inflation",
      image: "https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-1502868925.jpg"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum loan amount you offer?",
      answer: "We offer loans starting from just ₹50,000. We work with multiple lenders to get you the best possible rates and terms for your personal, business, or home loan needs."
    },
    {
      question: "Which Demat account providers do you connect with?",
      answer: "We provide seamless access to top Demat and trading platforms including Zerodha, Angel One, Upstox, and Motilal Oswal. You can compare their features and choose the one that best suits your investment style."
    },
    {
      question: "What types of insurance can I compare?",
      answer: "You can compare a wide range of insurance products, including health, life, car, and term insurance from leading providers like ICICI Lombard, Assure Asset, and Paisabazaar. We help you find the best coverage at the most competitive prices."
    },
    {
      question: "How do I open a savings account through you?",
      answer: "We offer easy account opening options. You can open a zero-balance savings account with Kotak Mahindra Bank or a feature-rich business account with Tide. Our team will guide you through the simple online process."
    }
  ];

  const partnerLogos = [
    "https://finovate.vamtam.com/wp-content/uploads/2025/03/hex.svg",
    "https://finovate.vamtam.com/wp-content/uploads/2025/03/MTgox.svg",
    "https://finovate.vamtam.com/wp-content/uploads/2025/03/savex.svg",
    "https://finovate.vamtam.com/wp-content/uploads/2025/03/coinbase.svg",
    "https://finovate.vamtam.com/wp-content/uploads/2025/03/konstruktion.svg",
    "https://finovate.vamtam.com/wp-content/uploads/2025/03/meta.svg"
  ];

  const partnerCompanies = [
    {
      category: "Demat & Trading",
      companies: ["Zerodha", "Angel One", "Upstox", "Motilal Oswal"]
    },
    {
      category: "Insurance",
      companies: ["ICICI Lombard", "Assure Asset", "Paisabazaar"]
    },
    {
      category: "Banking & Savings",
      companies: ["Kotak Mahindra Bank", "Tide"]
    },
    {
      category: "Loans & Credit",
      companies: ["Starting from ₹50,000", "Multiple Lenders"]
    }
  ];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      clearInterval(interval1);
    };
  }, [testimonials.length]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="home-container">

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tag">Premium Services</span>
          <h1 className="hero-title">
            Your Trusted Partner for <span className="color-accent-4">Loans, Insurance &amp; Investments</span>
          </h1>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started Now</button>
            <button className="btn-outline">Schedule a Call</button>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div>
                  <span className="stat-label">{stat.label}</span>
                  <h3 className="stat-value">{stat.value}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <div className="section-tag">WHO WE ARE</div>
            <h2 className="section-title">Simplifying Finance, <span className="color-accent-4">Delivering Trust</span>.</h2>
            <p className="about-description">
              BLUEPEAKFINSERV is your trusted financial partner, connecting you to India's top brands for loans, insurance, Demat accounts, and more.
            </p>
            <div className="about-buttons">
              <button className="btn-primary">Learn More</button>
              <button className="btn-outline">Our Philosophy</button>
            </div>
          </div>
          <div className="about-tabs">
            <div className="tabs-heading">
              {[1, 2, 3].map((_, index) => (
                <button 
                  key={index}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <p>{tabs[activeTab]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services-section">
        <div className="services-header">
          <div>
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">
              Your One-Stop <span className="color-accent-2">Financial</span> Marketplace
            </h2>
          </div>
          <button className="btn-link">Learn more →</button>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <h4>{service.title}</h4>
                <div className="service-icon">
                  <i className="vamtam-theme-arrow-link-up"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PARTNERS SECTION ===== */}
      <section className="partners-section">
        <div className="partners-header">
          <div className="section-tag">Our Partners</div>
          <h2 className="section-title">Connected to <span className="color-accent-4">India's Top Financial Brands</span></h2>
        </div>
        <div className="partners-grid">
          {partnerCompanies.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-icon">
                <i className="vamtam-theme-building"></i>
              </div>
              <div className="partner-content">
                <h4>{partner.category}</h4>
                <p>{partner.companies.join(' • ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* ===== VALUES SECTION ===== */}
<section className="values-section">
  <h2 className="values-title">We Listen, Think Independently, Advise & Take Action</h2>
  <div className="values-grid">
    <div className="value-card">
      <h3>Integrity</h3>
      <p>We uphold the highest ethical standards in every interaction, ensuring transparency, and trust in our work.</p>
    </div>
    <div className="value-card">
      <h3>Client Focus</h3>
      <p>We put our clients first, understanding their unique needs and delivering personalized financial solutions.</p>
    </div>
    <div className="value-card">
      <h3>Innovation</h3>
      <p>We continuously innovate to bring you the best financial products and services in an ever-evolving market.</p>
    </div>
    <div className="value-card">
      <h3>Excellence</h3>
      <p>We strive for excellence in everything we do, from customer service to financial advisory and support.</p>
    </div>
  </div>
</section>

      {/* ===== WHY US SECTION ===== */}
      <section className="why-us-section">
        <div className="why-us-content">
          <div className="why-us-header">
            <span className="section-tag">WHY US?</span>
          </div>
          <h2 className="section-title">
            You'll Know What<br />
            <span className="color-accent-4">You're Getting</span>
          </h2>
          <p className="why-us-description">We are Transparent Like that. No Gimmicks.</p>
          <button className="btn-secondary">Schedule a Call</button>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="team-section">
        <div className="team-header">
          <div>
            <div className="section-tag">BLUEPEAKFINSERV</div>
            <h2 className="section-title">
              Choosing The Right<br />
              <span className="color-accent-4">Financial Planning Team</span>
            </h2>
          </div>
        </div>
        <div className="team-cta">
          <div className="cta-badge">
            <img src="https://finovate.vamtam.com/wp-content/uploads/2025/02/cpa-k-350-thumbnail.png" alt="CPA" />
          </div>
          <div className="cta-content">
            <span className="cta-tag">TRUSTED PARTNER</span>
            <h3>SEC Registered Investment Advisor</h3>
            <p>We help you achieve your vision and cultivate confidence and peace of mind across your financial journey.</p>
            <button className="btn-primary">
              <span className="cta-btn-badge">CPA</span>
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <div>
            <div className="section-tag">TESTIMONIALS</div>
            <h2 className="section-title">
              Client Experiences That <span className="color-accent-4">Speak for Themselves</span>
            </h2>
          </div>
          <div className="testimonials-actions">
            <button className="btn-outline">Read All Testimonials</button>
            <div className="google-rating">
              <div className="rating-icon">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <g fill="none">
                    <path d="M20 10.22a8.4 8.4 0 0 0-.22-2.04H10.2v3.7h5.63a4.87 4.87 0 0 1-2.09 3.25l-.02.13 3.03 2.3.21.02A9.68 9.68 0 0 0 20 10.22" fill="#4285f4"/>
                    <path d="M10.2 20c2.76 0 5.07-.89 6.76-2.42l-3.22-2.45c-.86.6-2.02 1-3.54 1a6.13 6.13 0 0 1-5.8-4.15h-.12l-3.15 2.4-.04.1A10.22 10.22 0 0 0 10.2 20" fill="#34a853"/>
                    <path d="M4.4 11.98a6.05 6.05 0 0 1-.01-3.96V7.9l-3.2-2.43-.1.05a9.85 9.85 0 0 0 0 8.98z" fill="#fbbc05"/>
                    <path d="M10.2 3.87c1.92 0 3.21.8 3.95 1.49l2.88-2.76A9.91 9.91 0 0 0 10.2 0C6.21 0 2.77 2.24 1.1 5.51l3.3 2.51a6.16 6.16 0 0 1 5.81-4.15" fill="#eb4335"/>
                  </g>
                </svg>
              </div>
              <h6>4.9</h6>
              <span>GOOGLE REVIEWS</span>
            </div>
          </div>
        </div>
        <div className="testimonials-carousel">
          <button className="carousel-prev" onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
            <i className="vamtam-theme-arrow-link-down"></i>
          </button>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}>
              <div className="quote-icon">"</div>
              <p>"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-title">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
          <button className="carousel-next" onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}>
            <i className="vamtam-theme-arrow-link-up"></i>
          </button>
        </div>
      </section>

      {/* ===== BRAND LOGOS ===== */}
      <section className="brand-logos-section">
        <div className="brand-logos-grid">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="brand-logo">
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== INSIGHTS SECTION ===== */}
      <section className="insights-section">
        <div className="insights-header">
          <div>
            <div className="section-tag">INSIGHTS</div>
            <h2 className="section-title">
              Financial <span className="color-accent-4">Insights</span><br />From Our Experts
            </h2>
          </div>
          <button className="btn-outline">More Insights</button>
        </div>
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-image" style={{ backgroundImage: `url(${insight.image})` }}></div>
              <div className="insight-content">
                <span className="insight-category">{insight.category}</span>
                <h4>{insight.title}</h4>
                <div className="insight-icon">
                  <i className="vamtam-theme-arrow-link-up"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq-section">
        <div className="faq-header">
          <div>
            <div className="section-tag">Financial Planning FAQ's</div>
            <h2 className="section-title">Common questions on financial planning and investing</h2>
          </div>
          <button className="btn-outline">Learn More</button>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className="faq-icon">
                  {activeFaq === index ? '−' : '+'}
                </span>
              </button>
              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-newsletter">
          <span>Latest News & Resources</span>
          <div className="newsletter-input">
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;