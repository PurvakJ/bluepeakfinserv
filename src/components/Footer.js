// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/918198000803?text=Hello!%20I%20want%20to%20know%20more%20about%20BLUEPEAKFINSERV%20services.',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bluepeakfinserv/',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* ===== BRAND SECTION ===== */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img 
              src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782652323/WhatsApp_Image_2026-06-28_at_11.37.46-removebg-preview_uqyon6.png" 
              alt="BLUEPEAKFINSERV Logo" 
              className="footer-logo-image"
            />
            <div className="logo-text">
              <span className="logo-main">BLUEPEAK</span>
              <span className="logo-sub">FINSERV</span>
            </div>
          </div>
          <p className="brand-description">
            Your trusted partner for loans, insurance, and investment solutions since 2026. 
            We connect you to India's top financial brands with transparency and trust.
          </p>
          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">₹50K+</span>
              <span className="stat-label">Starting Loan</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2026</span>
              <span className="stat-label">Established</span>
            </div>
          </div>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="social-link" 
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ===== LINKS SECTION ===== */}
        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/partners">Our Partners</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/loans">Business Loans</Link></li>
              <li><Link to="/insurance">Insurance</Link></li>
              <li><Link to="/investments">Demat & Trading</Link></li>
              <li><Link to="/investments">Mutual Funds</Link></li>
              <li><Link to="/offers">Special Offers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><Link to="/support">Contact Us</Link></li>
              <li><Link to="/support">FAQs</Link></li>
              <li><Link to="/grievance">Grievance Redressal</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/grievance">Grievance Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© {currentYear} BLUEPEAKFINSERV. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/grievance">Grievance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;