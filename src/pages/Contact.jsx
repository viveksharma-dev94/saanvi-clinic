import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Thank you! We will contact you shortly.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <span className="contact-plus contact-plus-one">+</span>
        <span className="contact-plus contact-plus-two">+</span>

        <div className="contact-dots">
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

        <div className="container contact-hero-inner">

          <div>
            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h1>
              We're Here
              <br />
              <span>To Help You.</span>
            </h1>

            <p>
              Have a question or need assistance? Get in touch
              with our clinic team. We're happy to help.
            </p>
          </div>

          <div className="contact-hero-icon">
            <span>+</span>
          </div>

        </div>

      </section>


      {/* ================= CONTACT INFO ================= */}

      <section className="contact-info-section">

        <div className="container">

          <div className="contact-info-grid">

            {/* Phone */}

            <a
              href="tel:+919869407515"
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                ☎
              </div>

              <div>
                <span>CALL US</span>

                <h3>
                  +91 9869407515
                </h3>

                <p>
                  Speak with our clinic team
                </p>
              </div>
            </a>


            {/* Email */}

            <a
              href="sandeshyadav100@gmail.com"
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                @
              </div>

              <div>
                <span>EMAIL US</span>

                <h3>
                  sandeshyadav100@gmail.com
                </h3>

                <p>
                  Send us your questions
                </p>
              </div>
            </a>


            {/* Address */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                ⌖
              </div>

              <div>
                <span>VISIT US</span>

                <h3>
                  Our Clinic
                </h3>

                <p>
                  Appa Pada, Malad East
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>

            </div>


            {/* Timing */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                ◷
              </div>

              <div>
                <span>OPENING HOURS</span>

                <h3>
                  Mon - Sat
                </h3>

                <p>
                  10:00 AM - 10:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT FORM ================= */}

      <section className="contact-form-section">

        <div className="container contact-form-container">

          {/* Left Content */}

          <div className="contact-form-intro">

            <span className="section-label">
              SEND US A MESSAGE
            </span>

            <h2>
              How Can We
              <br />
              <span>Help You?</span>
            </h2>

            <p>
              Fill out the form and our team will get back to
              you as soon as possible.
            </p>

            <div className="contact-trust">

              <div>
                <span>✓</span>
                <p>Quick Response</p>
              </div>

              <div>
                <span>✓</span>
                <p>Professional Support</p>
              </div>

              <div>
                <span>✓</span>
                <p>Your Privacy Matters</p>
              </div>

            </div>

          </div>


          {/* Form */}

          <div className="contact-form-card">

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 99999 99999"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= MAP ================= */}

      <section className="contact-map-section">

        <div className="container">

          <div className="map-heading">

            <div>
              <span className="section-label">
                FIND US
              </span>

              <h2>
                Visit Our Clinic
              </h2>
            </div>

            <a
              href="#"
              className="map-direction-btn"
            >
              Get Directions →
            </a>

          </div>


          <div className="map-placeholder">

            <div className="map-grid"></div>

            <div className="map-pin">

              <span>+</span>

            </div>

            <div className="map-label">
              <strong>CARE Clinic</strong>
              <span>123 Anywhere Street, Mumbai</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="contact-cta">

        <div className="container contact-cta-inner">

          <div>

            <span>
              NEED AN APPOINTMENT?
            </span>

            <h2>
              Take Care of Your
              <br />
              Health Today.
            </h2>

          </div>

          <a
            href="/appointment"
            className="contact-cta-btn"
          >
            Book Appointment →
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;