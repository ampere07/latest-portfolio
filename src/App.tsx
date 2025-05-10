import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import SoundControl from './components/SoundControl';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ChallengesPage from './pages/ChallengesPage';
import FuturePlansPage from './pages/FuturePlansPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets like in a game
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl text-white">LOADING GAME...</h1>
        <div className="w-64 h-4 bg-gray-800 border-4 border-white">
          <div className="h-full bg-green-500 animate-[loading_2s_ease-in-out_forwards]"></div>
        </div>
        <p className="text-sm text-gray-400 mt-4 animate-pulse">Press Start to Continue</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#181818] crt-effect">
      <div className="absolute inset-0 bg-[url('/images/background.png')] bg-repeat opacity-10 z-0 pixelated"></div>
      
      <Header />
      
      <main className="relative z-10 container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/future-plans" element={<FuturePlansPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <SoundControl />
      <Footer />
    </div>
  );
}

export default App;