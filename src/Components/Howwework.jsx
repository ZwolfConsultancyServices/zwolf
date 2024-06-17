import React from 'react';

const Howwework = () => {
    const data = 
        [{
            icon:'images/analytics.png',  step:"1",heading:"Analysis of Requirements"
          },
          {
            icon:'images/ux-design.png', step:"2", heading:"UX/UI Designing"
          },{
            icon:'images/development.png', step:"3",heading:"Development"
          },{
            icon:'images/testing.png',step:"4", heading:"Testing"
          },{
            icon:'images/deployment.png',step:"5", heading:"Deployment"
          }]
   

    return (
        <section id="advertisers" className="section-how-we-work pt-5 pb-5 mt-4 bg-light">
            <div className="container">
                <div className="row">
                    <div className="section-header text-center col-12">
                        <h2 className="fw-bold fs-1">
                            How
                            <span className="b-class-secondary main-hover"> We Work </span>
                        </h2>
                    </div>
                </div>
                <div className="row mt-5 mt-md-4 justify-content-center">
                    {data.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch" key={index}>
                            <div className="card rounded shadow-sm border-0 flex-fill animated-border">
                                <div className="card-body p-4 text-center">
                                <h2 className=''>{`Step ${item.step}`}</h2>
                                    <img src={item.icon} alt="" className=" mt-3 img-fluid d-block mx-auto  mb-3 small-img"/>
                                    <h5>{item.heading}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Howwework;
