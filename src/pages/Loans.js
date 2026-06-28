// src/pages/Loans.js
import React, { useState } from 'react';
import './Loans.css';

function Loans() {
  const [activeTab, setActiveTab] = useState('all');
  const [, setSelectedLoan] = useState(null);
  
  // Calculator state
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(36);

  const loanTypes = [
    {
      id: 'business',
      icon: '🏢',
      title: 'Business Loan',
      description: 'Fuel your business growth with flexible funding options. Get quick approval and competitive rates.',
      amount: '₹50,000 - ₹50 Lakhs',
      features: [
        'Minimal documentation required',
        'Quick approval within 24 hours',
        'Competitive interest rates',
        'Flexible repayment options',
        'No hidden charges'
      ],
      interestRate: '10.5% - 15% p.a.',
      tenure: '12 - 60 months',
      processingFee: '1% - 2%'
    },
    {
      id: 'startup',
      icon: '🚀',
      title: 'Startup Loan',
      description: 'Special funding for new businesses with innovative ideas. No collateral required.',
      amount: '₹50,000 - ₹25 Lakhs',
      features: [
        'No collateral required',
        'Special rates for new businesses',
        '6 months moratorium period',
        'Dedicated relationship manager',
        'Flexible repayment structure'
      ],
      interestRate: '11% - 16% p.a.',
      tenure: '12 - 48 months',
      processingFee: '1% - 2.5%',
      popular: true
    },
    {
      id: 'working',
      icon: '💼',
      title: 'Working Capital',
      description: 'Manage your daily business operations with flexible working capital solutions.',
      amount: '₹1 Lakh - ₹1 Crore',
      features: [
        'Overdraft facility available',
        'Interest only on utilized amount',
        'Flexible withdrawal options',
        'Quick disbursement',
        'Revolving credit limit'
      ],
      interestRate: '10% - 14% p.a.',
      tenure: '12 - 36 months',
      processingFee: '0.5% - 1.5%'
    },
    {
      id: 'personal',
      icon: '👤',
      title: 'Personal Loan',
      description: 'Quick personal loans for your financial needs. Minimal paperwork and fast disbursement.',
      amount: '₹50,000 - ₹25 Lakhs',
      features: [
        'Quick approval process',
        'Minimal documentation',
        'Flexible repayment tenure',
        'Competitive interest rates',
        'No collateral required'
      ],
      interestRate: '12% - 18% p.a.',
      tenure: '12 - 60 months',
      processingFee: '1% - 3%'
    },
    {
      id: 'vehicle',
      icon: '🚗',
      title: 'Vehicle Loan',
      description: 'Drive your dream car or bike with affordable vehicle loans. Quick approval and competitive rates.',
      amount: '₹1 Lakh - ₹50 Lakhs',
      features: [
        '100% on-road funding available',
        'Quick approval within 24 hours',
        'Flexible repayment up to 7 years',
        'Low interest rates',
        'Minimal documentation'
      ],
      interestRate: '9% - 14% p.a.',
      tenure: '12 - 84 months',
      processingFee: '0.5% - 2%'
    },
    {
      id: 'msme',
      icon: '🏭',
      title: 'MSME Loan',
      description: 'Special loans for Micro, Small, and Medium Enterprises. Boost your business with government-backed schemes.',
      amount: '₹50,000 - ₹2 Crores',
      features: [
        'Government-backed schemes',
        'Subsidized interest rates',
        'Minimal documentation',
        'Quick processing',
        'No collateral for small loans'
      ],
      interestRate: '8% - 13% p.a.',
      tenure: '12 - 60 months',
      processingFee: '0.5% - 1.5%'
    }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Quick Approval',
      description: 'Get loan approval within 24 hours with minimal documentation'
    },
    {
      icon: '💰',
      title: 'Competitive Rates',
      description: 'Enjoy industry-best interest rates starting from 10.5% p.a.'
    },
    {
      icon: '📋',
      title: 'Minimal Paperwork',
      description: 'Digital KYC and application process with minimal documentation'
    },
    {
      icon: '🤝',
      title: 'Flexible Repayment',
      description: 'Choose repayment tenures from 12 to 60 months'
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum loan amount you offer?',
      answer: 'We offer loans starting from just ₹50,000. Depending on your business needs, we can provide up to ₹1 Crore for working capital and up to ₹50 Lakhs for business loans.'
    },
    {
      question: 'How quickly can I get the loan approved?',
      answer: 'We provide quick approval within 24 hours for most loan applications. The entire process is digital and requires minimal documentation.'
    },
    {
      question: 'What documents do I need to apply?',
      answer: 'Basic documents include KYC documents (Aadhaar, PAN), business registration proof, bank statements for the last 6 months, and income tax returns for the last 2 years. The specific requirements vary by loan type.'
    },
    {
      question: 'What is the interest rate for business loans?',
      answer: 'Interest rates start from 10.5% p.a. and vary based on the loan type, amount, tenure, and your credit profile. We offer competitive rates compared to market standards.'
    }
  ];

  // Calculate EMI
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = tenure;
    
    if (r === 0) return P / n;
    
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return emi;
  };

  const calculateTotalInterest = () => {
    const emi = calculateEMI();
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - loanAmount;
    return totalInterest;
  };

  const calculateTotalPayment = () => {
    const emi = calculateEMI();
    return emi * tenure;
  };

  const calculateProcessingFee = () => {
    // Calculate processing fee as 1% of loan amount (average)
    return loanAmount * 0.01;
  };

  // Format currency in Indian format
  const formatCurrency = (amount) => {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  };

  const monthlyEMI = calculateEMI();
  const totalInterest = calculateTotalInterest();
  const totalPayment = calculateTotalPayment();
  const processingFee = calculateProcessingFee();

  const filteredLoans = activeTab === 'all' 
    ? loanTypes 
    : loanTypes.filter(loan => loan.id === activeTab);

  // Handle slider changes
  const handleLoanAmountChange = (e) => {
    setLoanAmount(Number(e.target.value));
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(Number(e.target.value));
  };

  const handleTenureChange = (e) => {
    setTenure(Number(e.target.value));
  };
  
  // Phone call handler
  const handleCall = () => {
    window.location.href = 'tel:8198000803';
  };

  return (
    <div className="loans-page">
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Loans</span>
            <h1>Fuel Your Dreams with <span className="highlight">Flexible Loans</span></h1>
            <p>Get quick approval loans starting from ₹50,000 with minimal documentation. Choose from business, startup, working capital, and personal loans.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleCall}>Check Eligibility</button>
              <button className="btn-outline" onClick={() => {
                document.querySelector('.calculator-section').scrollIntoView({ behavior: 'smooth' });
              }}>Calculate EMI</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">₹50K</div>
              <div className="stat-label">Starting Loan Amount</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24hrs</div>
              <div className="stat-label">Quick Approval</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10.5%</div>
              <div className="stat-label">Interest Rate Starting</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">60</div>
              <div className="stat-label">Months Tenure</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOAN TYPES ===== */}
      <section className="loan-types-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Loan Products</span>
            <h2>Find the Right <span className="highlight">Loan</span> for You</h2>
            <p>Choose from a variety of loan products designed to meet your specific needs</p>
          </div>

          <div className="loan-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Loans
            </button>
            {loanTypes.map((loan) => (
              <button
                key={loan.id}
                className={`tab-btn ${activeTab === loan.id ? 'active' : ''}`}
                onClick={() => setActiveTab(loan.id)}
              >
                <span className="tab-icon">{loan.icon}</span>
                {loan.title}
              </button>
            ))}
          </div>

          <div className="loans-grid">
            {filteredLoans.map((loan) => (
              <div key={loan.id} className={`loan-card ${loan.popular ? 'featured' : ''}`}>
                {loan.popular && (
                  <div className="featured-badge">⭐ Popular</div>
                )}
                <div className="loan-icon">{loan.icon}</div>
                <h3>{loan.title}</h3>
                <div className="loan-amount">{loan.amount}</div>
                <p className="loan-description">{loan.description}</p>
                <ul className="feature-list">
                  {loan.features.slice(0, 4).map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                <div className="loan-details">
                  <div className="detail-item">
                    <span className="detail-label">Interest Rate</span>
                    <span className="detail-value">{loan.interestRate}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Tenure</span>
                    <span className="detail-value">{loan.tenure}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Processing Fee</span>
                    <span className="detail-value">{loan.processingFee}</span>
                  </div>
                </div>
                <button 
                  className={`btn-apply ${loan.popular ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => {
                    setSelectedLoan(loan.id);
                    handleCall();
                  }}
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOAN CALCULATOR ===== */}
      <section className="calculator-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Plan Your Loan</span>
            <h2>Loan <span className="highlight">Calculator</span></h2>
            <p>Calculate your monthly EMI and plan your repayment easily</p>
          </div>
          <div className="calculator-wrapper">
            <div className="calculator-form">
              <div className="form-group">
                <label>Loan Amount: <span className="value-display">{formatCurrency(loanAmount)}</span></label>
                <input 
                  type="range" 
                  min="50000" 
                  max="5000000" 
                  step="50000" 
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                />
                <div className="range-values">
                  <span>₹50,000</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>
              <div className="form-group">
                <label>Interest Rate: <span className="value-display">{interestRate}% p.a.</span></label>
                <input 
                  type="range" 
                  min="8" 
                  max="20" 
                  step="0.5" 
                  value={interestRate}
                  onChange={handleInterestRateChange}
                />
                <div className="range-values">
                  <span>8%</span>
                  <span>20%</span>
                </div>
              </div>
              <div className="form-group">
                <label>Tenure: <span className="value-display">{tenure} months</span></label>
                <input 
                  type="range" 
                  min="12" 
                  max="84" 
                  step="6" 
                  value={tenure}
                  onChange={handleTenureChange}
                />
                <div className="range-values">
                  <span>12 months</span>
                  <span>84 months</span>
                </div>
              </div>
            </div>
            <div className="calculator-result">
              <div className="result-amount">
                <span className="result-label">Monthly EMI</span>
                <span className="result-value">{formatCurrency(monthlyEMI)}</span>
              </div>
              <div className="result-details">
                <div className="result-item">
                  <span>Total Interest</span>
                  <span>{formatCurrency(totalInterest)}</span>
                </div>
                <div className="result-item">
                  <span>Total Payment</span>
                  <span>{formatCurrency(totalPayment)}</span>
                </div>
                <div className="result-item">
                  <span>Processing Fee</span>
                  <span>{formatCurrency(processingFee)}</span>
                </div>
              </div>
              <button className="btn-primary" onClick={handleCall}>Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Benefits of <span className="highlight">Loans with BLUEPEAKFINSERV</span></h2>
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

      {/* ===== ELIGIBILITY SECTION ===== */}
      <section className="eligibility-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Eligibility Check</span>
            <h2>Are You <span className="highlight">Eligible</span>?</h2>
            <p>Check if you meet the basic requirements for our loans</p>
          </div>
          <div className="eligibility-grid">
            <div className="eligibility-card">
              <span className="eligibility-icon">📋</span>
              <h3>Age</h3>
              <p>21 - 65 years</p>
            </div>
            <div className="eligibility-card">
              <span className="eligibility-icon">🏢</span>
              <h3>Business Vintage</h3>
              <p>Minimum 2 years (for business loans)</p>
            </div>
            <div className="eligibility-card">
              <span className="eligibility-icon">💰</span>
              <h3>Annual Income</h3>
              <p>₹3 Lakhs minimum</p>
            </div>
            <div className="eligibility-card">
              <span className="eligibility-icon">📊</span>
              <h3>Credit Score</h3>
              <p>750+ preferred</p>
            </div>
            <div className="eligibility-card">
              <span className="eligibility-icon">🏦</span>
              <h3>Bank Account</h3>
              <p>Active bank account (6+ months)</p>
            </div>
            <div className="eligibility-card">
              <span className="eligibility-icon">📱</span>
              <h3>KYC Documents</h3>
              <p>Aadhaar & PAN card mandatory</p>
            </div>
          </div>
          <div className="eligibility-cta">
            <button className="btn-primary" onClick={handleCall}>Check Your Eligibility</button>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2>Common Loan <span className="highlight">Questions</span></h2>
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
            <h2>Ready to Get Your Loan?</h2>
            <p>Apply now and get approval within 24 hours</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleCall}>Apply Now</button>
              <button className="btn-outline-light" onClick={handleCall}>Talk to Expert</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loans;