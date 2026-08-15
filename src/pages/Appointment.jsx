import { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
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

    console.log("Appointment:", formData);

    alert("Your appointment request has been submitted.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <main className="appointment-page">

      {/* ================= HERO ================= */}

      <section className="appointment-hero">

        <span className="appointment-plus appointment-plus-one">
          +
        </span>

        <span className="appointment-plus appointment-plus-two">
          +
        </span>

        <div className="appointment-dots">
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

        <div className="container appointment-hero-inner">

          <div>

            <span className="appointment-label">
              BOOK AN APPOINTMENT
            </span>

            <h1>
              Your Health,
              <br />
              <span>Your Priority.</span>
            </h1>

            <p>
              Schedule a consultation with our medical team
              at a time that works best for you.
            </p>

          </div>

          <div className="appointment-hero-icon">

            <div className="calendar-icon">

              <div className="calendar-top"></div>

              <div className="calendar-body">
                <span>+</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= APPOINTMENT SECTION ================= */}

      <section className="appointment-section">

        <div className="container appointment-layout">

          {/* ================= LEFT INFO ================= */}

          <aside className="appointment-sidebar">

            <div className="appointment-side-card">

              <span className="section-label">
                YOUR VISIT
              </span>

              <h2>
                Let's Get You
                <br />
                <span>Better.</span>
              </h2>

              <p>
                Complete the form and our clinic team will
                contact you to confirm your appointment.
              </p>


              <div className="appointment-benefits">

                <div>

                  <span>✓</span>

                  <div>
                    <h4>Easy Booking</h4>
                    <p>
                      Request your preferred date and time.
                    </p>
                  </div>

                </div>


                <div>

                  <span>✓</span>

                  <div>
                    <h4>Expert Care</h4>
                    <p>
                      Consult with experienced professionals.
                    </p>
                  </div>

                </div>


                <div>

                  <span>✓</span>

                  <div>
                    <h4>Personalized Attention</h4>
                    <p>
                      Care focused on your individual needs.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Emergency / Call */}

            <div className="appointment-call-card">

              <div className="appointment-call-icon">
                ☎
              </div>

              <div>

                <span>NEED HELP?</span>

                <h3>
                  +91 9869407515
                </h3>

                <p>
                  Call our clinic team
                </p>

              </div>

            </div>

          </aside>


          {/* ================= FORM ================= */}

          <div className="appointment-form-card">

            <div className="appointment-form-heading">

              <span className="section-label">
                APPOINTMENT REQUEST
              </span>

              <h2>
                Tell Us About
                <br />
                <span>Your Visit.</span>
              </h2>

              <p>
                Please provide your details below. Our team
                will contact you to confirm the appointment.
              </p>

            </div>


            <form onSubmit={handleSubmit}>

              {/* Name + Phone */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="appointment-name">
                    Full Name
                  </label>

                  <input
                    id="appointment-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="appointment-phone">
                    Phone Number
                  </label>

                  <input
                    id="appointment-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 99999 99999"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Email */}

              <div className="form-group">

                <label htmlFor="appointment-email">
                  Email Address
                </label>

                <input
                  id="appointment-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              {/* Service */}

              <div className="form-group">

                <label htmlFor="appointment-service">
                  Select Service
                </label>

                <select
                  id="appointment-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Choose a service
                  </option>

                  <option value="general-consultation">
                    General Consultation
                  </option>

                  <option value="health-checkup">
                    Health Checkup
                  </option>

                  <option value="preventive-healthcare">
                    Preventive Healthcare
                  </option>

                  <option value="specialist-consultation">
                    Specialist Consultation
                  </option>

                  <option value="chronic-care">
                    Chronic Care
                  </option>

                  <option value="family-healthcare">
                    Family Healthcare
                  </option>

                </select>

              </div>


              {/* Date + Time */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="appointment-date">
                    Preferred Date
                  </label>

                  <input
                    id="appointment-date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="appointment-time">
                    Preferred Time
                  </label>

                  <select
                    id="appointment-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select time
                    </option>

                    <option value="09:00">
                      9:00 AM
                    </option>

                    <option value="10:00">
                      10:00 AM
                    </option>

                    <option value="11:00">
                      11:00 AM
                    </option>

                    <option value="12:00">
                      12:00 PM
                    </option>

                    <option value="14:00">
                      2:00 PM
                    </option>

                    <option value="15:00">
                      3:00 PM
                    </option>

                    <option value="16:00">
                      4:00 PM
                    </option>

                    <option value="17:00">
                      5:00 PM
                    </option>

                    <option value="18:00">
                      6:00 PM
                    </option>

                    <option value="19:00">
                      7:00 PM
                    </option>

                  </select>

                </div>

              </div>


              {/* Message */}

              <div className="form-group">

                <label htmlFor="appointment-message">
                  Reason for Visit
                </label>

                <textarea
                  id="appointment-message"
                  name="message"
                  rows="4"
                  placeholder="Briefly describe your concern..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>


              {/* Privacy */}

              <div className="appointment-privacy">

                <span>🔒</span>

                <p>
                  Your information is kept private and will
                  only be used to manage your appointment.
                </p>

              </div>


              <button
                type="submit"
                className="appointment-submit"
              >
                Request Appointment →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="appointment-bottom">

        <div className="container appointment-bottom-inner">

          <div>

            <span>
              HAVE QUESTIONS?
            </span>

            <h2>
              Speak With Our
              <br />
              <strong>Clinic Team.</strong>
            </h2>

          </div>

          <a
            href="tel:+919869407515"
            className="appointment-call-btn"
          >
            ☎ &nbsp; Call Now
          </a>

        </div>

      </section>

    </main>
  );
}

export default Appointment;