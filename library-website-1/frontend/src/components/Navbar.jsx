import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Library</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/upload" className="navbar-item">Upload</Link>
        <Link to="/dashboard" className="navbar-item">Dashboard</Link>
        <Link to="/login" className="navbar-item">Login</Link>
        <Link to="/register" className="navbar-item">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;