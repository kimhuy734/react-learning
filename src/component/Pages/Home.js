import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';
import { Card, Typography, CardContent, Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';

const useStyles = makeStyles(theme => ({
  gridItem: {
    background: 'grey'
  },
  mainGrid: {
    marginTop: '15px'
  },
  mainImage: {
    width: '100%',
  },
  button: {
    background: 'blue',
    color: 'white'
  },
  detailButton: {
    display: 'flex',
    justifyContent: 'end'
  },
  mainHead: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  jumbutron: {
    background: 'rgb(169,184,195) 100%',
    // marginTop:'-22px'
  },
  mainImage: {
    width: '100%',
    height:'365px'
  },
  jumbotron: {
    textAlign: 'center',
    color: 'white'
  },
  mainImages: {
    width:'100%'
  },
  homes: {
    backgroundColor:'rgb(0, 51, 157)',
    color:'white',
    marginTop:'-3px',
    marginLeft:'0px'
  },
  heads: {
    textAlign:'center',
    marginTop:'50px'
  },
  mainImagess: {
    width:'100%',
    height:'auto'
  }
}));
export default function Home({ open }) {
  const classes = useStyles();
  const image1 = require("../../images/f_1.jpg")
  const image2 = require("../../images/image2.PNG")
  const image3 = require("../../images/image3.PNG")
  const image4 = require("../../images/image4.PNG")
  const sushi1 = require("../../images/f_2.jpg")
  const sushi2 = require("../../images/f_3.jpg")
  const sushi3 = require("../../images/f_4.jpg")
  const sushi4 = require("../../images/f_5.jpg")
  const banner = require("../../images/photo_2022-03-31_12-56-20.jpg")

  //   

  return (
    <div>
      <Header />
     
        <Box className={classes.jumbutron}>
          <div className={classes.jumbotron}>
          {/* <h1 class="display-4">Welcome To Value Customer</h1>
            <p style={{marginTop:'-24px'}} class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
           
          </div>
          <img src={banner} className={classes.mainImagess} alt="Snow" />
          <Box className={classes.heads}>
          {/* <h1 class="display-4">Welcome To Value Customer</h1>
          <p class="lead">Our shop sells high quality smartphones, watches and computers for sale to our customers to use quality products.</p>
          <p>On this occasion, there is also a special discount, and our store also has a down payment, if interested can contact the phone number and email provided below.</p> */}
          </Box>
        </Box>
        <Box className={classes.homes}>
        {/* <p class="display-4">Home Page</p> */}

        </Box>
        <Grid container spacing={4} className={classes.mainGrid} >
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent>
                <Box className={classes.mainHead}>
                  <Typography variant='h5'>Set Sashimi</Typography>
                </Box>
                <CardContent>

                  <img src={image1} className={classes.mainImages} />
                  <Typography variant="body2" color="text.secondary">
                  Assorted3 3kind Sashimi Set 3pcs Tuna,Salmon,Grouper
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent>
                <Box className={classes.mainHead}>
                  <Typography variant='h5'>Set Sashimi</Typography>
                </Box>
                <CardContent>
                  <img src={image2} className={classes.mainImages} />

                  <Typography variant="body2" color="text.secondary">
                    Assorted3 3kind Sashimi Set 3pcs Tuna,Salmon,Grouper
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent>
                <Box className={classes.mainHead}>
                  <Typography variant='h5'>Set Sashimi</Typography>
                </Box>
                <CardContent>
                  <img src={image3} className={classes.mainImages} />
                  <Typography variant="body2" color="text.secondary">
                    Assorted3 3kind Sashimi Set 3pcs Tuna,Salmon,Grouper
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent>
                <Box className={classes.mainHead}>
                  <Typography variant='h5'>Set Sashimi</Typography>
                </Box>
                <CardContent>
                  <img src={image4} className={classes.mainImages} />

                  <Typography variant="body2" color="text.secondary">
                    Assorted3 3kind Sashimi Set 3pcs Tuna,Salmon,Grouper
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.mainGrid} >
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent>
                <Box className={classes.mainHead}>
                  <Typography variant='h5'>Sushi</Typography>
                </Box>
                <CardContent>
                  <img src={sushi1} className={classes.mainImages} />
                  <h2>$20.00</h2>
                  <Typography variant="body2" color="text.secondary">
                    Sushi  Assorted3 3kind Sashimi Set 3pcs Tuna,Salmon,Grouper
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent>
                <Box className={classes.mainHead}>
                  <Typography variant='h5'>Sushi</Typography>
                </Box>
                <CardContent>
                  <img src={sushi2} className={classes.mainImages} />
                  <h2>$40.00</h2>
                  <Typography variant="body2" color="text.secondary">
                  Sushi Assorted3 3kind Sashimi Set 3pcs Tuna,Salmon,Grouper
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent>
                <Box className={classes.mainHead}>
                  <Typography variant='h5'>Sushi</Typography>
                </Box>
                <CardContent>
                  <img src={sushi3} className={classes.mainImages} />
                  <h2>$29.00</h2>
                  <Typography variant="body2" color="text.secondary">
                    Sushi  Assorted3 3kind Sashimi Set 3pcs Tuna,Salmon,Grouper
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Card>
              <CardContent>

                <Box className={classes.mainHead}>
                  <Typography variant='h5'>Sushi</Typography>
                </Box>
                <CardContent>
                  <img src={sushi4} className={classes.mainImages} />
                  <h2>$9.00</h2>
                  <Typography variant="body2" color="text.secondary">
                    Sushi  Assorted3 3kind Sashimi Set 3pcs Tuna,Salmon,Grouper
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      <Footer />
    </div>
  );
}