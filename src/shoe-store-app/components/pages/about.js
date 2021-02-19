import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import SchoolIcon from '@material-ui/icons/School';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: "100px 15px 10px 15px",
    '& > *': {
    
      fontFamily: "Arial, Helvetica, sans-serif",
      width: "100%",
      height: "fit-content",
      padding: "20px",
    },
  },
  h1:{
    color: "skyblue",
  },
  bio:{
    display: "inline",
    padding: 0,
    margin: 0,
    color: "purple"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>

    <h1 className={classes.h1}>About me</h1>
           <div>
              <IconButton edge="start" style={{ color: "purple" }} aria-label="Name">
                          <PersonIcon />
                    </IconButton>
              <h3 className={classes.bio}>
                Name: Asad Ali
              </h3>
           </div>

            
            <div>
            <IconButton edge="start" style={{ color: "purple" }} aria-label="Occupation">
                        <AccountCircleIcon />
                  </IconButton>
            <h3 className={classes.bio}>
            Occupation: MERN Stack Web Developer</h3>
            </div>

            <div>
            <IconButton edge="start" style={{ color: "purple" }} aria-label="Github">
                        <GitHubIcon />
                  </IconButton>
            <h3 className={classes.bio}>
            Github: github.com/asadalibest1</h3>
            </div>

            <div>
            <IconButton edge="start" style={{ color: "purple" }} aria-label="Facebook">
                        <FacebookIcon />
                  </IconButton>
            <h3 className={classes.bio}>
            Facebook: facebook.com/asadali.asad.355</h3>
            </div>

            <div>
            <IconButton edge="start" style={{ color: "purple" }} aria-label="Student">
                        <SchoolIcon />
                  </IconButton>
            <h3 className={classes.bio}>
            Student at: Freelance and Remote Work BootCamp 2020</h3>
      </div>
      </Paper>

    </div>
  );
}
