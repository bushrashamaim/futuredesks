// import React, { useState, useEffect, useRef } from 'react';
// import MobileMenu from './MobileMenu';

// const Header = ({ activePage, showPage }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const btnRef = useRef(null);

//   const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const closeMenu = () => setIsMobileMenuOpen(false);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && btnRef.current && 
//           !menuRef.current.contains(e.target) && 
//           !btnRef.current.contains(e.target)) {
//         closeMenu();
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   return (
//     <>
//       <div className="top-strip">
//         <div className="strip-links">
//           <a href="#">Prebuilt</a>
//           <a href="#">Customized</a>
//         </div>
//         <div className="social-icons">
//           <a href="https://www.instagram.com/futuredesks_podcast/" target="_blank" rel="noreferrer">
//             <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
//           </a>
//           <a href="https://wa.me/+918595669310" target="_blank" rel="noreferrer">
//             <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
//           </a>
//         </div>
//       </div>

//       <nav>
//         <div className="nav-logo" onClick={() => showPage('home')}>FutureDesks</div>
//         <div className="nav-links">
//           <a onClick={() => showPage('home')} className={activePage === 'home' ? 'active' : ''}>Home</a>
//           <a onClick={() => showPage('about')} className={activePage === 'about' ? 'active' : ''}>About</a>
//           <a onClick={() => showPage('features')} className={activePage === 'features' ? 'active' : ''}>Features</a>
//           <a onClick={() => showPage('portfolio')} className={activePage === 'portfolio' ? 'active' : ''}>Projects</a>
//           <a onClick={() => showPage('team')} className={activePage === 'team' ? 'active' : ''}>Team</a>
//           <a onClick={() => showPage('contact')} className="nav-cta">Contact Us</a>
//         </div>
//         <div className="three-dot" onClick={toggleMenu} ref={btnRef}>
//           <div className="three-dot-icon">
//             <span></span><span></span><span></span>
//           </div>
//         </div>
//       </nav>

//       <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMenu} showPage={showPage} ref={menuRef} />
//     </>
//   );
// };

// export default Header;

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
          <a href="https://www.instagram.com/futuredesks_podcast/" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
          </a>
          <a href="https://wa.me/+918595669310" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
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
        <div className="three-dot" onClick={toggleMenu} ref={btnRef}>
          <div className="three-dot-icon">
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMenu} showPage={showPage} ref={menuRef} />
    </>
  );
};

export default Header;