import React from "react";
import PropTypes from "prop-types";
import { bindHandlers } from 'react-bind-handlers';

import EditDetailsComponent from "./edit-details.component";
import {UPDATE_POKEMON_ERROR} from "../../utils/constants";

/**
 * Wrapper for edit details component
 * Manages local state and form data.
 */

class EditDetailsWrapper extends React.PureComponent{
   constructor(props){
       super(props);
       this.state={
           id:this.props.item.id,
           name:this.props.item.name,
           type:this.props.item.type,
           trainer:this.props.item.trainer,
           isSubmitClicked:false, 
           error:null,
       };
   }
   componentWillReceiveProps(nextProps){
       if(nextProps.error.type===null){
           this.setState({
                isSubmitClicked:false
            });
       }else if(nextProps.error.type===UPDATE_POKEMON_ERROR){
           this.setState({
               error:nextProps.error
           });
       }
       return true;
   }
   handleFormRef(input){
       this.form = input;
   }
   handleFormSubmit(ev){
       ev.preventDefault();
       this.setState({
           isSubmitClicked:true
       });
    this.props.handleFormSubmit({
            id:this.state.id,
            name:this.state.name,
            type:this.state.type,
            trainer:this.state.trainer
        });
    }
   handleInputChange(ev){
       let target = ev.target.name;
        let value = ev.target.value;
         this.setState({
           [target]:value
        });
   }
    handleCloseModalClick(){
        this.props.handleCloseModalClick();
         this.setState({
           isSubmitClicked:false
       });
    }
    render(){
        return(
            <EditDetailsComponent {...this.state} item={this.props.item} error={this.props.error}   displayModal={this.props.displayModal} handleCloseModalClick={this.handleCloseModalClick} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}  />
        );
    }
}

EditDetailsWrapper.propTypes={
    item:PropTypes.object,
    handleCloseModalClick:PropTypes.func,
    handleFormSubmit:PropTypes.func,
    displayModal:PropTypes.bool,
    error:PropTypes.object
};


export default bindHandlers(EditDetailsWrapper);