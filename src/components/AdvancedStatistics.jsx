import React from "react";
import "../scss/AdvancedStatistics.scss";

function AdvancedStatistics() {
  return (
    <section className="statistics">
      <div className="wrapper">
        <div className="stats-wrap">
          <h2 className="stats-title">Advanced Statistics</h2>
          <p className="stats-para">
            Track how your links are performing across the web with our advanced
            statistics dahsboard.
          </p>
        </div>
        <div className="cards-wrap">
          <div className="card-comp brand">
            <div className="circle-wrap ">
              <img
                src="./images/icon-brand-recognition.svg"
                alt="brand recognition icon"
              />
            </div>
            <h2 className="card-title">Brand Recognition</h2>
            <p className="card-para">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>
          <div className="green-thing"></div>
          <div className="card-comp records">
            <div className="circle-wrap">
              <img
                src="./images/icon-detailed-records.svg"
                alt="detailed records icon"
              />
            </div>
            <h2 className="card-title">Detailed Records</h2>
            <p className="card-para">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better decisions.
            </p>
          </div>
          <div className="green-thing"></div>
          <div className="card-comp fully">
            <div className="circle-wrap">
              <img
                src="./images/icon-fully-customizable.svg"
                alt="fully customizable icon"
              />
            </div>
            <h2 className="card-title">Fully Customizable</h2>
            <p className="card-para">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvancedStatistics;
