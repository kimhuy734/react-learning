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
export default function Setsashimi() {
    const classes = useStyles();
    const navigate = useNavigate();
    const datas = [
        {
            id: 1,
            name: "Set Sashimi",
            Price: "200$",
            image: require("../../images/f_1.jpg"),
            description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi."
        },
        {
            id: 2,
            name: "Set Sashimi",
            Price: "80$",
            image: require("../../images/image2.PNG"),
            description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi."

        },
        {
            id: 3,
            name: "Set Sashimi",
            Price: "99$",
            image: require("../../images/image3.PNG"),
            description: "Sashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi."

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
            description: "sSashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

        },
        {
            id: 8,
            name: "Set Sashimi",
            Price: "80$",
            image: require("../../images/5.jpg"),
            description: "sSashimi (刺身) is thinly sliced, raw food . It is one of the most famous dishes in the Japanese cuisine. Seafood is most commonly eaten as sashimi, but other meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi.."

        }
    ];
    const ondetail = (item) => {
        console.log('item',item);
        navigate(`/detailSetsashimi/${item.id}`);

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
                                        <Button variant="contained" size="small" className={classes.button} onClick={() => ondetail(item)}>
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