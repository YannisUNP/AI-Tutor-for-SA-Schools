import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Benefits from '../components/landing/Benefits';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

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