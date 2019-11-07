import React from "react";
import { connect } from "react-redux";
import { getBeers } from "../actions";


const BeerList = (props) => {
console.log("Beer" , props);
return (
    <>
    <button>Slainte'</button>
    {props.isLoading && <div>spinner</div>}
    {props.error && <div>{props.error.message}</div>}
    
    </>
)
}
const mapDispatchToProps = () => {
    return {
       getBeers
    }
}
export default connect(mapDispatchToProps , {})(BeerList);