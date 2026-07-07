import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import StudentOnboarding from './pages/StudentOnboarding';
import { supabase } from './lib/supabaseClient';
import { AuthProvider } from './contexts/AuthContext';

const getOnboardingStorageKey = (user) => (user?.id ? `study_mate_onboarding_${user.id}` : 'study_mate_onboarding');

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((s) => {
      s.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(s);
    });
  }, []);

  useEffect(() => {
    const initializeSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Unable to load auth session:', error.message || error);
      }

      setSession(session);
      setOnboardingComplete(localStorage.getItem(getOnboardingStorageKey(session?.user)) === 'true');
      setLoading(false);
    };

    initializeSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setOnboardingComplete(localStorage.getItem(getOnboardingStorageKey(nextSession?.user)) === 'true');
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleOnboardingComplete = () => {
    const storageKey = getOnboardingStorageKey(session?.user);
    localStorage.setItem(storageKey, 'true');
    setOnboardingComplete(true);
  };

  return (
    <div className="bg-surface text-on-surface">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/onboarding"
              element={
                <ProtectedRoute session={session} loading={loading}>
                  {onboardingComplete ? <Navigate to="/dashboard" replace /> : <StudentOnboarding onComplete={handleOnboardingComplete} />}
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute session={session} loading={loading}>
                  {onboardingComplete ? <Dashboard /> : <Navigate to="/onboarding" replace />}
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;