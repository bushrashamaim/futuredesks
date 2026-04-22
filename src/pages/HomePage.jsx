import React from 'react';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Home/Hero';
import AboutSection from '../components/Home/AboutSection';
import FeaturesGrid from '../components/Home/FeaturesGrid';
import ProjectsGrid from '../components/Home/ProjectsGrid';
import Testimonials from '../components/Home/Testimonials';
import TeamSection from '../components/Home/TeamSection';
import FAQSection from '../components/Home/FAQSection';
import ContactForm from '../components/Home/ContactForm';
import MissionVision from '../components/About/MissionVision';

const HomePage = ({ showPage, openYT }) => {
  return (
    <>
      <Hero showPage={showPage} />
      <AboutSection />
      <FeaturesGrid />
      <ProjectsGrid showPage={showPage} openYT={openYT} />
      <Testimonials />
      <TeamSection />
      <FAQSection />
      <ContactForm />
      <Footer showPage={showPage} />
    </>
  );
};

export default HomePage;