import React from 'react';

const Ourclient = () => {
  return (
    <>
      <section id="advertisers" className="advertisers-service-sec pt-5 bg-light mt-4">
        <div className="container">
          <div className="row">
            <div className="col text-center text-dark">
              <h2 className="fw-bold fs-1">
                What our
                <span className="text-primary main-hover"> Clients Say?</span>
              </h2>
            </div>
          </div>

         
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center text-dark" style={{ maxWidth: '800px', margin: 'auto' }}>
              <div className="aboutPage p-4" style={{ maxHeight: '60vh', overflowY: 'auto', fontSize: '1.25rem' }}>
                <p className="text-justify">
                  ZWOLF CONSULTANCY SERVICES is a leading consultancy company specializing in web development, app development, business consultation, digital marketing, DLT registration and many more services. Our team is passionate and has deep knowledge about the services provided by us. We understand how to handle our clients effectively. We truly believe in our ability to fulfill our promises to our customers. Together, our clients and ourselves benefit from our hard work and dedication. Our team creates amazing offers for our clients, and they trust us to handle their needs. We strive for perfection and support this goal with effort and passion. We help businesses with our deep knowledge and expertise. We develop business strategies for our clients to increase their profits.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center text-dark">
              <div className='Text-Praveen'>Praveen Kumar</div>
              <div className='Text-ceo'>CEO and Founder</div>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Ourclient;
