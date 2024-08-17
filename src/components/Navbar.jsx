import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOrganizationsContext } from '../contexts/organizationContext';
import { Home, ChevronDown, Users, Terminal, Activity } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { organizations, currOrganization, setCurrOrganization } = useOrganizationsContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOrgClick = (org) => {
    setCurrOrganization(org);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-button">
          <Home size={18} />
          <span>Home</span>
        </Link>
        <Link to="/agents" className="nav-button">
          <Users size={18} />
          <span>Agents</span>
        </Link>
        <Link to="/api" className="nav-button">
          <Terminal size={18} />
          <span>API</span>
        </Link>
        <Link to="/monitor" className="nav-button">
          <Activity size={18} />
          <span>Monitor</span>
        </Link>
      </div>
      <div className="navbar-right">
        <div 
          className="dropdown"
          ref={dropdownRef}
        >
          <button 
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {currOrganization ? currOrganization.organizationName : organizations.length > 0 ? "Organizations" : "register a org"}
            <ChevronDown size={18} />
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {organizations.length > 0 ? (
                organizations.map((org) => (
                  <li key={org.organizationId}>
                    <a href="#" onClick={() => handleOrgClick(org)}>
                      {org.organizationName}
                    </a>
                  </li>
                ))
              ) : (
                <li>
                  <span>No organizations available</span>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;