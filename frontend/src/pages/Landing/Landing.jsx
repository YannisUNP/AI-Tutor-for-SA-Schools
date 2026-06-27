import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Benefits from '../../components/Benefits';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';

function Landing () {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Benefits />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};
export default Landing;