import React from 'react';
import { useEffect } from 'react';
import Landing from "./pages/Landing/Landing";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(s => {
      s.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(s);
    });
  }, []);

  return (
    <div className="bg-surface text-on-surface">
      {/* 
         Since your app is currently a landing page, 
         you render the Landing page here. 
      */}
      <Landing />
    </div>
  );
}
export default App;