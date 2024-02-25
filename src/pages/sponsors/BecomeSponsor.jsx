import React from "react";
import "./BecomeSponsor.scss";
import Navbar from "../../layout/navbar/Navbar";

const BecomeSponsor = () => {
  const page = "sponsors";
  return (
    <div className="become-sponsor">
      <Navbar page={page} />
      <div className="partnership">
        <div className="wrapper">
          <h1>PARTNERSHIP</h1>
          <p>
            If you are interested in becoming a Sponsor for IstanbulDAO
            Blockchain Week 2024, please fill in the short form and one of our
            team will be in touch as soon as possible.Thank you for taking time
            to apply to be part of our next event.
          </p>
        </div>
        <div>
          <form>
            <div className="form-row">
              <input
                type="text"
                name="contactPerson"
                placeholder="First Name*"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="contactPerson"
                placeholder="Last Name*"
              />
            </div>
            <div className="form-row">
              <input type="text" name="contactNumber" placeholder="Phone*" />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email*" />
            </div>
            <div className="form-row">
              <input type="text" name="companyName" placeholder="Company*" />
            </div>
            <div className="form-row">
              <input type="text" name="website" placeholder="Website*" />
            </div>

            <div className="message">
              <input name="message" placeholder="Message*"></input>
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeSponsor;
