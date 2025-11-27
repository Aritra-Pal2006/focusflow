import React from 'react';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import icon from '../assets/icon.png';

const Navbar = () => {
  const { user, loading, signInWithGoogle, signOutUser } = useAuth();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Failed to log in with Google:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <img src={icon} alt="FocusFlow Icon" className="navbar-icon" />
        FocusFlow
      </div>
      <div className="navbar-actions">
        <ThemeToggle />
        {loading ? (
          <span>Loading...</span>
        ) : user ? (
          <div className="user-info">
            <span>{user.displayName || user.email}</span>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Sign out
            </button>
          </div>
        ) : (
          <button className="btn" onClick={handleLogin}>
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;