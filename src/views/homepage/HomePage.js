/* eslint-disable */

import React from "react";
import { Grid, Box, Card } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ProfileCard from "components/semantic-card/ProfileCard";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function HomePage() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box>
        <Card>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "70vh" }}
            spacing={5}
            p={{ xs: 2, sm: 3, md: 4 }}
          >
            <Grid item xs={12} sm={12} p={{ xs: 2, sm: 3, md: 4 }}>
              <Box p={{ xs: 2, sm: 3, md: 4 }}>
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                  <div>
                    <img alt="" src="https://picsum.photos/800/300/?random" />
                    <p className="legend">Legend 1</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/800/301/?random" />
                    <p className="legend">Legend 2</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/800/302/?random" />
                    <p className="legend">Legend 3</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/800/303/?random" />
                    <p className="legend">Legend 4</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/800/304/?random" />
                    <p className="legend">Legend 5</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/800/305/?random" />
                    <p className="legend">Legend 6</p>
                  </div>
                </Carousel>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <h2 style={{ textAlign: "center" }}>Find your match </h2>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3} px={{ xs: 2, sm: 3, md: 4 }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundImage:
                      " linear-gradient(to right bottom, #1f41e7, #393ecf, #453cb8, #4a3aa2, #4b388c)",
                    width: "100%",
                  }}
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid item xs={12} sm={3} px={{ xs: 2, sm: 3, md: 4 }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundImage:
                      " linear-gradient(to right bottom, #1f41e7, #393ecf, #453cb8, #4a3aa2, #4b388c)",
                    width: "100%",
                  }}
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid item xs={12} sm={3} px={{ xs: 2, sm: 3, md: 4 }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundImage:
                      " linear-gradient(to right bottom, #1f41e7, #393ecf, #453cb8, #4a3aa2, #4b388c)",
                    width: "100%",
                  }}
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid item xs={12} sm={3} px={{ xs: 2, sm: 3, md: 4 }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundImage:
                      " linear-gradient(to right bottom, #1f41e7, #393ecf, #453cb8, #4a3aa2, #4b388c)",
                    width: "100%",
                  }}
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid item xs={12} sm={3} px={{ xs: 2, sm: 3, md: 4 }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundImage:
                      " linear-gradient(to right bottom, #1f41e7, #393ecf, #453cb8, #4a3aa2, #4b388c)",
                    width: "100%",
                  }}
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid item xs={12} sm={3} px={{ xs: 2, sm: 3, md: 4 }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundImage:
                      " linear-gradient(to right bottom, #1f41e7, #393ecf, #453cb8, #4a3aa2, #4b388c)",
                    width: "100%",
                  }}
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid item xs={12} sm={3} px={{ xs: 2, sm: 3, md: 4 }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundImage:
                      " linear-gradient(to right bottom, #1f41e7, #393ecf, #453cb8, #4a3aa2, #4b388c)",
                    width: "100%",
                  }}
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid item xs={12} sm={3} px={{ xs: 2, sm: 3, md: 4 }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundImage:
                      " linear-gradient(to right bottom, #1f41e7, #393ecf, #453cb8, #4a3aa2, #4b388c)",
                    width: "100%",
                  }}
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item xs={12} sm={12}>
              <h2 style={{ textAlign: "center" }}>your result </h2>
            </Grid>
          </Grid>

          {/* map mathod */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <ProfileCard />
            </Grid>
          </Grid>
          <Grid container spacing={4} m={3}>
            <Grid item xs={12} sm={12}>
              <Pagination
                count={15}
                variant="outlined"
                color="secondary"
                shape="rounded"
              />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}

export default HomePage;
