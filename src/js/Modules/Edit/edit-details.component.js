import React from "react";
import PropTypes from "prop-types";

/**
 * Edit details component contains the form to edit the pokemon details.
 * The form in displayed in a modal
 * @param {*} props 
 */
function EditDetailsComponent(props){
    const isDisplay = props.displayModal;
    const isSubmitClicked = props.isSubmitClicked;
    const error= props.error;
    return(
        <div>
            <div style={{display: isDisplay ? 'block' : 'none'}} className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={props.handleCloseModalClick} >&times;</span>
                        <h3 style={{"margin-top":10+"px"}}>Edit Pokemon Details</h3>
                    </div>
                    <div className="modal-body" >
                        <form onSubmit={props.handleFormSubmit} style={{display:isSubmitClicked?'none':'block'}} ref={props.handleFormRef}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" defaultValue={props.name} onChange={props.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Type</label>
                                <input type="text" className="form-control" id="type" name="type" defaultValue={props.type} onChange={props.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="trainer">Trainer Name</label>
                                <input type="text" className="form-control" id="trainer" name="trainer" defaultValue={props.trainer} onChange={props.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <div style={{display:isSubmitClicked?'block':'none' , padding:15+"px"}}>
                            <span style={{display:error.type?'block':'none', color:"red"}}>{error.message}</span>
                            <span style={{display:!(error.type)?'block':'none'}}>Updating Please wait</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


EditDetailsComponent.propTypes={
    name:PropTypes.string,
    id:PropTypes.string,
    type:PropTypes.string,
    trainer:PropTypes.string,
    item:PropTypes.object,

    handleCloseModalClick:PropTypes.func,
    handleFormSubmit:PropTypes.func,
    handleInputChange:PropTypes.func,
    handleFormRef:PropTypes.func,
    displayModal:PropTypes.bool,
    isSubmitClicked:PropTypes.bool,
    
    error:PropTypes.object

};
export default EditDetailsComponent;