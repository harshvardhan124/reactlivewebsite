import React from "react";

import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="heading1">{props.title}<strong className="brand-name"> HarshVardhan</strong></h1>
                  <h1 className="my-3 para">we are the team of talented developers making websites</h1>
                  <div className="mt-3 d-flex justify-content-left ">
                    <NavLink to={props.visit} className=" outlinebtn btn btn-outline-primary rounded-pill">
                      {props.btnText}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated" alt="Common img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
