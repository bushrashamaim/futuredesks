import React, { useState } from 'react';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How soon can you start my project?", a: "We can start within 48 hours of agreement and payment." },
    { q: "Do you offer maintenance after delivery?", a: "Yes, we have affordable monthly maintenance plans." },
    { q: "Can I see your previous work?", a: "Yes, check our portfolio section for live projects." },
    { q: "Do you provide NDA?", a: "Yes, we sign NDA for all projects." }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">FAQs</div>
      <div className="section-title">Frequently Asked <span className="muted">Questions</span></div>
      <div className="faq-grid">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
            <div className="faq-q">{faq.q}<span className="icon">+</span></div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFAQ;