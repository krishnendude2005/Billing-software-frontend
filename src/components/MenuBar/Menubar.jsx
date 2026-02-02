import React from 'react';
import './Menubar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <Link className="navbar-brand" to="/"> </Link>

        <img src={assets.logo} alt="Logo" height="50" />
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/explore">Explore</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/items">manage Items</Link>
          </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category">manage Categories</Link>
          </li>
            <li className="nav-item">
            <Link className="nav-link" to="/users">manage Users</Link>
          </li>
        </ul>
      
      {/* Add the dorpdown for user-profile */}
      </div>
    </nav>
  );
};

export default Menubar;
