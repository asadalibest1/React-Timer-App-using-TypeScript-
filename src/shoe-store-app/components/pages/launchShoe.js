import React, {useContext} from'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import {shoes} from "../context/api";
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Data} from "../context/Store"

const useStyles = makeStyles({
mainDiv:{
    marginTop: "100px",
    textAlign: "center",
},
    name:{
    color: "blue",
    fontWeight: "bolder",

},
Button:{
    height: "50px",
    width:  "250px",
    fontWeight: "bold",
},
buttonIcon:{
    paddingRight: "15px",
}
   
});

export default function LaunchShoe(){
const {addVal} = useContext(Data);

const classes = useStyles();

const { slug } = useParams();
const shoe = shoes[slug];

if (!shoe){
    return <h1 style={{marginTop: "100px", textAlign: "center", color: 
    
    
    
    "red"}}>404 not found!</h1>
}
const {name , img, prize} = shoe;
return(
    <div className={classes.mainDiv}>
        <h1 className={classes.name}>{name}</h1>
        <h2>{slug}</h2>
        <img src={img} alt="shoe" width="60%" height="60%"/>
        
        <p>
      
        <Button variant="contained" color="secondary" className={classes.Button} onClick={()=>addVal(Math.random(), name, img, slug, prize)}>
          <AddShoppingCartIcon className={classes.buttonIcon}/>
        Add to Cart
      </Button>
            
        </p>
    </div>
    )
}