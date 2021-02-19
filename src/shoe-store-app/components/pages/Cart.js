import React, {useContext} from'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ShopingList from "./shopingList.js";
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import {Data} from "../context/Store"
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: "80px",
        '& > *': {
        
          fontFamily: "Arial, Helvetica, sans-serif",
          width: "100%",
          height: "fit-content",
          padding: "20px",
        },
      },
      buttonIcon:{
        textAlign: "center",
      },
      cart:{
        height: "500px",
        paddingTop: "40px",
        paddingRight: "15px",
        overflow: "auto"
      },
      payment:{
        height: "220px",
      },
      list:{
        display: "inline",
      },
      h1:{
          textAlign: "center",
          color: "skyblue",
      }
});
export default function Cart(props){
const {data} = useContext(Data);
var num =0;
data.map(({prize}) =>{
    return num += prize;
})
const classes = useStyles();
return(
  <div className={classes.root}>
        <h1 className={classes.h1}>Shoe Store made your Payment Easy</h1>
        
        <Grid xs="12" sm="8">
        <Paper elevation={3} className={classes.cart}>
          <ShopingList/>
          </Paper>
          </Grid>

        <Grid xs="12" sm="3">
        <Paper elevation={2} className={classes.payment}>
        
         
          <h1 style={{textAlign: "center", color: "red", marginTop: "20px", paddingTop: "5px"}}>TOTAL: {num}$</h1>
        <ol style={{fontSize: 15, overflow: "auto", height: "120px"}}>
       {data.map(({name, prize}, ind)=>{

         return(<li key={ind}> {name}<label style={{float: "right", marginRight: 8}}>{prize}$</label></li>)
       })}
       
        </ol>
        <div className={classes.buttonIcon}>
          <Button variant="contained" color="secondary" style={{width: "300px"}}>
            <LocalPrintshopIcon style={{marginRight: 5}} />
              Payment
        </Button>
          </div>
          </Paper>
          </Grid>
  
          </div>
    )
}