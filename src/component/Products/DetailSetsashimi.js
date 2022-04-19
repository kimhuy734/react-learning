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
        name: "Set Sashimi",
        Price: "Price: 200$",
        image: require("../../images/f_1.jpg"),
        description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."
    },
    {
        id: 2,
        name: "Set Sashimi",
        Price: "80$",
        image: require("../../images/image2.PNG"),
        description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

    },
    {
        id: 3,
        name: "Set Sashimi",
        Price: "99$",
        image: require("../../images/image3.PNG"),
        description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

    },
    {
        id: 4,
        name: "Set Sashimi",
        Price: "60$",
        image: require("../../images/image4.PNG"),
        description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

    },
    {
        id: 5,
        name: "Set Sashimi",
        Price: "220$",
        image: require("../../images/1.jpg"),
        description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

    },
    {
        id: 6,
        name: "Set Sashimi",
        Price: "100$",
        image: require("../../images/2.jpg"),
        description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

    },
    {
        id: 7,
        name: "Set Sashimi",
        Price: "160$",
        image: require("../../images/6.jpg"),
        description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

    },
    {
        id: 8,
        name: "Set Sashimi",
        Price: "80$",
        image: require("../../images/5.jpg"),
        description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

    },
];
export default function DetailSetsashimi() {
    const classes = useStyles();
    const {itemDetail} = useParams();
    console.log('itemddds',itemDetail);
    let result = datas.filter(item => item.id == itemDetail)
    console.log('result',result);
    return (
        <div><Header />
           {
               !!result && 
                <Container>
                    <Grid container spacing={4} className={classes.mainGrid} >
                        <Grid item xs={12} md={6} >
                            <Card>
                                <CardContent>
                                    <CardContent>
                                        <img src={result[0].image} className={classes.mainImage} />
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>{result[0].name}</Typography>
                                    <Typography>{result[0].Price}</Typography>
                                </Box>
                                <CardContent>
                                    <Typography>{result[0].description}</Typography>
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