import React from 'react';
import { Link } from 'react-router-dom';  
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Zwolfooter = () => {
  return (
    <footer className="mt-5 footer-main">
      <div className="container-footer-all">
        <div className="container-body container">
          <div className="row">
            <div className="col-12 col-md-4 text-center text-md-left mb-3">
              <img src="images/blackLogo.jpeg" alt="Zwolf Consultancy Service Logo" className="footer-logo " />
              <div className="colum1">
                <h1 className='text-white'>Zwolf Consultancy Service</h1>
                <p>
                  ZWOLF CONSULTANCY SERVICES is a leading consultancy company specializing in web development, app development, business consultation, digital marketing, DLT registration, and many more services.
                </p>
                <p>
                  Our team is very passionate and has deep knowledge about the services provided by us. We truly think that we are capable of handling our customers and the promises that we make. Our clients and ourselves benefit from our hard work and dedication.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-md-left mb-3">
              <div className="colum2">
                <h1 className="text-white">Contact Us</h1>
                <p>📞 +91 9758242279</p>
                <p>📞 +91 7900671757</p>
                <p>📧 <a href="mailto:Zwolfconsaltancyservices@gmail.com">Zwolfconsaltancyservices@gmail.com</a></p>
                <p>📍 C-285 Pul Pehladpur New Delhi 110044</p>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-md-left mb-3">
              <div className="colum3 text-white">
                <h1>Quick Links</h1>
                <Link to="/"><p>Home</p></Link>
                <Link to="/services"><p>Services</p></Link>
                <Link to="/about"><p>About Us</p></Link>
                <Link to="/terms-and-conditions"><p>Terms & Conditions</p></Link>
                <Link to="/privacy-policy"><p>Privacy Policy</p></Link>
                <Link to="/refund-policy"><p>Refund Policy</p></Link>

                {/* Social Media Icons */}
                <div className="social-icons p-3 text-center">
    <div className="row justify-content-center">
        {/* <div className="col-2">
            <a className='p-2' href="https://www.linkedin.com/yourlinkedin" target='_blank'>
                <FaLinkedin size={25} color='#0A66C2'/>
            </a>
        </div> */}
        <div className="col-2">
            <a className='p-2' href="https://wa.me/917900671757" target='_blank' >
                <FaWhatsapp size={25} color='green' />
            </a>
        </div>
        <div className="col-2">
            <a className='p-2' href="https://www.facebook.com/share/Jz8eL66guZLRVvUw/?mibextid=qi2Omg " target='_blank'>
                <FaFacebook size={25} color='#1877F2'/>
            </a>
        </div>
        <div className="col-2">
            <a className='p-2' href="https://www.instagram.com/zwolfconsultancyservices?igsh=d2pzOWJmeDBnbWZx" target='_blank'>
                <FaInstagram size={25} color='#833ab4'/>
            </a>
        </div>
        <div className="col-2">
            <a className='p-2' href="https://x.com/Zwolfconsu6617?t=7FMu89ki1YCAjGJpJZ3q-Q&s=09" target='_blank'>
                <FaTwitter size={25} color='#1DA1F2' />
            </a>
        </div>
    </div>
</div>

              </div>
            </div>
          </div>
        </div>
        <div className="container-footer">
          <div className="footer">
            <div className="copyright text-center">
              <p>&copy; 2023 Zwolf Consultancy Services. <br /> All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Zwolfooter;
