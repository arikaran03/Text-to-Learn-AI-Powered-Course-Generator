import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import Profile from './components/Profile';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';
import LessonPage from './pages/LessonPage';
import './App.css'; // <-- IMPORT THE CSS FILE HERE

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading-message">Loading Application...</div>;
  }

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-links">
            {/* Use NavLink for active styles */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">My Courses</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/lesson-example">Lesson Example</NavLink>
          </div>
          <div className="nav-auth">
            <LoginButton />
            <LogoutButton />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="/courses" element={<ProtectedRoute component={CoursesPage} />} />
          <Route path="/lesson-example" element={<LessonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;