import React from 'react';
import referralImage from '../../../Images/referel section.png';

const ReferralSection = () => {
    return (
        <section className="referral  mt-5">
          <div className="card mb-3" style={{maxWidth: "100%"}}>
            <div className="row g-0 ">
              <div className="col-md-4">
                <img src={referralImage} alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">Want discount?</h1>
                  <h3 className="card-text">Refer a friend and get a 15% discount coupon!</h3>
                  <a className="card-text" href=""><h4>Follow this steps</h4></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default ReferralSection;