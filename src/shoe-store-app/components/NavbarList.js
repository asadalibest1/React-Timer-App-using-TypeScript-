import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

import { Link } from "react-router-dom";
import  './css/NavbarList.css';

const useStyles = makeStyles((theme)=>({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Li:{
    textDecoration: "none",
    color: "white",
    '&:hover':{
        color: "red",
    },
},
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} PaperProps={{
      style: {
        backgroundColor: 'transparent',
        paddingRight: "35px",
        boxShadow: 'none',
      },
}} aria-labelledby="simple-dialog-title" open={open}>
      
      <ul className="unorderedList">
            <li className="List">
            <Link to="/" className={ classes.Li } onClick={handleClose}>Home</Link>
            </li>
            <li className="List">
              <Link exact to="/products" className={ classes.Li } onClick={handleClose}>Products</Link>
            </li>
            <li className="List">
              <Link exact to="/cart" className={ classes.Li } onClick={handleClose}>Carts</Link>
            </li><li className="List">
              <Link exact to="/about" className={ classes.Li } onClick={handleClose}>About</Link>
            </li>
          </ul>

    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function NavbarList() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
       <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClickOpen}
          >
            <MenuIcon />
          </IconButton>
          
      <SimpleDialog  open={open} onClose={handleClose} />
    </div>
  );
}