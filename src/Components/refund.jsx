import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container-fluid">
      <section id="contact-us-section" className="pt-5 bg-light mt-4">
        <div className="container">
          <div className="row">
          <div className="col text-center text-dark">
              <h2 className="fw-bold fs-1">
                Refund  <span className="text-primary main-hover">Policy</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col text-dark">
              <div className="refund-content" style={{ overflowY: 'auto', padding: '20px' }}>
                <p>
                  Any request for change or cancellation in any Subscription Plan prior to the expiration of the
                  current Subscription Term period will not entail You to a refund for any portion of the Subscription
                  Fee paid by You for the unexpired period of the current Subscription Term.
                </p>
                <p>
                  We reserve the right to terminate your use of the Service for any or no reason upon reasonable
                  notice. We may or may not send your service's terminate notice.
                </p>
                <p>
                  You acknowledge and understand that ZWOLF CONSULTANCY SERVICES may use third party partners and
                  gateways for processing any payments from you. ZWOLF CONSULTANCY SERVICES does not control such
                  partners and gateways and any transactions through them shall be subject to separate terms and
                  conditions of such third parties / gateways. Any personal or sensitive information that you provide
                  in relation to such billing and payment shall be subject to the policies of such third party
                  partners / gateways, as the case may be. ZWOLF CONSULTANCY SERVICES shall not be responsible for the
                  protection and privacy of Your information if the payments are processed directly by such third
                  party partners / gateways without any involvement of ZWOLF CONSULTANCY SERVICES in the processing of
                  the payment other than providing necessary access. All billing and payment for Your use of the
                  Service, Software and/or Content shall be as per the existing policies of ZWOLF CONSULTANCY
                  SERVICES, subject to change from time to time.
                </p>
                <p>
                  ZWOLF CONSULTANCY SERVICES DOES NOT PROVIDE PRICE PROTECTION OR REFUNDS IN THE EVENT OF A PRICE
                  REDUCTION OR PROMOTIONAL OFFERING.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
