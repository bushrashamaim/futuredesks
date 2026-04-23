import React, { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Development',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill Name, Email, and Message");
      return;
    }
    setShowSuccess(true);
    setFormData({ name: '', phone: '', email: '', service: 'Website Development', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="sec">
      <div className="section-label">Get In Touch</div>
      <div className="section-title">Let's Build Something<br /><span className="muted">Great Together</span></div>
      <div className="contact-wrap">
        <div className="contact-info">
          <h3>Start Your Project Today</h3>
          <p>Share your idea with us — we'll build an amazing digital product together.</p>
          <div className="contact-detail">
            <div className="icon">📧</div>
            <div><strong>Email</strong><br /><a href="mailto:zunairshahid@gmail.com" style={{ color: 'var(--accent)' }}>zunairshahid@gmail.com</a></div>
          </div>
          <div className="contact-detail">
            <div className="icon">📞</div>
            <div><strong>WhatsApp</strong><br /><a href="https://wa.me/+447916693244" style={{ color: 'var(--accent)' }}>+447916693244</a></div>
          </div>
          <div className="contact-detail">
            <div className="icon">⏰</div>
            <div><strong>Business Hours</strong><br />Mon-Fri: 10AM - 7PM</div>
          </div>
        </div>
        <div>
          <div className="form-row">
            <div className="form-group"><label>Your Name *</label><input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="e.g., Rahul Mehta" /></div>
            <div className="form-group"><label>Phone Number</label><input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7916 693244" /></div>
          </div>
          <div className="form-group"><label>Email Address *</label><input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" /></div>
          <div className="form-group"><label>Service Required</label><select id="service" value={formData.service} onChange={handleChange}>
            <option>Website Development</option><option>Mobile App (Flutter)</option><option>SaaS Prebuilt (₹50,000)</option><option>Custom Software</option>
          </select></div>
          <div className="form-group"><label>Project Details *</label><textarea id="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..."></textarea></div>
          <button className="btn-submit" onClick={handleSubmit}>Send Message →</button>
          <div className="success-msg" style={{ display: showSuccess ? 'block' : 'none' }}>✓ Message sent successfully!</div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;