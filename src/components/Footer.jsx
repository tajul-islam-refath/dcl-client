import React from "react";

const Footer = () => {
  return (
    <div
      className="footer mt-5"
      style={{ background: "#e8e8f0", padding: "30px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>DCL</h3>
            <p>© 2022 dcl. All Rights Reserved.</p>
          </div>
          <div className="col-md-3">
            <div id="footer_guides_div">
              <a href="#">
                <p
                  id="explore_txt1"
                  style={{
                    color: "#58547e",
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}>
                  Home
                </p>
              </a>
              <a href="#">
                <p
                  id="browse_txt1"
                  style={{
                    color: "#58547e",
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}>
                  Services
                </p>
              </a>
              <a href="#">
                <p
                  id="explore_txt1"
                  style={{
                    color: "#58547e",
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}>
                  About Us
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div id="footer_news_div" style={{ paddingLeft: "90px" }}>
              <a href="#">
                <p
                  className="vaccine_text_en"
                  id="popular_txt2"
                  style={{
                    color: "#58547e",
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}>
                  Policy
                </p>
              </a>
              <a href="#">
                <p
                  id="popular_txt2"
                  style={{
                    color: "#58547e",
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}>
                  Our Blogs
                </p>
              </a>
              <a href="#">
                <p
                  id="newest_txt2"
                  style={{
                    color: "#58547e",
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}>
                  Contact Information
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
