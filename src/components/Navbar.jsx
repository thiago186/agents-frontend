import React from 'react';
import { Link } from 'react-router-dom';
import { useOrganizationsContext } from '../contexts/organizationContext';
import { Home, ChevronDown, Users, Terminal, Activity } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { organizations } = useOrganizationsContext();

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
        <div className="dropdown">
          <button className="dropdown-toggle">
            Organizations
            <ChevronDown size={18} />
          </button>
          <ul className="dropdown-menu">
            {organizations.map((org) => (
              <li key={org.id}>
                <a href="#" onClick={() => console.log(`Selected org: ${org.name}`)}>
                  {org.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;