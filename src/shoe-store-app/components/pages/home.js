import React from'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from './slider';
const useStyles = makeStyles({

    mainDiv:{
        marginTop: "100px",
    },
    headingDiv:{
        fontFamily: "Arial, Helvetica, sans-serif",
        textAlign: "center",
    },
    head:{
        marginTop: "10px",
        fontWeight: 28,
        color: "red",
    },
       
    });

export default function Home(){
const classes = useStyles();
    return(
        <div className={classes.mainDiv}>
        <div className={classes.headingDiv}>
            <h1 className={classes.head}>Welcome to my Shoe Store</h1>
            <h1 style={{marginTop: "5px"}}>Latest Collection Now Available Here</h1>
        </div>
        <Slider />
        </div>
        )
};