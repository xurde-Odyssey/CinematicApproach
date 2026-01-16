import React, { useEffect, useState } from 'react';
import { MoodProvider, useMood } from './context/MoodContext';
import LoadingExperience from './components/LoadingExperience';
import HeroSection from './components/HeroSection';
import MoodSelector from './components/MoodSelector';
import AboutSection from './components/AboutSection';
import Timeline from './components/Timeline';
import InteractiveLab from './components/InteractiveLab';
import FeaturedProjects from './components/FeaturedProjects';
import BehindTheShot from './components/BehindTheShot';
import DigitalAlterEgo from './components/DigitalAlterEgo';
import FutureVision from './components/FutureVision';
import EasterEgg from './components/EasterEgg';
import EndCredits from './components/EndCredits';
import './index.css';

const MainLayout = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <div className="noise-overlay" />
      <div className="spotlight" />
      {children}
    </div>
  );
};

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingExperience onComplete={() => setIsLoading(false)} />;
  }

  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <Timeline />
      <InteractiveLab />
      <FeaturedProjects />
      <BehindTheShot />
      <DigitalAlterEgo />
      <FutureVision />
      <EasterEgg />
      <EndCredits />
      <MoodSelector />
    </MainLayout>
  );
};

function App() {
  return (
    <MoodProvider>
      <AppContent />
    </MoodProvider>
  );
}

export default App;
