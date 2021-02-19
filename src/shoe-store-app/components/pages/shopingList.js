import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Data} from "../context/Store"

const useStyles = makeStyles((theme) => ({
  _margin:{
    paddingTop: "60px",

  },
  root: {
    display: 'flex',
    width: "100%",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",

  },
  content: {
    flex: '1 0 auto',
  },
  cardLi:{
    display: "flex",
    marginTop: "30px",
  },
  image: {
    width: 170,
  },
  num:{
    marginRight: "20px",
    textAlign: "center",
    marginTop: 6,
    paddingTop: 4,
    backgroundColor: "red",
    borderRadius: "50%",
    color: "white",
    height: "27px",
    width: "27px",
  }
}));

export default function ImageList() {
  const {data, deleteVal} = useContext(Data);
 
  const classes = useStyles();
  var num = 0;
  return (
<ol style={{paddingLeft: 5}}>

{data.map(({name, img, title, id, prize}) =>{

  return(
    <li className={classes.cardLi} key={id}>
    <div className={classes.num}>{num = num + 1}</div>
    <Card className={classes.root}>
    <CardMedia
            className={classes.image}
            image={img}
            title={name}
          />
    
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name }<h5 style={{display: "inline", marginLeft: "10px"}}> {prize}$</h5>
                <IconButton aria-label="CloseIcon" style={{float: "right"}} onClick={()=>{deleteVal(id)}}>
                <CloseIcon />
            </IconButton>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
            </CardContent>
           </div>
    
            </Card>
       
            
        </li>
  )
  })}    
</ol>
  );
}