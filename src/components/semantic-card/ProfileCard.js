/* eslint-disable */

import React from "react";
import ProfileUi from "react-profile-card";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Grid, Box, Card, Button } from "@material-ui/core";
import "../../assets/css/profilecard.css";
import  { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import { useState } from "react";
import TempIMG from "../../assets/img/resume.png"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ProfileCard() {
  const classes = useStyles();
  let history = useHistory()
  const [hovering, setHovering] = useState(false);


  const toggelCard = ()=>{
    setHovering(!hovering);
  }
  const redirectProfile = () =>{

      history.push(`/admin/personprofile`)
    // return <Redirect to=''  />
  }
  return (
    <div
      onClick={ toggelCard}
    //   onMouseLeave={() => setHovering(false)}
    >
      {!hovering ? (
        <ProfileUi
          imgUrl={TempIMG}
          name="veer"
          designation="FrontendDav"

        />
      ) : (
        <div className="container py-3">
          <div className="card float-right">
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="d-block w-100"
                  src={TempIMG}
                  alt=""
                />
              </div>
              <div className="col-sm-7 text-sm-left">
                <div className="card-block">
                  <table height="100%" width="100%">
                    <tr>
                      <th>
                        Name
                        <br />
                        <br />
                        Village
                        <br />
                        <br />
                        Study
                        <br />
                        <br />
                        jobStatus
                        <br />
                      </th>
                      <td>
                        : Patel Veer Manishbhai
                        <br />
                        <br />
                        : Hinglaj
                        <br />
                        <br />
                        : Bsc(CA & IT)
                        <br />
                        <br />: job in BYPT
                      </td>
                    </tr>
                    <tr>
                      <td>.</td>
                      <td>
                        <br />
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ alignContent: "right" }}
                          onClick={redirectProfile}
                        >
                          View Profile
                        </Button>
                      </td>
                    </tr>
                  </table>
                  {/* <b>Name :</b> Patel Veer Manishbhai */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
