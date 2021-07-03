/* eslint-disable */

import React from "react";
import { Grid } from "@material-ui/core";
import StudyFlip from "./flipCard/StudyFlip";
import StudyDataPart from "./dataPart/StudyDataPart";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
function ProfileStudy() {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <StudyFlip />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BrowserView>
          <StudyDataPart />

            {/* <h1> This is rendered only in browser </h1> */}
          </BrowserView>
          {/* <MobileView>
            <h1> This is rendered only on mobile </h1>
          </MobileView> */}
        </Grid>
      </Grid>
    </>
  );
}

export default ProfileStudy;
