// import React from 'react';

// const Footer = ({ showPage }) => {
//   const handleSubscribe = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const v = el.value.trim();
//     if (!v) { alert("Please enter email"); return; }
//     if (!v.includes("@")) { alert("Enter valid email"); return; }
//     alert("✅ Subscribed successfully!");
//     el.value = "";
//   };

//   return (
//     <footer>
//       <div className="footer-top">
//         <div>
//           <div className="footer-logo">FUTUREDESKS</div>
//           <p className="footer-desc">We design & develop websites and mobile apps. 200+ projects delivered globally.</p>
//           <div className="footer-social">
//             <a href="https://www.instagram.com/futuredesks_podcast/" target="_blank" rel="noreferrer">
//               <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
//             </a>
//             <a href="https://wa.me/+918595669310" target="_blank" rel="noreferrer">
//               <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
//             </a>
//           </div>
//         </div>
//         <div className="footer-col">
//           <h5>Quick Links</h5>
//           <a onClick={() => showPage('home')}>Home</a>
//           <a onClick={() => showPage('about')}>About</a>
//           <a onClick={() => showPage('features')}>Features</a>
//           <a onClick={() => showPage('portfolio')}>Projects</a>
//           <a onClick={() => showPage('team')}>Team</a>
//           <a onClick={() => showPage('contact')}>Contact</a>
//         </div>
//         <div className="footer-col">
//           <h5>Our Services</h5>
//           <a onClick={() => showPage('features')}>Web Development</a>
//           <a onClick={() => showPage('features')}>Mobile App Development</a>
//           <a onClick={() => showPage('features')}>SaaS Products</a>
//           <a onClick={() => showPage('features')}>Custom Software</a>
//         </div>
//         <div className="footer-col">
//           <h5>Newsletter</h5>
//           <div className="footer-subscribe">
//             <input type="email" id="se_footer" placeholder="Your email address" />
//             <button onClick={() => handleSubscribe('se_footer')}>Subscribe</button>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>© 2025 FutureDesks. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = ({ showPage }) => {
  const handleSubscribe = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const v = el.value.trim();
    if (!v) { alert("Please enter email"); return; }
    if (!v.includes("@")) { alert("Enter valid email"); return; }
    alert("✅ Subscribed successfully!");
    el.value = "";
  };

  const handleNavClick = (page, e) => {
    e.preventDefault();
    showPage(page);
  };

  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">FUTUREDESKS</div>
          <p className="footer-desc">We design & develop websites and mobile apps. 200+ projects delivered globally.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/futuredesks_podcast/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
            </a>
            <a href="https://wa.me/+918595669310" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <button onClick={(e) => handleNavClick('home', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>Home</button>
          <button onClick={(e) => handleNavClick('about', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>About</button>
          <button onClick={(e) => handleNavClick('features', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>Features</button>
          <button onClick={(e) => handleNavClick('portfolio', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>Projects</button>
          <button onClick={(e) => handleNavClick('team', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>Team</button>
          <button onClick={(e) => handleNavClick('contact', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>Contact</button>
        </div>
        <div className="footer-col">
          <h5>Our Services</h5>
          <button onClick={(e) => handleNavClick('features', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>Web Development</button>
          <button onClick={(e) => handleNavClick('features', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>Mobile App Development</button>
          <button onClick={(e) => handleNavClick('features', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>SaaS Products</button>
          <button onClick={(e) => handleNavClick('features', e)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'block', fontSize: '13px', marginBottom: '12px' }}>Custom Software</button>
        </div>
        <div className="footer-col">
          <h5>Newsletter</h5>
          <div className="footer-subscribe">
            <input type="email" id="se_footer" placeholder="Your email address" />
            <button onClick={() => handleSubscribe('se_footer')}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 FutureDesks. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;