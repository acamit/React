import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {SearchPokemons, ResetSearchString} from "../../utils/actions";

import SearchParentWrapper from "./search-parent.wrapper";
import Home from "../Home/home.component";

const mapStateToProps=(state)=>{
    
    return {
        visiblePokemons:state.visiblePokemons||{pokemons:Object.values(state.pokemons),searchString:""},
        pokemons:state.pokemons

    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        handleSearchClick: (searchString)=>{dispatch(SearchPokemons(searchString));},
        resetSearchString:()=>dispatch(ResetSearchString())
    };
};

/**
 * Container component of Search module's parent component
 */
const Search = connect( mapStateToProps, mapDispatchToProps)(SearchParentWrapper);
export default Search;