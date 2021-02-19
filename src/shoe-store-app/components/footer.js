import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
    
      fontFamily: "Arial, Helvetica, sans-serif",
      margin: "30px 15px",
      width: "100%",
      height: "fit-content",
      padding: "20px",
    },
  },
  p:{
      fontSize: "14px"
  },
  h1:{
    color: "skyblue",
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
      <h2 className={classes.h1}>Shop for Shoes Online</h2>
      <p className={classes.p}>Famous Shoe Store is your one-stop shop online for shoes. Whether your looking for running shoes, sandals, boots, work shoes, or even socks and slippers, there's a pair for you.
      Find your next pair of shoes today! Discover the latest styles of shoes for women, men, girls and boys from your favorite brands. With shoes from Nike, Vans, Converse, Skechers, adidas, Sperry, and more, you're bound to find the right fit.</p>

      </Paper>
    </div>
  );
}
