import React from "react";
import "./OurSponsor.scss";
import Navbar from "../../layout/navbar/Navbar";
import img1 from "../../assets/sponsors/sponsor-1.png";
import img2 from "../../assets/sponsors/sponsor-2.png";
import img3 from "../../assets/sponsors/sponsor-3.png";
import img4 from "../../assets/sponsors/sponsor-4.png";
import img5 from "../../assets/sponsors/sponsor-5.png";
import img6 from "../../assets/sponsors/sponsor-6.png";
import img7 from "../../assets/sponsors/sponsor-7.png";
import img8 from "../../assets/sponsors/sponsor-8.png";
import img9 from "../../assets/sponsors/sponsor-9.png";
import img10 from "../../assets/sponsors/sponsor-10.png";
import img11 from "../../assets/sponsors/sponsor-11.png";
import img12 from "../../assets/sponsors/sponsor-12.png";
import img13 from "../../assets/sponsors/sponsor-13.png";
import img14 from "../../assets/sponsors/sponsor-14.png";
import img15 from "../../assets/sponsors/sponsor-15.png";
import img16 from "../../assets/sponsors/sponsor-16.png";
import img17 from "../../assets/sponsors/sponsor-17.png";
import img18 from "../../assets/sponsors/sponsor-18.png";
import img19 from "../../assets/sponsors/sponsor-19.png";
import img20 from "../../assets/sponsors/sponsor-20.png";
import img21 from "../../assets/sponsors/sponsor-21.png";
import img22 from "../../assets/sponsors/sponsor-22.png";
import img23 from "../../assets/sponsors/sponsor-23.png";
import img24 from "../../assets/sponsors/sponsor-24.png";
import img25 from "../../assets/sponsors/sponsor-25.png";

const Sponsor = () => {
  const page = "sponsors";
  return (
    <div className="sponsors">
      <Navbar page={page} />
      <div className="sponsor">
        <div className="wrapper">
          {" "}
          <h1>OUR PARTNERS</h1>
          <p>
            Join the biggest brands in Web 3.0. Network with regional government
            authorities, showcase your products, collaborate and expand in APAC
            and reach a hyper relevant, niche community.
          </p>
        </div>

        <div className="containers">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img4} alt="img" />
          <img src={img5} alt="img" />
          <img src={img6} alt="img" />
          <img src={img7} alt="img" />
          <img src={img8} alt="img" />
          <img src={img9} alt="img" />
          <img src={img10} alt="img" />
          <img src={img11} alt="img" />
          <img src={img12} alt="img" />
          <img src={img13} alt="img" />
          <img src={img14} alt="img" />
          <img src={img15} alt="img" />
          <img src={img16} alt="img" />
          <img src={img17} alt="img" />
          <img src={img18} alt="img" />
          <img src={img19} alt="img" />
          <img src={img20} alt="img" />
          <img src={img21} alt="img" />
          <img src={img22} alt="img" />
          <img src={img23} alt="img" />
          <img src={img24} alt="img" />
          <img src={img25} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
