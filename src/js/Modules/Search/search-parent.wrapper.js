import React from "react";
import PropTypes from "prop-types";
import deepEqual from "deep-equal";

import SearchComponent from "./search.wrapper";
import Home from "../Home/home.component";



/**
 * Parent component combines the search component containing search capability
 * and home's presentational component to display search results
 */
class SearchParentWrapper extends React.PureComponent{
    componentWillMount(){
        if(this.props.visiblePokemons.pokemons.length==0){
            
            this.props.handleSearchClick(this.props.visiblePokemons.searchString);
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(!deepEqual(this.props.pokemons, nextProps.pokemons)){
            this.props.handleSearchClick(nextProps.visiblePokemons.searchString);
        }
    }
    componentWillUnmount(){
        this.props.resetSearchString();
    }
    render(){
        return(
            <div className="col-md-12">
                <SearchComponent searchString={this.props.visiblePokemons.searchString} handleSearchClick={this.props.handleSearchClick} />
                <br/>
                <Home pokemons={this.props.visiblePokemons.pokemons} />
           </div>
        );
    }
}

SearchParentWrapper.propTypes = {
  searchString: PropTypes.string,
  handleSearchClick:PropTypes.func,
  resetSearchString:PropTypes.func,
  pokemons:PropTypes.object, 
  visiblePokemons:PropTypes.object
};

export default SearchParentWrapper;