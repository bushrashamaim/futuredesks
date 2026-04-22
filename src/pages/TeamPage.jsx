import React from 'react';
import Footer from '../components/Layout/Footer';
import TeamHero from '../components/Team/TeamHero';
import TeamMembers from '../components/Team/TeamMembers';
import CareersSection from '../components/Team/CareersSection';
import BenefitsSection from '../components/Team/BenefitsSection';
import CTASection from '../components/Common/CTASection';

const TeamPage = ({ showPage }) => {
  return (
    <>
      <TeamHero />
      <TeamMembers />
      <CareersSection />
      <BenefitsSection />
      <CTASection onContact={() => alert('📧 Send your resume to careers@futuredesks.in')} />
      <Footer showPage={showPage} />
    </>
  );
};

export default TeamPage;