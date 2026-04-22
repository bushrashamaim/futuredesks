import React from 'react';
import Footer from '../components/Layout/Footer';
import AboutHero from '../components/About/AboutHero';
import MissionVision from '../components/About/MissionVision';
import CoreValues from '../components/About/CoreValues';
import StatsCounter from '../components/About/StatsCounter';
import Timeline from '../components/About/Timeline';
import TechStack from '../components/About/TechStack';
import CTASection from '../components/Common/CTASection';

const AboutPage = ({ showPage }) => {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <StatsCounter />
      <Timeline />
      <TechStack />
      <CTASection onContact={() => showPage('contact')} />
      <Footer showPage={showPage} />
    </>
  );
};

export default AboutPage;