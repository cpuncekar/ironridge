import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Recognition from './components/sections/Recognition';
import HowItWorks from './components/sections/HowItWorks';
import TrackInvestments from './components/sections/TrackInvestments';
import NewsMedia from './components/sections/NewsMedia';
import Faq from './components/sections/Faq';
import Partners from './components/sections/Partners';
import './styles/index.css';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Recognition />
        <HowItWorks />
        <TrackInvestments />
        <NewsMedia />
        <Faq />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;