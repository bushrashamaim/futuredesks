import React, { useState, useEffect, useRef } from 'react';
import MobileMenu from './MobileMenu';

const Header = ({ activePage, showPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && btnRef.current && 
          !menuRef.current.contains(e.target) && 
          !btnRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = (page, e) => {
    e.preventDefault();
    showPage(page);
  };

  return (
    <>
      <div className="top-strip">
        <div className="strip-links">
          <a href="#">Prebuilt</a>
          <a href="#">Customized</a>
        </div>
        <div className="social-icons">
          {/* INSTAGRAM LOGO - DIRECT IMAGE */}
          <a href="https://www.instagram.com/futuredesks_podcast/" target="_blank" rel="noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" 
              alt="Instagram" 
              width="20" 
              height="20"
            />
          </a>
          
          {/* WHATSAPP LOGO - DIRECT IMAGE */}
          <a href="https://wa.me/+918595669310" target="_blank" rel="noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
              alt="WhatsApp" 
              width="20" 
              height="20"
            />
          </a>
        </div>
      </div>

      <nav>
        <div className="nav-logo" onClick={() => showPage('home')}>FutureDesks</div>
        <div className="nav-links">
          <button onClick={(e) => handleNavClick('home', e)} className={activePage === 'home' ? 'active' : ''} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 500, paddingBottom: '4px' }}>Home</button>
          <button onClick={(e) => handleNavClick('about', e)} className={activePage === 'about' ? 'active' : ''} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 500, paddingBottom: '4px' }}>About</button>
          <button onClick={(e) => handleNavClick('features', e)} className={activePage === 'features' ? 'active' : ''} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 500, paddingBottom: '4px' }}>Features</button>
          <button onClick={(e) => handleNavClick('portfolio', e)} className={activePage === 'portfolio' ? 'active' : ''} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 500, paddingBottom: '4px' }}>Projects</button>
          <button onClick={(e) => handleNavClick('team', e)} className={activePage === 'team' ? 'active' : ''} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 500, paddingBottom: '4px' }}>Team</button>
          <button onClick={(e) => handleNavClick('contact', e)} className="nav-cta">Contact Us</button>
        </div>
<div className="hamburger-icon" onClick={toggleMenu} ref={btnRef}>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 6H21" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 18H21" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round"/>
  </svg>
</div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMenu} showPage={showPage} ref={menuRef} />
    </>
  );
};

export default Header;