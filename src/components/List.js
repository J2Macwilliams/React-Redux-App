import React from "react";
import { connect } from "react-redux";
import { getBeers } from "../actions";

const BeerList = (props) => {
console.log("Beer" , props);
return (
    <>
    <button>Beer</button>
    </>
)
}
export default BeerList;