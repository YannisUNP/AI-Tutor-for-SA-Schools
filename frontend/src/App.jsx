import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
// import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import ProtectedRoute from "./components/auth/ProtectedRoute";

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
      <BrowserRouter>

        <Routes>
          <Route 
            path="/"
            element={<Landing />}
          />

          <Route 
            path="/login"
            element={<Login />}
          />

          <Route 
            path="/register"
            element={<Register />}
          />

          {/* <Route 
            path="/dashboard"
            element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
            }
          /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;