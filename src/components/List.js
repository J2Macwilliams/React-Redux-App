import React from "react";
import { connect } from "react-redux";
import { getBeers } from "../actions";

import { Grid, Card } from '@material-ui/core';

const BeerList = (props) => {
    console.log("Beer", props);
    return (
        <>
            <button>Slainte'</button>
            {props.isLoading && <div>spinner</div>}
            {props.error && <div>{props.error.message}</div>}
            <Grid >

                {props.beers.map(ale => (
                    <Grid item key={ale.name}>
                        <Card >
                            {ale.name}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
const mapDispatchToProps = () => {
    return {
        getBeers
    }
}
export default connect(mapDispatchToProps, {})(BeerList);