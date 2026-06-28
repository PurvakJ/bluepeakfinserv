// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.nav-item-with-dropdown')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { 
      label: 'Services', 
      type: 'dropdown',
      id: 'services',
      items: [
        { path: '/services', label: 'Services' },
        { path: '/loans', label: 'Business Loans' },
        { path: '/insurance', label: 'Insurance' },
        { path: '/investments', label: 'Demat & Trading' },
        { path: '/investments', label: 'Mutual Funds' },
        { path: '/offers', label: 'Special Offers' }
      ]
    },
    { 
      label: 'About', 
      type: 'dropdown',
      id: 'about',
      items: [
        { path: '/about', label: 'About Us' },
        { path: '/partners', label: 'Our Partners' },
        { path: '/grievance', label: 'Grievance Redressal' }
      ]
    },
    { path: '/support', label: 'Support' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img 
            src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782652323/WhatsApp_Image_2026-06-28_at_11.37.46-removebg-preview_uqyon6.png" 
            alt="BLUEPEAKFINSERV Logo" 
            className="logo-image"
          />
          <div className="logo-text">
            <span className="logo-main">BLUEPEAK</span>
            <span className="logo-sub">FINSERV</span>
          </div>
        </Link>
        
        <button 
          className={`mobile-menu-btn ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => {
            if (link.type === 'dropdown') {
              return (
                <li 
                  key={index} 
                  className={`nav-item-with-dropdown ${openDropdown === link.id ? 'open' : ''}`}
                  onMouseEnter={() => window.innerWidth > 1024 && setOpenDropdown(link.id)}
                  onMouseLeave={() => window.innerWidth > 1024 && setOpenDropdown(null)}
                >
                  <button 
                    className="nav-link-dropdown"
                    onClick={() => toggleDropdown(link.id)}
                    aria-expanded={openDropdown === link.id}
                  >
                    {link.label}
                    <span className="dropdown-arrow">▾</span>
                  </button>
                  <ul className="dropdown-menu">
                    {link.items.map((item, idx) => (
                      <li key={idx}>
                        <NavLink 
                          to={item.path} 
                          className={({ isActive }) => 
                            `dropdown-link ${isActive ? 'active' : ''}`
                          }
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={index}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  end
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
          <li className="nav-cta">
            <Link to="/contact" className="btn-nav-primary">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;