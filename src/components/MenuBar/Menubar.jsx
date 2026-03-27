import React, { useContext, useState } from 'react';
import './Menubar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Menubar = () => {
  const { setAuthData, auth } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role")
    setAuthData(null, null);
    navigate("/login");
  }

  const isActive = (path) => {
    return location.pathname === path;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const isAdmin = auth && auth.role === "ROLE_ADMIN";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 main-navbar">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={assets.logo} alt="Logo" className="navbar-logo" />
      </Link>

      <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`navbar-collapse-custom ${isOpen ? 'show-mobile' : ''}`} id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list-left">
          <li className="nav-item">
            <Link className={`nav-link-custom ${isActive('/dashboard') ? 'active-link' : ''}`} to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link-custom ${isActive('/explore') ? 'active-link' : ''}`} to="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
          </li>
          {
            isAdmin && (
              <>
                <li className="nav-item">
                  <Link className={`nav-link-custom ${isActive('/items') ? 'active-link' : ''}`} to="/items" onClick={() => setIsOpen(false)}>Manage Items</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link-custom ${isActive('/category') ? 'active-link' : ''}`} to="/category" onClick={() => setIsOpen(false)}>Manage Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link-custom ${isActive('/users') ? 'active-link' : ''}`} to="/users" onClick={() => setIsOpen(false)}>Manage Users</Link>
                </li>
              </>
            )
          }
          <li className="nav-item">
            <Link className={`nav-link-custom ${isActive('/orders') ? 'active-link' : ''}`} to="/orders" onClick={() => setIsOpen(false)}>Order History</Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto align-items-center nav-list-right">
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle d-flex align-items-center text-white" id='navbarDropdown' role='button' data-bs-toggle="dropdown" aria-expanded="false">
              <img src={assets.profile} alt="Profile" height={32} width={32} className='rounded-circle me-1 border border-light' />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby='navbarDropdown'>
              <li>
                <a href="#" className="dropdown-item">Settings</a>
              </li>
              <li>
                <a href="#" className="dropdown-item">Activity log</a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <button className="dropdown-item text-danger fw-bold" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
