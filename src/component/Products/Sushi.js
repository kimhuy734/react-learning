import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import { Card, Typography, CardContent, CardHeader, Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: '15px',
    },
    mainImage: {
        height: '200px'
    },
    button: {
        background: 'red',
        color: 'white'
    },
    detailButton: {
        display: 'flex',
        justifyContent: 'end'
    },
    mainHead: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));
export default function Sushi() {
    const classes = useStyles();
    const navigate = useNavigate();
    const datas = [
        {
            id: 1,
            name: "Sushi",
            Price: "20$",
            image: require("../../images/f_2.jpg"),
            description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."
        },
        {
            id: 2,
            name: "Sushi",
            Price: "40$",
            image: require("../../images/f_3.jpg"),
            description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."

        },
        {
            id: 3,
            name: "Sushi",
            Price: "29$",
            image: require("../../images/f_4.jpg"),
            description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."

        },
        {
            id: 4,
            name: "Sushi",
            Price: "9$",
            image: require("../../images/f_5.jpg"),
            description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."

        },
        {
            id: 5,
            name: "Sushi",
            Price: "12$",
            image: require("../../images/3.jpg"),
            description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."

        },
        {
            id: 6,
            name: "Sushi",
            Price: "6$",
            image: require("../../images/7.jpg"),
            description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."

        },
        {
            id: 7,
            name: "Sushi",
            Price: "18$",
            image: require("../../images/8.jpg"),
            description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."

        },
        {
            id: 8,
            name: "Sushi",
            Price: "10$",
            image: require("../../images/9.jpg"),
            description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavored with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."

        }
    ];
    const onDetailWatch = (item) => {
        console.log('item',item);
        navigate(`/detailSushi/${item.id}`);

    };
    return (
        <div><Header />
            <Container>
                <Grid container spacing={1} className={classes.mainGrid} >
                    {datas.map(item => (

                        <Grid item xs={12} sm={3}>

                            <Card>
                                <CardContent>
                                    <Box className={classes.mainHead}>
                                        <Typography variant='h5'>{item.name}</Typography>
                                        <Button variant="contained" size="small" className={classes.button} onClick={() => onDetailWatch(item)}>
                                            Detail
                                        </Button>
                                    </Box>
                                    <CardContent>

                                        <img src={item.image} className={classes.mainImage} />
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>

            </Container>

            <Footer />

        </div>
    );
}