import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';
import NavbarList from './NavbarList';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import {Data} from "./context/Store";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "visible",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: "1vw",
    width: "43vw",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
}));

export default function Navbar() {
  const {data} = useContext(Data);

  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <AppBar position="fixed" color="secondary" style={{overflow: "visible"}}>
        <Toolbar>
          
        <NavbarList />
  <Link to="/" style={{color: "white", textDecoration: "none"}}>
        <Typography className={classes.title} variant="h6" noWrap>
          Shoe Store App
        </Typography>
  </Link>


              <Typography style={{width: "100%",textAlign: "right"}}>
  <Link to="/cart" >
                  <IconButton aria-label="add to favorites" style={{color: "white"}}>
                    <Badge badgeContent={(data.length === 0) ? "0" : data.length} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
    </Link>
              </Typography>
              


        </Toolbar>
      </AppBar>
    </div>
  );
}
