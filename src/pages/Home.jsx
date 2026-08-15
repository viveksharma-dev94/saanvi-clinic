import { Link } from "react-router-dom";

function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-section">

        {/* Decorative Elements */}
        <span className="medical-plus plus-one">+</span>
        <span className="medical-plus plus-two">+</span>
        <span className="medical-circle circle-one"></span>
        {/* <span className="medical-circle circle-two"></span> */}

        <div className="medical-dots dots-one">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>

        <div className="container hero-container">

          <div className="hero-content">

            <span className="hero-label">
              <span className="label-plus">+</span>
              WELCOME TO CARE CLINIC
            </span>

            <h1>
              Quality Healthcare
              <br />
              <span>You Can Trust</span>
            </h1>

            <p>
              We provide compassionate healthcare with experienced doctors,
              modern facilities, and a patient-first approach.
            </p>

            <div className="hero-buttons">
              <Link to="/appointment" className="btn-primary">
                Book Appointment
              </Link>

              <a href="tel:+919869407515" className="btn-outline">
                Call Now
              </a>
            </div>

            <div className="hero-features">

              <div className="hero-feature">
                <div className="feature-icon">+</div>
                <div>
                  <strong>Expert Doctors</strong>
                  <span>Experienced & Caring</span>
                </div>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">✓</div>
                <div>
                  <strong>Modern Care</strong>
                  <span>Advanced Facilities</span>
                </div>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">♡</div>
                <div>
                  <strong>Patient First</strong>
                  <span>Your Comfort Matters</span>
                </div>
              </div>

            </div>

          </div>

          {/* Hero Visual */}
          <div className="hero-visual">

            <div className="hero-blob">
              <img src="/images/doctor-sandesh-malad-east.png" alt="Doctor"></img>
            </div>

            {/* <div className="doctor-placeholder">
              <span>Doctor Image</span>
            </div> */}

            <div className="experience-card">
              <div className="experience-icon">★</div>
              <div>
                <strong>7+ Years</strong>
                <span>of Trusted Care</span>
              </div>
            </div>

            <div className="medical-dots dots-two">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="services-section">

        <div className="section-decoration">
          <span>+</span>
        </div>

        <div className="container">

          <div className="section-heading">
            <span>OUR SERVICES</span>
            <h2>Complete Care For Your Health</h2>
            <p>
              Professional medical services designed around your health
              and wellbeing.
            </p>
          </div>

          <div className="services-grid">

            <div className="service-card">
              <div className="service-icon">+</div>
              <h3>General Consultation</h3>
              <p>
                Comprehensive medical consultation for your everyday
                healthcare needs.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">♥</div>
              <h3>Preventive Care</h3>
              <p>
                Regular health checkups and preventive care to keep
                you healthy.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">✓</div>
              <h3>Health Checkup</h3>
              <p>
                Detailed health assessments with modern diagnostic
                facilities.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">+</div>
              <h3>Specialist Care</h3>
              <p>
                Access experienced specialists for your specific
                healthcare requirements.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">+</div>
              <h3>Specialist Care</h3>
              <p>
                Access experienced specialists for your specific
                healthcare requirements.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">+</div>
              <h3>Specialist Care</h3>
              <p>
                Access experienced specialists for your specific
                healthcare requirements.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT / TRUST ================= */}
      <section className="about-preview">

        <div className="about-shape shape-one"></div>
        <div className="about-shape shape-two"></div>

        <div className="container about-container">

          <div className="about-visual">
            <div className="about-image-placeholder">
              <img src="/images/saanvi-clinic-malad-east.jpg" alt="Doctor"></img>
            </div>

            <div className="about-badge">
              <strong>1200+</strong>
              <span>Happy Patients</span>
            </div>
          </div>

          <div className="about-content">

            <span className="section-label">
              ABOUT OUR CLINIC
            </span>

            <h2>
              Healthcare With
              <span> Heart & Expertise</span>
            </h2>

            <p>
              At CARE Clinic, we believe quality healthcare should be
              accessible, comfortable, and patient-focused.
            </p>

            <p>
              Our experienced medical team combines professional expertise
              with modern healthcare practices to provide personalized
              treatment for every patient.
            </p>

            <div className="about-points">

              <div>
                <span>✓</span>
                <p>Experienced medical professionals</p>
              </div>

              <div>
                <span>✓</span>
                <p>Modern healthcare facilities</p>
              </div>

              <div>
                <span>✓</span>
                <p>Patient-focused treatment</p>
              </div>

            </div>

            <Link to="/about" className="btn-primary">
              Know More About Us
            </Link>

          </div>

        </div>
      </section>


      {/* ================= APPOINTMENT CTA ================= */}
      <section className="appointment-section-home">

        <div className="cta-dots">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>

        <div className="cta-plus">+</div>

        <div className="container appointment-container">

          <div>
            <span className="cta-label">CONTACT & APPOINTMENT</span>

            <h2>
              Your Health Deserves
              <br />
              The Best Care
            </h2>

            <p>
              Book your appointment today and take the first step
              towards better health.
            </p>
          </div>

          <Link to="/appointment" className="cta-button">
            Book Appointment →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;