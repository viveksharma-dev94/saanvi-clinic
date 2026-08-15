function About() {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <span className="about-plus about-plus-one">+</span>
        <span className="about-plus about-plus-two">+</span>

        <div className="about-dots">
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

        <div className="container about-hero-inner">

          <div>

            <span className="about-label">
              ABOUT OUR CLINIC
            </span>

            <h1>
              Healthcare With
              <br />
              <span>Heart & Expertise.</span>
            </h1>

            <p>
              We are committed to providing reliable, compassionate,
              and personalized healthcare for individuals and families.
            </p>

          </div>

          <div className="about-hero-visual">

            <div className="about-main-circle">
              <span>+</span>
            </div>

            <div className="about-floating-card">
              <strong>7+</strong>
              <span>Years of Experience</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="about-intro">

        <div className="container about-intro-grid">

          <div className="about-intro-heading">

            <span className="section-label">
              WHO WE ARE
            </span>

            <div className="about-approach-visual">

            <div className="approach-circle-img">

              {/* <div className="approach-cross">
                <span></span>
                <span></span>
              </div> */}

            </div>

            <div className="approach-dot approach-dot-one"></div>
            <div className="approach-dot approach-dot-two"></div>

          </div>

          </div>


          <div className="about-intro-content">

            <h2>
              Meet Dr. Sandesh Yadav
            </h2>

            <p>
              Dr. Sandesh Yadav, BHMS, CCMP, PGDEMS, CCH & CGO, is a dedicated family physician with a special
              interest in Child Health and Family Medicine. He provides patient-centered healthcare with a focus
              on careful clinical assessment, appropriate diagnosis, individualized treatment, preventive healthcare,
              and follow-up care. At The Saanvi Clinic, Dr. Sandesh Yadav aims to provide compassionate and accessible
              medical guidance for children, adults, and families in a comfortable and patient-friendly environment.
            </p>

            <p>
              From routine consultations and preventive care to
              ongoing health management, our team is here to
              support you at every step of your healthcare journey.
            </p>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="about-stats">

        <div className="container about-stats-grid">

          <div className="about-stat">
            <strong>7+</strong>
            <span>Years Experience</span>
          </div>

          <div className="about-stat">
            <strong>5K+</strong>
            <span>Patients Served</span>
          </div>

          <div className="about-stat">
            <strong>15+</strong>
            <span>Medical Services</span>
          </div>

          <div className="about-stat">
            <strong>98%</strong>
            <span>Patient Satisfaction</span>
          </div>

        </div>

      </section>


      {/* ================= OUR APPROACH ================= */}

      <section className="about-approach">

        <div className="container about-approach-grid">

          <div className="about-approach-visual">

            <div className="approach-circle">

              <div className="approach-cross">
                <span></span>
                <span></span>
              </div>

            </div>

            <div className="approach-dot approach-dot-one"></div>
            <div className="approach-dot approach-dot-two"></div>

          </div>


          <div className="about-approach-content">

            <span className="section-label">
              OUR APPROACH
            </span>

            <h2>
              Simple, Personal &
              <br />
              <span>Patient Focused.</span>
            </h2>

            <p>
              Healthcare should never feel complicated. We aim
              to make every interaction comfortable and every
              decision easy to understand.
            </p>


            <div className="approach-list">

              <div>

                <span>01</span>

                <div>
                  <h3>Listen First</h3>
                  <p>
                    We understand your concerns before discussing
                    the next steps.
                  </p>
                </div>

              </div>


              <div>

                <span>02</span>

                <div>
                  <h3>Personalized Care</h3>
                  <p>
                    Your healthcare plan is based on your
                    individual needs.
                  </p>
                </div>

              </div>


              <div>

                <span>03</span>

                <div>
                  <h3>Long-Term Wellness</h3>
                  <p>
                    We focus on helping you maintain better
                    health over time.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}

      <section className="about-values">

        <div className="container">

          <div className="about-values-heading">

            <span className="section-label">
              OUR VALUES
            </span>

            <h2>
              What Guides
              <br />
              <span>Our Care.</span>
            </h2>

          </div>


          <div className="values-grid">

            <div className="value-card">

              <div className="value-icon">
                ♡
              </div>

              <h3>Compassion</h3>

              <p>
                We treat every patient with empathy, respect,
                and genuine care.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                ✚
              </div>

              <h3>Excellence</h3>

              <p>
                We continuously work toward providing high
                standards of medical care.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                ◉
              </div>

              <h3>Trust</h3>

              <p>
                We believe honest communication is the foundation
                of a strong doctor-patient relationship.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                ✓
              </div>

              <h3>Integrity</h3>

              <p>
                We put patient well-being and responsible
                healthcare decisions first.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div className="container about-cta-inner">

          <div>

            <span>
              YOUR HEALTH MATTERS
            </span>

            <h2>
              Let's Take the Next
              <br />
              Step Together.
            </h2>

          </div>

          <a
            href="/appointment"
            className="about-cta-btn"
          >
            Book An Appointment →
          </a>

        </div>

      </section>

    </main>
  );
}

export default About;