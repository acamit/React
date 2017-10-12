import React from "react";
import PropTypes from "prop-types";
import { bindHandlers } from 'react-bind-handlers';

import SearchComponent from "./search.component";

/**
 * Wrapper around Search component to manage the local state and dispatch actions and events as required
 */
class SearchContainer extends React.PureComponent{

    componentDidMount(){
        if(this.props.searchString){
             this.clearButton.classList.remove("hidden");
        }
        this.clearButton.addEventListener("click", this.handleClearClick, false);
    }

    componentWillUnmount(){
        this.clearButton.removeEventListener("click", this.handleClearClick);
    }

    handleInputRef(input){
        this.input = input;
    }

    handleClearRef(clear){
        this.clearButton = clear;
    }
     handleClearClick(){
        this.input.value ="";
        this.clearButton.classList.add("hidden");
        this.input.focus();
        this.handleSearchClick();
    }

    handleInputChange(){
        let visible = Boolean(this.input.value);
        if(!visible){
            this.clearButton.classList.add("hidden");
        }else{
            this.clearButton.classList.remove("hidden");
        }
    }

    handleSearchClick(ev){
         this.props.handleSearchClick(this.input.value);        
    }
    handleOnKeyDown(ev){
        if(ev.keyCode==13){
            this.handleSearchClick();
        }
    }

    render(){
        return(
            <SearchComponent searchString={this.props.searchString} handleSearchClick={this.handleSearchClick} handleClearRef={this.handleClearRef}  handleInputChange={this.handleInputChange} handleClearClick={this.handleClearClick} handleInputRef={this.handleInputRef} handleOnKeyDown={this.handleOnKeyDown}/>
        );
    }
}

SearchContainer.propTypes={
    handleSearchClick:PropTypes.func,
    resetSearchString:PropTypes.func,
    searchString:PropTypes.string
};
export default bindHandlers(SearchContainer);