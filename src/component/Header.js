import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles({
mainMenu: {
   backgroundColor:'rgb(233 11 29)',
   padding:'10px',
   marginTop:'0px',
},
buttonItem: {
    color:'white',
    marginRight:'30px',
    cursor:'pointer'
}
})
export default function Header() {
const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const onSashimi = () => {
    navigate("/setsashimi");
  };
  const onSushi = () => {
    navigate("/sushi");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box className={classes.mainMenu}>
      <Link href="/home" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} 
      >
        HOME
      </Link>
    
      <Link aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} onClick={handleClick}
      >
        CATEGORIES
      </Link>

      <Link href="/contact" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} 
      >
        CONTACT US
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onSashimi}>Sashimi Set</MenuItem>
        <MenuItem onClick={onSushi}>Sushi</MenuItem>
      </Menu>
    </Box>
    </>
  );
}