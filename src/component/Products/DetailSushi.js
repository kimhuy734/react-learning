import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import { Card, Typography, CardContent, CardHeader, Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    gridItem: {
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
}));

const datas = [
    {
        id: 1,
        name: "Sushi",
        Price: "20$",
        image: require("../../images/f_2.jpg"),
        description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold .."
    },
    {
        id: 2,
        name: "Sushi",
        Price: "40$",
        image: require("../../images/f_3.jpg"),
        description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold .."

    },
    {
        id: 3,
        name: "Sushi",
        Price: "29$",
        image: require("../../images/f_4.jpg"),
        description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold .."

    },
    {
        id: 4,
        name: "Sushi",
        Price: "9$",
        image: require("../../images/f_5.jpg"),
        description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold .."

    },
    {
        id: 5,
        name: "Sushi",
        Price: "12$",
        image: require("../../images/3.jpg"),
        description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold .."

    },
    {
        id: 6,
        name: "Sushi",
        Price: "6$",
        image: require("../../images/7.jpg"),
        description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold .."

    },
    {
        id: 7,
        name: "Sushi",
        Price: "18$",
        image: require("../../images/8.jpg"),
        description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold .."

    },
    {
        id: 8,
        name: "Sushi",
        Price: "10$",
        image: require("../../images/9.jpg"),
        description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold .."

    }
];
export default function DetailSushi() {
    const classes = useStyles();
    const {itemDetail2} = useParams();
    console.log('itemddds',itemDetail2);
    let result2 = datas.filter(item => item.id == itemDetail2)
    return (
        <div><Header />
           {
               !!result2 && 
                <Container>
                    <Grid container spacing={4} className={classes.mainGrid} >
                        <Grid item xs={12} md={6} >
                            <Card>
                                <CardContent>
                                    <CardContent>
                                        <img src={result2[0].image} className={classes.mainImage} />
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>{result2[0].name}</Typography>
                                    <Typography>{result2[0].Price}</Typography>
                                </Box>
                                <CardContent>
                                    <Typography>{result2[0].description}</Typography>
                                </CardContent>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Container>
          }
                <Footer/>

        </div>
    );
}