import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      {/* Decorative Elements */}
      <div className="footer-circle footer-circle-one"></div>
      <div className="footer-circle footer-circle-two"></div>

      <div className="footer-dots">
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

      <div className="footer-plus">+</div>

      <div className="container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* About */}
          <div className="footer-column footer-about">

            <Link to="/" className="footer-logo">
              CARE<span> Clinic</span>
            </Link>

            <p>
              Providing trusted, compassionate and quality healthcare
              for you and your family. Your health and wellbeing are
              always our priority.
            </p>

            <div className="footer-social">

              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="Twitter">
                𝕏
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About Clinic</Link>
              </li>

              {/* <li>
                <Link to="/doctors">Our Doctors</Link>
              </li> */}

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/faq">FAQ</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

          </div>


          {/* Services */}
          <div className="footer-column">

            <h3>Our Services</h3>

            <ul>
              <li>
                <Link to="/services">General Consultation</Link>
              </li>

              <li>
                <Link to="/services">Preventive Care</Link>
              </li>

              <li>
                <Link to="/services">Health Checkup</Link>
              </li>

              <li>
                <Link to="/services">Specialist Care</Link>
              </li>

              <li>
                <Link to="/appointment">Book Appointment</Link>
              </li>
            </ul>

          </div>


          {/* Contact */}
          <div className="footer-column footer-contact">

            <h3>Contact Us</h3>

            <div className="contact-item">
              <span className="contact-icon">☎</span>

              <div>
                <small>Call Us</small>
                <a href="tel:+919869407515">
                  +91 9869407515
                </a>
              </div>
            </div>


            <div className="contact-item">
              <span className="contact-icon">@</span>

              <div>
                <small>Email</small>
                <a href="mailto:info@careclinic.com">
                  sandeshyadav100@gmail.com
                </a>
              </div>
            </div>


            <div className="contact-item">
              <span className="contact-icon">⌖</span>

              <div>
                <small>Visit Us</small>
                <p>
                  Appa Pada, Malad East
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>


            <div className="contact-item">
              <span className="contact-icon">◷</span>

              <div>
                <small>Opening Hours</small>
                <p>
                  Mon - Sat: 10:00 AM - 10:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} The Saanvi Clinic. All rights reserved.
          </p>

          <div className="footer-legal">

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;