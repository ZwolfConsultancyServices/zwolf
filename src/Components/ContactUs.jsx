import React from 'react'

const ContactUs = () => {
    return (
        <section id="contact-us-section" className="pt-5 bg-light mt-4">
          <div className="container">
            <div className="row">
              <div className="col text-center text-dark">
                <h2 className="fw-bold fs-1">
                  Contact <span className="text-primary main-hover">Us</span>
                </h2>
                <p className="fs-5">We would love to hear from you! Reach out to us through any of the following ways.</p>
              </div>
            </div>
    
            <div className="row justify-content-center mt-5">
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card h-100 contact-card">
                  <div className="card-body text-center">
                    <h5 className="card-title">Call Us</h5>
                    <p className="card-text">
                      📞 +91 9758242279<br />
                      📞 +91 7900671757
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card h-100 contact-card">
                  <div className="card-body text-center">
                    <h5 className="card-title">Email Us</h5>
                    <p className="card-text">
                      📧 <a href="mailto:Zwolfconsaltancyservices@gmail.com">Zwolfconsaltancyservices@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card h-100 contact-card">
                  <div className="card-body text-center">
                    <h5 className="card-title">Visit Us</h5>
                    <p className="card-text">
                      📍 C-285 Pul Pehladpur<br />
                      New Delhi 110044
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ContactUs