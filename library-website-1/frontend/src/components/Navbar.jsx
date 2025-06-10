import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item has-text-weight-bold is-size-4">Library</Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/dashboard" className="navbar-item">Dashboard</Link>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="navbar-item">Login</Link>
        <Link to="/register" className="navbar-item">Register</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;