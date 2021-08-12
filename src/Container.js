import * as React from "react";
import { Button, Toolbar, Grid, Paper, Box, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MapComponent from "./Map";

const styles = makeStyles({
  avatarPaper: {
    alignSelf: "center",
    width: 200,
    height: 200,
    margin: 10,
    marginTop: 20,
  },
  userInfoPaper: {
    alignSelf: "center",
    width: 390,
    height: 190,
    margin: 10,
    marginTop: 20,
    textAlign: "center",
    padding: 5,
  },
  mapPaper: {
    alignSelf: "center",
    width: 620,
    height: 300,
    margin: 10,
  },
});

export default function MainContainer(props) {
  const classes = styles();

  if (props.isLoaded) {
    var userFirstName = null;
    var userLastName = null;
    var userAvatarURL = null;
    var userEmail = null;
    var userPhoneNumber = null;
    var userDateOfBirth = null;
    var userCity = null;
    var userStateAndCountry = null;
    var userCoordinates = null;

    props.userData.map((user) => {
      userFirstName = user.first_name;
      userLastName = user.last_name;
      userAvatarURL = user.avatar;
      userEmail = user.email;
      userPhoneNumber = user.phone_number;
      userDateOfBirth = user.date_of_birth;
      userCity = user.address;
      userStateAndCountry = user.address;
      userCoordinates = user.address;
      userCoordinates = userCoordinates.coordinates;
      return user;
    });

    return (
      <div>
        <Box sx={{ bgcolor: "primary.light", height: "100vh" }}>
          <AppBar position="static">
            <Toolbar>
              <Grid container justifyContent="space-between" sx={{ height: "100px" }}>
                <Typography align-self="left" variant="h6" color="inherit" component="div">
                  RANDOM USER PROFILE
                </Typography>
                <Button onClick={props.getData} variant="contained" color="primary">
                  GET RANDOM USER PROFILE
                </Button>
              </Grid>
            </Toolbar>
          </AppBar>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper className={classes.avatarPaper}>
              <img alt="avatar" width="100%" height="100%" src={userAvatarURL}></img>
            </Paper>
            <Paper className={classes.userInfoPaper}>
              {userFirstName} {userLastName}
              <br></br>
              {userEmail}
              <hr></hr>
              {userPhoneNumber}
              <hr></hr>
              {userDateOfBirth}
              <hr></hr>
              {userCity.city}
              <hr></hr>
              {userStateAndCountry.state}, {userStateAndCountry.country}
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper className={classes.mapPaper}>
              <MapComponent lat={userCoordinates.lat} lng={userCoordinates.lng}></MapComponent>
            </Paper>
          </Box>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Box sx={{ bgcolor: "primary.light", height: "100vh" }}>
          <AppBar position="static">
            <Toolbar>
              <Grid container justifyContent="space-between" sx={{ height: "100px" }}>
                <Typography align-self="left" variant="h6" color="inherit" component="div">
                  RANDOM USER PROFILE
                </Typography>
                <Button onClick={props.getData} variant="contained" color="primary">
                  GET RANDOM USER PROFILE
                </Button>
              </Grid>
            </Toolbar>
          </AppBar>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper className={classes.avatarPaper}></Paper>
            <Paper className={classes.userInfoPaper}></Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper className={classes.mapPaper}></Paper>
          </Box>
        </Box>
      </div>
    );
  }
}
