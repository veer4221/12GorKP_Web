/* eslint-disable */
import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";
import LandscapeIcon from "@material-ui/icons/Landscape";
import WorkIcon from "@material-ui/icons/Work";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FaceIcon from "@material-ui/icons/Face";
import ProfileStudy from "./ProfileInfo/Profilestudy";

// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { useEffect } from "react";
function MobileMenu() {
  const [study, setStudy] = React.useState(false);
  useEffect(()=>{window.scrollTo(0, 0);},[])
  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "40vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircleMenu
          startAngle={-90}
          rotationAngle={360}
          itemSize={4}
          radius={5}
          /**
           * rotationAngleInclusive (default true)
           * Whether to include the ending angle in rotation because an
           * item at 360deg is the same as an item at 0deg if inclusive.
           * Leave this prop for angles other than 360deg unless otherwise desired.
           */
          rotationAngleInclusive={false}
        >
          <CircleMenuItem
            onClick={() => {

              setStudy(true);
            }}
            tooltip="Study"
            tooltipPlacement="right"
          >
            <MenuBookIcon />
          </CircleMenuItem>
          <CircleMenuItem tooltip="Work">
            <WorkIcon />
          </CircleMenuItem>
          <CircleMenuItem tooltip="Family">
            <FaceIcon />
          </CircleMenuItem>
          <CircleMenuItem tooltip="property">
            <LandscapeIcon />
          </CircleMenuItem>
        </CircleMenu>
      </div>
      {study ? <ProfileStudy study={study} setStudy={setStudy}/> : ``}
    </>
  );
}

export default MobileMenu;
