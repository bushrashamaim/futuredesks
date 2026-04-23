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
            {/* INSTAGRAM LOGO */}
            <a href="https://www.instagram.com/futuredesks_podcast/" target="_blank" rel="noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" 
                alt="Instagram" 
                width="22" 
                height="22"
              />
            </a>
            
            {/* WHATSAPP LOGO */}
            <a href="https://wa.me/+918595669310" target="_blank" rel="noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                alt="WhatsApp" 
                width="22" 
                height="22"
              />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <button onClick={(e) => handleNavClick('home', e)}>Home</button>
          <button onClick={(e) => handleNavClick('about', e)}>About</button>
          <button onClick={(e) => handleNavClick('features', e)}>Features</button>
          <button onClick={(e) => handleNavClick('portfolio', e)}>Projects</button>
          <button onClick={(e) => handleNavClick('team', e)}>Team</button>
          <button onClick={(e) => handleNavClick('contact', e)}>Contact</button>
        </div>
        <div className="footer-col">
          <h5>Our Services</h5>
          <button onClick={(e) => handleNavClick('features', e)}>Web Development</button>
          <button onClick={(e) => handleNavClick('features', e)}>Mobile App Development</button>
          <button onClick={(e) => handleNavClick('features', e)}>SaaS Products</button>
          <button onClick={(e) => handleNavClick('features', e)}>Custom Software</button>
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