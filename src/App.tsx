import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuranSummary from './pages/QuranSummary';
import QuranSummaryDetail from './pages/QuranSummaryDetail';
import Hadith from './pages/Hadith';
import Prayers from './pages/Prayers';
import LaylatulQadr from './pages/LaylatulQadr';
import Duas from './pages/Duas';
import AnimatedBackground from './components/AnimatedBackground';
import Planner from './pages/Planner';
import ScrollToTopButton from './components/ScrollTotop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main 
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quran-summary" element={<QuranSummary />} />
              <Route path="/quran-summary/:id" element={<QuranSummaryDetail />} />
              <Route path="/hadith" element={<Hadith />} />
              <Route path="/prayers" element={<Prayers />} />
              <Route path="/laylatul-qadr" element={<LaylatulQadr />} />
              <Route path="/duas" element={<Duas />} />
              <Route path="/planner" element={<Planner />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
        <ScrollToTopButton /> {/* Add the button here */}
      </div>
    </Router>
  );
}

export default App;