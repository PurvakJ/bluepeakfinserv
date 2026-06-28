// src/pages/Support.js
import React, { useState } from 'react';
import './Support.css';

function Support() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqs = [
    {
      q: 'Who can open a BLUEPEAKFINSERV account?',
      a: 'Anyone above 18 years with a valid PAN card and Aadhaar linked to a mobile number can open an account. The applicant must be an Indian citizen.'
    },
    {
      q: 'What is the starting loan amount?',
      a: 'We offer business loans starting from ₹50,000 with competitive interest rates starting from 10.5% p.a. and flexible repayment options up to 60 months.'
    },
    {
      q: 'How do I apply for a Demat account?',
      a: 'You can open a Demat account instantly through our app with our trusted partners like Zerodha, Angel One, Upstox, and Motilal Oswal. The process takes just 5 minutes with digital KYC.'
    },
    {
      q: 'Is my money safe with BLUEPEAKFINSERV?',
      a: 'Absolutely! We use bank-grade security measures, 256-bit SSL encryption, two-factor authentication, and partner with RBI-regulated institutions. Your data and money are completely secure.'
    },
    {
      q: 'What insurance products do you offer?',
      a: 'We offer comprehensive health insurance, life insurance, car insurance, and term insurance plans through our trusted partners - ICICI Lombard, Assure Asset, and Paisabazaar.'
    },
    {
      q: 'How long does loan approval take?',
      a: 'We provide quick approval within 24 hours for most loan applications. The entire process is digital and requires minimal documentation.'
    },
    {
      q: 'Can I track my investments through BLUEPEAKFINSERV?',
      a: 'Yes! Our platform provides real-time tracking of all your investments including SIPs, mutual funds, and stock holdings. You get detailed reports and performance analytics.'
    },
    {
      q: 'What are the charges for opening a Demat account?',
      a: 'We offer free Demat account opening with zero Annual Maintenance Charges (AMC) for the first year. After that, the charges are minimal and competitive.'
    }
  ];

  const supportChannels = [
    {
      icon: '📞',
      title: 'Phone Support',
      details: '+91 1800-XXX-XXXX',
      sub: 'Available 9 AM - 9 PM, Mon-Sat'
    },
    {
      icon: '✉️',
      title: 'Email Support',
      details: 'support@bluepeakfinserv.com',
      sub: 'We respond within 24 hours'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Chat with us',
      sub: 'Available 24/7 on our app'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'BLUEPEAKFINSERV Office',
      sub: 'By appointment only'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="support-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Support & Help</span>
            <h1>We're Here to <span className="highlight">Help You</span></h1>
            <p>Get 24/7 support for all your financial needs. Our team is ready to assist you with any questions or concerns.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Contact Support</button>
              <button className="btn-outline">View FAQs</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUPPORT CHANNELS ===== */}
      <section className="channels-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2>How Can We <span className="highlight">Help You</span>?</h2>
            <p>Choose from multiple support channels to get the help you need</p>
          </div>
          <div className="channels-grid">
            {supportChannels.map((channel, index) => (
              <div key={index} className="channel-card">
                <div className="channel-icon">{channel.icon}</div>
                <h3>{channel.title}</h3>
                <p className="channel-details">{channel.details}</p>
                <p className="channel-sub">{channel.sub}</p>
                <button className="btn-outline channel-btn">
                  {channel.title === 'Live Chat' ? 'Start Chat' : 
                   channel.title === 'Visit Us' ? 'Book Appointment' : 
                   channel.title === 'Phone Support' ? 'Call Now' : 'Email Us'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <span className="section-tag">Send Us a Message</span>
              <h2>We'd Love to <span className="highlight">Hear From You</span></h2>
              <p>Fill out the form below and our team will get back to you within 24 hours</p>
            </div>

            {formSubmitted && (
              <div className="success-message">
                ✅ Thank you for contacting us! Our team will get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
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
                    placeholder="What is this about?"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please describe your question or concern in detail..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQs</span>
            <h2>Frequently Asked <span className="highlight">Questions</span></h2>
            <p>Find answers to the most common questions about our services</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="faq-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                  <span className="faq-text">{faq.q}</span>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.9</div>
              <div className="stat-label">⭐ Customer Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24hrs</div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Still Need Help?</h2>
            <p>Our support team is always ready to assist you with any questions</p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Live Chat</button>
              <button className="btn-outline-light">Call Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;