import { useState } from "react";

const faqData = [
  {
    question: "What services does CARE Clinic provide?",
    answer:
      "CARE Clinic provides general consultations, preventive healthcare, routine health checkups, specialist consultations, and personalized medical care for patients of different age groups.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our online appointment form or contact the clinic directly by phone. Our team will help you choose a convenient date and time.",
  },
  {
    question: "Do I need an appointment before visiting the clinic?",
    answer:
      "Appointments are recommended so that we can provide you with timely and personalized care. However, you can contact the clinic to check availability for same-day consultations.",
  },
  {
    question: "What should I bring for my first appointment?",
    answer:
      "Please bring a valid ID, previous medical reports, current prescriptions, and any relevant health records. This helps our doctor understand your medical history better.",
  },
  {
    question: "Do you provide health checkups?",
    answer:
      "Yes. We provide routine and preventive health checkups. Our team can guide you regarding the appropriate checkup based on your age, health history, and requirements.",
  },
  {
    question: "Can I consult a specialist at the clinic?",
    answer:
      "Yes. Specialist consultations may be available depending on the medical requirement. Please contact our clinic to know about available specialists and consultation timings.",
  },
  {
    question: "What are the clinic timings?",
    answer:
      "Our clinic is open Monday to Saturday from 9:00 AM to 8:00 PM. Please contact us before visiting as timings may vary on holidays.",
  },
  {
    question: "How can I contact the clinic?",
    answer:
      "You can contact us by phone at +91 99999 99999 or email us at info@careclinic.com. You can also visit our Contact page for location and other details.",
  },
  {
    question: "Do you provide emergency medical services?",
    answer:
      "For serious or life-threatening emergencies, please contact your local emergency medical service or visit the nearest emergency department immediately. Our clinic team can assist with regular medical consultations.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Yes. Please contact the clinic as early as possible if you need to reschedule your appointment. Our team will help you find another suitable time.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="faq-page">

      {/* ================= HERO ================= */}
      <section className="faq-hero">

        <div className="faq-plus faq-plus-one">+</div>
        <div className="faq-plus faq-plus-two">+</div>

        <div className="faq-dots">
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

        <div className="container faq-hero-inner">

          <div>
            <span className="faq-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h1>
              How Can We
              <span> Help You?</span>
            </h1>

            <p>
              Find answers to common questions about our clinic,
              appointments, services, and healthcare.
            </p>
          </div>

          <div className="faq-hero-icon">
            <span>?</span>
          </div>

        </div>

      </section>


      {/* ================= FAQ CONTENT ================= */}
      <section className="faq-content">

        <div className="container faq-container">

          <div className="faq-heading">
            <span>GENERAL INFORMATION</span>

            <h2>
              Everything You Need
              <br />
              <span>To Know</span>
            </h2>
          </div>


          <div className="faq-list">

            {faqData.map((faq, index) => {

              const isOpen = activeIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  key={index}
                >

                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >

                    <span>
                      <small>0{index + 1}</small>
                      {faq.question}
                    </span>

                    <strong>
                      {isOpen ? "−" : "+"}
                    </strong>

                  </button>


                  <div
                    className={`faq-answer ${
                      isOpen ? "show" : ""
                    }`}
                  >
                    <p>
                      {faq.answer}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="faq-cta">

        <div className="faq-cta-circle"></div>

        <div className="container faq-cta-inner">

          <div>
            <span>STILL HAVE QUESTIONS?</span>

            <h2>
              We're Here To
              <br />
              Help You.
            </h2>
          </div>

          <a
            href="tel:+919999999999"
            className="faq-call-btn"
          >
            ☎ &nbsp; Call Our Clinic
          </a>

        </div>

      </section>

    </main>
  );
}

export default FAQ;