import React from "react";
import PropTypes from "prop-types";
import HomeComponent from "./home.component";

/**
 * Wrapper around the Home presentaional component
 * @param {*} props 
 */
function HomeWrapper(props){
    return (
        <div className="col-md-12">
            <HomeComponent pokemons={props.pokemons} />
        </div>
    );
}

HomeWrapper.propTypes={
    pokemons:PropTypes.array,
    GetAllPokemons:PropTypes.func
};

export default HomeWrapper;