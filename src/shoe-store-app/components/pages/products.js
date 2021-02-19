import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';
import {shoes} from "../context/api";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import {Data} from "../context/Store"

const useStyles = makeStyles((theme) => ({
  heading:{
    textAlign: "center",
    color: "skyblue",
  },
  root: {
    width: "330px",
    margin: "auto",
  },
  paper:{
    paddingTop: "50px",
    paddingBottom: "50px",
    width: "fit-content",

  },
 
  media: {
    height: "22vh",
    paddingTop: '56.25%',
  },
 div:{
   padding: "0px 5px",
   margin: "90px 10px 0px 10px",
 }
}));

export default function Products() {
  const {addVal} = useContext(Data);
  const classes = useStyles();

return (
  <>
<div className={classes.div}>
<h1 className={classes.heading}>Visite Your Favourite Product Here</h1>
<Paper elevation={3} className={classes.paper} >

<Grid container spacing={2}>
{
Object.keys(shoes).map((item, ind)=>{
    const {name, img, prize} = shoes[item];
return(
<Grid xs="12" sm="4" key={ind}>
<Card className={classes.root}>
<Link to={"/products/"+item} style={{textDecoration: "none"}}>  
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={img}
        title="cart image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div" style={{ fontWeight: "bold"}}>
          <p>{item}</p>
          {name}
          </Typography>
      </CardContent>
      </CardActionArea>
  </Link>
      <CardActions disableSpacing>
      <IconButton aria-label="shop" color="secondary" onClick={()=>addVal(Math.random(), name, img, item, prize)}>
          <AddShoppingCartIcon />
        </IconButton>
        <h4>{prize}$</h4>
        
        
      </CardActions>        
    </Card>
    </Grid>
 )
})

}
</Grid>
</Paper>

      </div> 
      </>
      );

};