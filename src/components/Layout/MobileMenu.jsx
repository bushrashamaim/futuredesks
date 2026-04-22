// import React, { forwardRef } from 'react';

// const MobileMenu = forwardRef(({ isOpen, onClose, showPage }, ref) => {
//   const handleClick = (page) => {
//     showPage(page);
//     onClose();
//   };

//   return (
//     <div className={`mobile-menu ${isOpen ? 'open' : ''}`} ref={ref}>
//       <a onClick={() => handleClick('home')}>Home</a>
//       <a onClick={() => handleClick('about')}>About</a>
//       <a onClick={() => handleClick('features')}>Features</a>
//       <a onClick={() => handleClick('portfolio')}>Projects</a>
//       <a onClick={() => handleClick('team')}>Team</a>
//       <a onClick={() => handleClick('contact')} className="mobile-cta">Contact Us</a>
//     </div>
//   );
// });

// MobileMenu.displayName = 'MobileMenu';
// export default MobileMenu;

import React, { forwardRef } from 'react';

const MobileMenu = forwardRef(({ isOpen, onClose, showPage }, ref) => {
  const handleClick = (page, e) => {
    if (e) e.preventDefault();
    showPage(page);
    onClose();
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} ref={ref}>
      <button onClick={(e) => handleClick('home', e)} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600, padding: '10px 14px', borderRadius: '8px', cursor: 'pointer' }}>Home</button>
      <button onClick={(e) => handleClick('about', e)} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600, padding: '10px 14px', borderRadius: '8px', cursor: 'pointer' }}>About</button>
      <button onClick={(e) => handleClick('features', e)} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600, padding: '10px 14px', borderRadius: '8px', cursor: 'pointer' }}>Features</button>
      <button onClick={(e) => handleClick('portfolio', e)} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600, padding: '10px 14px', borderRadius: '8px', cursor: 'pointer' }}>Projects</button>
      <button onClick={(e) => handleClick('team', e)} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600, padding: '10px 14px', borderRadius: '8px', cursor: 'pointer' }}>Team</button>
      <button onClick={(e) => handleClick('contact', e)} className="mobile-cta" style={{ background: 'var(--black)', color: 'white', textAlign: 'center', width: '100%' }}>Contact Us</button>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;