import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">

          <NavLink to="/" className="logo" onClick={closeMenu}>
            <img
              src="../images/logo.png"
              alt="The Saanvi Clinic"
              className="logo-image"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="main-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            {/* <NavLink to="/doctors">Doctors</NavLink> */}
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Desktop Appointment */}
          <NavLink
            to="/appointment"
            className="appointment-btn desktop-appointment"
          >
            Book Appointment
          </NavLink>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>


      {/* Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>


      {/* Right Side Mobile Menu */}
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <div className="mobile-menu-header">

          <NavLink
            to="/"
            className="mobile-logo"
            onClick={closeMenu}
          >
            CARE<span> Clinic</span>
          </NavLink>

          <button
            className="mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>

        </div>


        <nav className="mobile-nav">

          <NavLink to="/" onClick={closeMenu}>
            <span>01</span>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            <span>02</span>
            About Clinic
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            <span>03</span>
            Services
          </NavLink>

          {/* <NavLink to="/doctors" onClick={closeMenu}>
            <span>04</span>
            Doctors
          </NavLink> */}

          <NavLink to="/faq" onClick={closeMenu}>
            <span>05</span>
            FAQ
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            <span>06</span>
            Contact
          </NavLink>

        </nav>


        <div className="mobile-menu-bottom">

          <p>Need medical assistance?</p>

          <a
            href="tel:+919999999999"
            className="mobile-call"
          >
            ☎ &nbsp; +91 99999 99999
          </a>

          <NavLink
            to="/appointment"
            className="mobile-appointment"
            onClick={closeMenu}
          >
            Book Appointment →
          </NavLink>

        </div>


        {/* Decorative Elements */}
        <span className="mobile-medical-plus">+</span>

        <div className="mobile-menu-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </aside>
    </>
  );
}

export default Header;