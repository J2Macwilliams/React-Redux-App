import React from "react";
import { connect } from "react-redux";
import { getBeers } from "../actions";

import { Grid, Card, Typography, makeStyles, CardMedia , Button} from '@material-ui/core';
import { white } from "ansi-colors";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        
      },
      
    card: {
      maxWidth: 300,
      margin: 7
      
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    
      },
    button: {
        fontSize: '1.6rem',
        background: 'white',
        margin: '3%'

    }
}));

const BeerList = (props) => {
    console.log("Beer", props);
    const classes = useStyles();
    return (
        <>
        <Typography style={{color: 'white'}}>
            Drink Responsibly
        </Typography>
        
            <Button className={classes.button} onClick={() => props.dispatch(getBeers())}>Cheers!</Button>
            {props.isLoading && <div>spinner</div>}
            {props.error && <div>{props.error.message}</div>}
            <Grid container spacing={2}>

                {props.beers.map(ale => (
                    <Grid item  xs={6} sm={3} md={2}>
                        <Card key={ale.name} className={classes.card}>
                            <CardMedia 
                            className={classes.media}
                            image={ale.image_url}
                            title={ale.name}
                            />
                            <Typography variant="h4">
                                {ale.name}
                            </Typography>
                            <Typography variant="h5">
                                abv: {ale.abv} %
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
// const mapDispatchToProps = () => {
//     return {
//         getBeers
//     }
// }
export default connect(state => {
    return state;
})(BeerList);