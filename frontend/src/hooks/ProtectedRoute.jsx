// ./hooks/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

// This component now just checks auth and either renders its children or redirects.
export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // <-- Replace with your actual authentication logic

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to.
    return <Navigate to="/login" replace />;
  }

  return children;
};