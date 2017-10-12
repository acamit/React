import React from "react";
import PropTypes from "prop-types";

import Tile from "./tile";

/**
 * Presentational displays the tile component for the pokemons
 * @param {*} props 
 */
function HomeComponent(props){
    let thumbnail=[];
    if(props.pokemons.length>0){
      for(let item of props.pokemons){
          thumbnail.push(<Tile key={item.id} {...item} />);
      }
    }else{
         thumbnail.push(<div className="alert alert-warning" >No results found</div>);
    }
    return (
        <div>{thumbnail}</div>
    );
}

HomeComponent.propTypes={
    pokemons:PropTypes.array,
};

export default HomeComponent;