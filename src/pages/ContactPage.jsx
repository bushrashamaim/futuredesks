import React from 'react';
import Footer from '../components/Layout/Footer';
import ContactHero from '../components/Contact/ContactHero';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactFormSection from '../components/Contact/ContactFormSection';
import ContactFAQ from '../components/Contact/ContactFAQ';
import MapSection from '../components/Contact/MapSection';

const ContactPage = ({ showPage }) => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactFAQ />
      <MapSection />
      <Footer showPage={showPage} />
    </>
  );
};

export default ContactPage;