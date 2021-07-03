/* eslint-disable */
import React from 'react'
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import EventIcon from '@material-ui/icons/Event';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import "../../../../assets/css/profilepage.css";

function StudyDataPart() {
    return (
        <>
             <ul className="list-style9 no-margin" style={{fontSize:"13px"}}>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">

                          <LocalLibraryOutlinedIcon />


                          {/* <ImportContactsOutlinedIcon/> */}
                          <strong className="margin-10px-left ">
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

                          <LocationOnOutlinedIcon />


                          {/* <ImportContactsOutlinedIcon/> */}
                          <strong className="margin-10px-left ">
                          Address:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>ta:idar,Dist:sk</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">

                        <EventIcon />


                          {/* <ImportContactsOutlinedIcon/> */}
                          <strong className="margin-10px-left ">
                          BirthDate :
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>:8/4/2000</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">

                          <EmailOutlinedIcon />


                          {/* <ImportContactsOutlinedIcon/> */}
                          <strong className="margin-10px-left ">
                          Email:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>Temp123@gmail.com</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-5 col-5">

                          <EventIcon />


                          {/* <ImportContactsOutlinedIcon/> */}
                          <strong className="margin-10px-left ">
                          Age:
                          </strong>
                        </div>
                        <div className="col-md-7 col-7">
                          <p>22</p>
                        </div>
                      </div>
                    </li>

                  </ul>
        </>
    )
}

export default StudyDataPart
