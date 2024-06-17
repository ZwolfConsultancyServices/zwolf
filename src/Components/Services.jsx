// src/components/Services.js
import React from 'react';

const Services = () => {
    const serviceData = [
        {
            icon: 'images/webDevloper.png', 
            heading: "Web & Software Development"
        },
        {
            icon: 'images/digitalmarketing.png', 
            heading: "Digital Marketing"
        },
        {
            icon: 'images/designer.png', 
            heading: "Graphic Designing"
        },
        {
            icon: 'images/contentwriting.png', 
            heading: "Content Writing"
        },
        {
            icon: 'images/meeting.png', 
            heading: "Business Consultation"
        },
        {
            icon: 'images/leadgeneration.png', 
            heading: "Lead Generation"
        },
        {
            icon: 'images/legalworks.png', 
            heading: "All Legal Works"
        },
        {
            icon: 'images/domainhosting.png', 
            heading: "Domain Hosting"
        }
    ];

    return (
        <section id="advertisers" className="advertisers-service-sec pt-5 mt-4">
            <div className="container">
                <div className="row">
                    <div className="section-header text-center">
                        <h2 className="fw-bold fs-1">
                            Our
                            <span className="b-class-secondary main-hover"> Services </span>
                        </h2>
                    </div>
                </div>
                <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                    {serviceData.map((service, index) => (
                        <div className="col" key={index}>
                            <div className="service-card rounded-bottom">
                                <div className="icon-wrapper">
                                    <img src={service.icon} alt={service.heading} />
                                </div>
                                <h3>{service.heading}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
