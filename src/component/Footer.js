import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link,
    Box
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainFooter: {
        padding:'30px',
        marginTop:'30px',
        backgroundColor:'rgb(233 11 29)',
    },
    topFooter: {
        backgroundColor:'rgb(0, 51, 157)',
        color:'white',
        padding:'5px'
    },
    font:{
        fontSize:'14px'
    }
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            {/* <Box className={classes.topFooter}>Get In Touch</Box> */}
            <AppBar position="static" elevation={0} component="footer" className={classes.mainFooter}>
                <Grid container item justify="space-between">
                    <Grid item sm={12} xs={12} md={4}>
                        <h2>Contact Us</h2>
                        <Typography paragraph className={classes.font}>
                            <b>Address:</b>Japan shop, No45, St454, Toul tum poung, Phnom Penh<br></br>
                            <b>Phone:</b>096 990 0055  <br></br>
                            <b>Email:</b> sushidonmaru@gmail.com <br></br>
                            <b> Working Days/Hours:</b> Mon - Sun / 7:30 AM - 8:00 PM <br></br>
                        </Typography>
                    </Grid>
                    
                    <Grid item sm={12} xs={11} md={4}>
                        <h2>Our Facebook Page</h2>
                        <Typography paragraph>
                        Sushidonmaru Japenese Food<br></br>
                        This site is compliant with the Payment Card Industry and Data Security Standard.
                        </Typography>
                    </Grid>

                    <Grid item sm={12} xs={11} md={4}>
                        <h2>Quick Links</h2>
                        <Typography paragraph>
                        This site is compliant with the Payment Card Industry and Data Security Standard.
                        </Typography>
                    </Grid>
                </Grid>

                <Toolbar style={{ justifyContent: "center" }}>
                    <Typography variant="caption">©2022 React JS, All Rights Reserved & Designed by KIMHUY SOTH</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}