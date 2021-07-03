/* eslint-disable */

import React, { useEffect, useState } from "react";
import "../../assets/css/profilepage.css";
import { Card } from "@material-ui/core";
import tempImg from "../../assets/img/resume.png";

import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import { green, pink } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import EventIcon from "@material-ui/icons/Event";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BasicInfo from "./BasicInfo";
import ProfileTabs from "./ProfileTabs"
import MobileMenu from "./mobile/MobileMenu"
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
  } from "react-device-detect";
function PersonProfile() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <Card mx={2} p={2}>
        <div className="container-fluid p-5 bg-light border">
          <div className="team-single">
            <div className="row">
              <div className="col-lg-4 col-md-5 xs-margin-30px-bottom">
                <div className="team-single-img">
                  <img src={tempImg} alt="" />
                </div>
                <div className="pt-3">
                  <BasicInfo />
                </div>
              </div>

              <div className="col-lg-8 col-md-7">
               {isBrowser?<ProfileTabs/>:<MobileMenu/>}
                {/* <div className="team-single-text padding-50px-left sm-no-padding-left">
                <h4 className="font-size38 sm-font-size32 xs-font-size30">
                  Buckle Giarza
                </h4>
                <p className="no-margin-bottom">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  voluptatem.
                </p>
                <div className="contact-info-section margin-40px-tb">
                  <ul className="list-style9 no-margin">
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">
                          <i className="fas fa-graduation-cap text-orange"></i>
                          <strong className="margin-10px-left text-orange">
                            Degree:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>Master's Degrees</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">
                          <i className="far fa-gem text-yellow"></i>
                          <strong className="margin-10px-left text-yellow">
                            Exp.:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>4 Year in Education</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">
                          <i className="far fa-file text-lightred"></i>
                          <strong className="margin-10px-left text-lightred">
                            Courses:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>Design Category</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">
                          <i className="fas fa-map-marker-alt text-green"></i>
                          <strong className="margin-10px-left text-green">
                            Address:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>Regina ST, London, SK.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">
                          <i className="fas fa-mobile-alt text-purple"></i>
                          <strong className="margin-10px-left xs-margin-four-left text-purple">
                            Phone:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>(+44) 123 456 789</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">
                          <i className="fas fa-envelope text-pink"></i>
                          <strong className="margin-10px-left xs-margin-four-left text-pink">
                            Email:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>
                            <a href="javascript:void(0)">addyour@emailhere</a>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <h5 className="font-size24 sm-font-size22 xs-font-size20">
                  Professional Skills
                </h5>

                <div className="sm-no-margin">
                  <div className="progress-text">
                    <div className="row">
                      <div className="col-7">Positive Behaviors</div>
                      <div className="col-5 text-right">40%</div>
                    </div>
                  </div>
                  <div className="custom-progress progress">
                    <div
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "40%" }}
                      className="animated custom-bar progress-bar slideInLeft bg-sky"
                    ></div>
                  </div>
                  <div className="progress-text">
                    <div className="row">
                      <div className="col-7">Teamworking Abilities</div>
                      <div className="col-5 text-right">50%</div>
                    </div>
                  </div>
                  <div className="custom-progress progress">
                    <div
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                      className="animated custom-bar progress-bar slideInLeft bg-orange"
                    ></div>
                  </div>
                  <div className="progress-text">
                    <div className="row">
                      <div className="col-7">Time Management </div>
                      <div className="col-5 text-right">60%</div>
                    </div>
                  </div>
                  <div className="custom-progress progress">
                    <div
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "60%" }}
                      className="animated custom-bar progress-bar slideInLeft bg-green"
                    ></div>
                  </div>
                  <div className="progress-text">
                    <div className="row">
                      <div className="col-7">Excellent Communication</div>
                      <div className="col-5 text-right">80%</div>
                    </div>
                  </div>
                  <div className="custom-progress progress">
                    <div
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                      className="animated custom-bar progress-bar slideInLeft bg-yellow"
                    ></div>
                  </div>
                </div>
              </div> */}
              </div>

              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default PersonProfile;
