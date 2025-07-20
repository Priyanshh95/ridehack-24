'use client';

import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavClick = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary-black/90 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h2 className="text-2xl font-bold text-white tracking-wide cursor-pointer">
          <Link to="home" className="hover:text-secondary-white transition-colors duration-200" onClick={closeMenu} smooth duration={500}>
            SmartMed
          </Link>
        </h2>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="home" className="nav-link" smooth duration={500}>HOME</Link>
          <Link to="about" className="nav-link" smooth duration={500}>ABOUT</Link>
          <Link to="prize" className="nav-link" smooth duration={500}>PRIZE</Link>
          <Link to="faq" className="nav-link" smooth duration={500}>FAQs</Link>
          <Link to="sponser" className="nav-link" smooth duration={500}>PARTNERS</Link>
        </div>
        {/* Hamburger Icon */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-secondary-white"
          onClick={handleNavClick}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close (X) icon
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-primary-black/95 shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 100 }}
      >
        <div className="flex flex-col items-end p-6 space-y-6">
          <button
            type="button"
            className="mb-4"
            onClick={handleNavClick}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link to="home" className="nav-link-mobile" onClick={closeMenu} smooth duration={500}>HOME</Link>
          <Link to="about" className="nav-link-mobile" onClick={closeMenu} smooth duration={500}>ABOUT</Link>
          <Link to="prize" className="nav-link-mobile" onClick={closeMenu} smooth duration={500}>PRIZE</Link>
          <Link to="faq" className="nav-link-mobile" onClick={closeMenu} smooth duration={500}>FAQs</Link>
          <Link to="sponser" className="nav-link-mobile" onClick={closeMenu} smooth duration={500}>PARTNERS</Link>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;
