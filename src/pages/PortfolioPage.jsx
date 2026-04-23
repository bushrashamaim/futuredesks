import React from 'react';
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';
import ClientsSection from '../components/Portfolio/ClientsSection';
import AwardsSection from '../components/Portfolio/AwardsSection';
import CTASection from '../components/Common/CTASection';

const PortfolioPage = ({ showPage, openYT }) => {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid openYT={openYT} showPage={showPage} />
      <ClientsSection />
      <AwardsSection />
      <CTASection onContact={() => showPage('contact')} />
    </>
  );
};

export default PortfolioPage;