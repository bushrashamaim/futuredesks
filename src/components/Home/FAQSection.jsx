import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How long does it take to deliver a pre-built website?", a: "7–14 business days depending on customizations." },
    { q: "Do you provide the complete source code?", a: "Yes, full ownership after final payment." },
    { q: "Prebuilt vs custom?", a: "Prebuilt uses templates; custom from scratch." },
    { q: "Post-delivery support?", a: "Yes, maintenance packages available." }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">FAQ</div>
      <div className="section-title">
        Frequently Asked<br /><span className="muted">Questions</span>
      </div>
      <div className="faq-grid">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
            <div className="faq-q">
              {faq.q}<span className="icon">+</span>
            </div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;