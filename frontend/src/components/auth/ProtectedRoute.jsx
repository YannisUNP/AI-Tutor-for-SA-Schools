import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, session, loading = false }) {
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface text-on-surface">
        <p className="text-body-md">Checking your session...</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;