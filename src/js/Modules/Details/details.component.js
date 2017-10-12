import React from "react";
import PropTypes from "prop-types";

import DetailsView from "./details.view.component";
import EditDetails from "../Edit/edit-details.container"; 

/**
 * Presentational component enclosing the details view section and the edit details displayModal
 * Recieves its props from details.wrapper
 * @param {*} props 
 */
function DetailComponent(props){
    const id = props.item.id;
    return (
        <div>
            { id? (<div>
                        <div className="col-md-12">
                             <DetailsView handleEditClick={props.handleEditClick}  item={props.item} />
                        </div>
                        <EditDetails item={props.item} displayModal={props.displayModal} handleCloseModalClick={props.handleCloseModalClick}  />
                    </div>
                ):(
                    <div className="col-md-12">
                        <div className="alert alert-danger">Please Select an item</div>
                    </div>
                )
            }
        </div>
    );

}

DetailComponent.propTypes={
    handleEditClick:PropTypes.func,
    displayModal:PropTypes.bool,
    handleFormSubmit:PropTypes.func,
    handleCloseModalClick:PropTypes.func,
    item:PropTypes.object
};
export default DetailComponent;