import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TopStrip = () => {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      padding: '8px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #333'
    }}>
      <div style={{ display: 'flex', gap: '30px' }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }}>Prebuilt</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }}>Customized</a>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a 
          href="https://www.instagram.com/aindexcc/" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F', fontSize: '18px' }} />
          <span style={{ fontSize: '12px' }}>Instagram</span>
        </a>
        
        <a 
          href="https://wa.me/+447916693244" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '18px' }} />
          <span style={{ fontSize: '12px' }}>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default TopStrip;