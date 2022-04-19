import React, { useState } from "react";
import Header from "../../component/Header";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import Checkbox from "@material-ui/core/Checkbox";
import { Container, Button, Box } from "@material-ui/core";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    width: "100%",
    height: "140px",
  },
  button: {
    background: "red",
    color: "white",
  },
  detailButton: {
    display: "flex",
    justifyContent: "end",
  },
  mainHead: {
    display: "flex",
    justifyContent: "space-between",
  },
  jumbutron: {
    background: "grey",
    padding: "30px",
  },
  mainImage: {
    width: "100%",
  },
  jumbotron: {
    textAlign: "center",
    color: "white",
  },
  MuiButton : {
    width: "100%",
    background: "red",
    color: "white",
    border: "red"
  }

}));
export default function ContactUs({ open }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => { };

  const image1 = require("../../images/image1.png");
  const image2 = require("../../images/image2.PNG");
  const image3 = require("../../images/image3.PNG");
  const image4 = require("../../images/image4.PNG");

  const banner = require("../../images/contact.PNG");

  //

  return (
    <div>
      <Header />
        {/* <Box className={classes.jumbutron}> */}
          <div className={classes.jumbotron}>
            <img src={banner} className={classes.mainImage} alt="Snow" />
            <h1 class="display-4">Welcome To Value Customer</h1>
            <p class="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
          </div>
        {/* </Box> */}
        <Container>

        <Grid container spacing={4} className={classes.mainGrid}>
          <Grid item xs={12} md={6} className={classes.gridItem}>
              <Typography variant="h3" gutterBottom>
                Contact Us
              </Typography>
              <form noValidate autoComplete="off" className={classes.container}>
                <div className={classes.row}>
                  <TextField
                    label="Full Name"
                    margin="normal"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    label="Email Address"
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                </div>
                <br />
                <TextField
                  multiline
                  rows="4"
                  label="Message"
                  margin="normal"
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                />
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  color="danger"
                  onClick={handleSubmit}
                  className={classes.MuiButton}
                >
                  Submit
                </Button>
              </form>
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridItem}>
            <Box>
              <Typography variant="h3" gutterBottom>
                Detail Information
              </Typography>
              <ListItem>
                {/* <ListItemIcon><LocalPostOffice/></ListItemIcon> */}
                <ListItemText primary="Japan shop, No45, St454, Toul tum poung, Phnom Penh"></ListItemText>
              </ListItem>
              <ListItem>
                {/* <ListItemIcon><MailIcon/></ListItemIcon> */}
                <ListItemText primary="sushidonmaru@gmail.com"></ListItemText>
              </ListItem>
              <ListItem>
                {/* <Chip icon={<MdPhone />} label="Call me" /> */}
                <ListItemText primary="096 990 0055"></ListItemText>
              </ListItem>
            </Box>
          </Grid>

        </Grid>
      </Container>
    <Footer/>
    </div>
  );
}