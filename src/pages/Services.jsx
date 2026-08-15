const services = [
  {
    number: "01",
    icon: "✚",
    title: "General Consultation",
    description:
      "Professional medical consultation for common health concerns, symptoms, and ongoing health needs.",
  },
  {
    number: "02",
    icon: "♡",
    title: "Preventive Healthcare",
    description:
      "Personalized preventive care focused on maintaining good health and reducing future health risks.",
  },
  {
    number: "03",
    icon: "⌁",
    title: "Health Checkups",
    description:
      "Routine health assessments to help you monitor important aspects of your overall health.",
  },
  {
    number: "04",
    icon: "◉",
    title: "Specialist Consultation",
    description:
      "Access to experienced medical specialists based on your individual healthcare requirements.",
  },
  {
    number: "05",
    icon: "⌁",
    title: "Chronic Care",
    description:
      "Ongoing medical guidance and monitoring for patients managing long-term health conditions.",
  },
  {
    number: "06",
    icon: "✚",
    title: "Family Healthcare",
    description:
      "Comprehensive healthcare support for individuals and families across different age groups.",
  },
];

function Services() {
  return (
    <main className="services-page">

      {/* ================= HERO ================= */}

      <section className="services-hero">

        <span className="services-plus services-plus-one">+</span>
        <span className="services-plus services-plus-two">+</span>

        <div className="services-dots">
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

        <div className="container services-hero-inner">

          <div>

            <span className="services-label">
              OUR MEDICAL SERVICES
            </span>

            <h1>
              Complete Care
              <br />
              <span>For Your Health.</span>
            </h1>

            <p>
              From routine consultations to preventive healthcare,
              our team is here to provide professional and
              compassionate medical care.
            </p>

          </div>


          <div className="services-hero-icon">

            <div className="medical-cross">
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services-section">

        <div className="container">

          <div className="services-section-heading">

            <div>
              <span className="section-label">
                WHAT WE OFFER
              </span>

              <h2>
                Healthcare Designed
                <br />
                <span>Around You.</span>
              </h2>
            </div>

            <p>
              We focus on providing accessible, reliable, and
              personalized healthcare for every patient.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => (

              <article
                className="service-card"
                key={service.number}
              >

                <div className="service-card-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    {service.icon}
                  </div>

                </div>


                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>


                <a
                  href="/appointment"
                  className="service-link"
                >
                  Book Consultation
                  <span>→</span>
                </a>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section className="services-why">

        <div className="container services-why-inner">

          <div className="services-why-visual">

            <div className="why-circle">

              <div className="why-cross">
                +
              </div>

            </div>

            <span className="why-dot dot-one"></span>
            <span className="why-dot dot-two"></span>

            <div className="why-stat">

              <strong>7</strong>

              <span>
                Years of
                <br />
                Experience
              </span>

            </div>

          </div>


          <div className="services-why-content">

            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2>
              Healthcare You Can
              <br />
              <span>Trust.</span>
            </h2>

            <p>
              At CARE Clinic, we believe healthcare should be
              professional, comfortable, and patient-focused.
              Our approach combines medical expertise with
              genuine care for every patient.
            </p>


            <div className="why-features">

              <div>
                <span>✓</span>
                <div>
                  <h4>Experienced Doctors</h4>
                  <p>
                    Qualified professionals focused on your health.
                  </p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <h4>Patient-Centered Care</h4>
                  <p>
                    Treatment and guidance tailored to your needs.
                  </p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <h4>Modern Approach</h4>
                  <p>
                    Reliable healthcare using modern medical practices.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="services-cta">

        <div className="container services-cta-inner">

          <div>

            <span>
              READY TO TAKE THE NEXT STEP?
            </span>

            <h2>
              Your Health Deserves
              <br />
              The Best Care.
            </h2>

          </div>

          <a
            href="/appointment"
            className="services-cta-btn"
          >
            Book An Appointment →
          </a>

        </div>

      </section>

    </main>
  );
}

export default Services;