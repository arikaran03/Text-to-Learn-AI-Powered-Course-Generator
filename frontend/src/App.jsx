
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import Profile from './components/Profile';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/courses" style={{ marginRight: '10px' }}>Courses (Protected)</Link>
          <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
          <div style={{ float: 'right' }}>
            <LoginButton />
            <LogoutButton />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="/courses" element={<ProtectedRoute component={CoursesPage} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import { Routes, Route, Link } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CoursesPage from './pages/CoursesPage';
// import Profile from './components/Profile';
// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
// import { ProtectedRoute } from './components/ProtectedRoute';
// import { useAuth0 } from '@auth0/auth0-react';
// import './App.css';

// function App() {
//   const { isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <header>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/courses">Courses</Link>
//         </nav>
//         <div>
//           {isAuthenticated ? (
//             <>
//               <Profile />
//               <LogoutButton />
//             </>
//           ) : (
//             <LoginButton />
//           )}
//         </div>
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route 
//             path="/courses" 
//             element={<ProtectedRoute component={CoursesPage} />} 
//           />
//         </Routes>
//       </main>
//     </>
//   );
// }

// export default App;