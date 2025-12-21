import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
          <Shield size={32} />
          <span>10Acious</span>
        </Link>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ fontWeight: 500, color: 'var(--color-text)' }}>Home</Link>
          <Link to="/about" style={{ fontWeight: 500, color: 'var(--color-text)' }}>About Us</Link>
          <Link to="/contact" style={{ fontWeight: 500, color: 'var(--color-text)' }}>Contact</Link>
        </div>
        <Link to="/contact" className="btn btn-primary">
          Get Protected
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
