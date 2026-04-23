import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PortfolioPage from './pages/PortfolioPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';  // ← IMPORT KARO
import AIChatButton from './components/AIChat/AIChatButton';
import YouTubeModal from './components/Common/YouTubeModal';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [ytUrl, setYtUrl] = useState('');
  const [isYtModalOpen, setIsYtModalOpen] = useState(false);

  const openYT = (url) => {
    setYtUrl(url);
    setIsYtModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeYT = () => {
    setYtUrl('');
    setIsYtModalOpen(false);
    document.body.style.overflow = '';
  };

  const showPage = (pageName) => {
    setActivePage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header activePage={activePage} showPage={showPage} />
      
      <div className={`page ${activePage === 'home' ? 'active' : ''}`}>
        <HomePage showPage={showPage} openYT={openYT} />
      </div>
      <div className={`page ${activePage === 'about' ? 'active' : ''}`}>
        <AboutPage showPage={showPage} />
      </div>
      <div className={`page ${activePage === 'features' ? 'active' : ''}`}>
        <FeaturesPage showPage={showPage} />
      </div>
      <div className={`page ${activePage === 'portfolio' ? 'active' : ''}`}>
        <PortfolioPage showPage={showPage} openYT={openYT} />
      </div>
      <div className={`page ${activePage === 'team' ? 'active' : ''}`}>
        <TeamPage showPage={showPage} />
      </div>
      <div className={`page ${activePage === 'contact' ? 'active' : ''}`}>
        <ContactPage showPage={showPage} />
      </div>

      {/* Footer - Sab pages ke liye common */}
      <Footer showPage={showPage} />

      <AIChatButton />
      <YouTubeModal isOpen={isYtModalOpen} onClose={closeYT} ytUrl={ytUrl} />
    </>
  );
}

export default App;