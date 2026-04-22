import React from 'react';
import Footer from '../components/Layout/Footer';
import FeaturesHero from '../components/Features/FeaturesHero';
import ServicesGrid from '../components/Features/ServicesGrid';
import ProcessSteps from '../components/Features/ProcessSteps';
import PricingCards from '../components/Features/PricingCards';
import WhyChooseUs from '../components/Features/WhyChooseUs';
import SupportOptions from '../components/Features/SupportOptions';
import CTASection from '../components/Common/CTASection';

const FeaturesPage = ({ showPage }) => {
  return (
    <>
      <FeaturesHero />
      <ServicesGrid />
      <ProcessSteps />
      <PricingCards showPage={showPage} />
      <WhyChooseUs />
      <SupportOptions />
      <CTASection onContact={() => showPage('contact')} />
      <Footer showPage={showPage} />
    </>
  );
};

export default FeaturesPage;