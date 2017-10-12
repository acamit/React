import React from "react";
import PropTypes from "prop-types";
import deepEqual from "deep-equal";
import { bindHandlers } from 'react-bind-handlers';

import DetailComponent from"./details.component";
import {UPDATE_POKEMON_ERROR,GET_ALL_POKEMON_ERROR} from "../../utils/constants";

/**
 * Wrapper component for the detials view component manages state of the edit modal and the details view
 */
class DetailsWrapper extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            displayModal:false
        };
    }
    /**
     * dispatch action to get all pokemons  if not pokemons are present. 
     * useful when user directly loads the page
     */
    componentWillMount(){
      if(Object.keys(this.props.pokemons).length<=0){
          this.props.GetAllPokemons();
      }
    }
    /**
     * Decide if error has occured and hide modal accordingly
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps){
        if(nextProps.error.type!=UPDATE_POKEMON_ERROR){
            this.setState({
                displayModal:false
            });
        }
    }

    handleEditClick(){
        this.setState({
            displayModal:true
        });
    }

    handleCloseModalClick(){
         this.setState({
            displayModal:false
        });
    }
    
     render(){
        let id= this.props.match.params.id;
        let filterRes = this.props.pokemons[id]||{id:''};
       return(
           <DetailComponent {...this.state} item={filterRes} handleCloseModalClick={this.handleCloseModalClick} handleEditClick={this.handleEditClick} />
       );
    }
}

DetailsWrapper.propTypes={
    match:PropTypes.object,
    items:PropTypes.array,
    pokemons:PropTypes.object,
    GetAllPokemons:PropTypes.func,
    error:PropTypes.object
};

export default bindHandlers(DetailsWrapper);