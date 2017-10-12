import React from "react";
import PropTypes from "prop-types";

/**
 * Search presentation component
 * Contains the search bar and the buttion.
 * It dispatches the search action when user clicks the search button
 * @param {*} props  
 */ 
function SearchComponent(props){
    return(
        <div className="row">
            <div className="col-sm-3"  />
            <div className="col-sm-6">
                <div className="input-group">
                    <div className="form-group has-feedback has-clear">
                        <input type="text" ref={props.handleInputRef} defaultValue={props.searchString} className="form-control" id="exampleInput1" placeholder="Enter text here" onChange={props.handleInputChange} onKeyDown= {props.handleOnKeyDown}/>
                        <span  ref={props.handleClearRef} onClick={props.handleClearClick} className="form-control-clear glyphicon glyphicon-remove form-control-feedback hidden" style={{zIndex: 10, pointerEvents: 'auto', cursor:'pointer'}} />
                    </div>
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary" id="exampleButton1" onClick={props.handleSearchClick}>Search</button>
                    </span>
                </div>
            </div>
            <div className="col-sm-3"  />
        </div>
       );
    }

SearchComponent.propTypes={
    handleSearchClick:PropTypes.func,
    handleInputRef:PropTypes.func,
    handleClearRef:PropTypes.func,
    handleInputChange:PropTypes.func,
    handleClearClick:PropTypes.func,
    handleOnKeyDown:PropTypes.func,
    searchString:PropTypes.string
};
export default SearchComponent;