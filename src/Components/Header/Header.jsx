import React from "react";

import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="container text-center header">
        <div className="row header">
          <div className="col-sm-12 col-md-1">
            <img src={logo} alt="logo" class="header-logo"></img>
          </div>
          <div className="col-sm-12 col-md-7"></div>
          <div className="col-sm-12 col-md-4 header-contact-data">
            <div>
              <div className="row">
                <div className="col whatsapp-col">
                  <i className="bi bi-whatsapp whatsapp-header"></i>
                  <p className="header-info">
                    <a href="http://wa.me/+523334888873" target="_blank">
                      (+52) 3334888873
                    </a>{" "}
                    &
                    <a href="http://wa.me/+523339448999" target="_blank">
                      (+52) 3339448999
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="header-slogan">
                    "Calidad y confianza para impulsar tu producción"
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
