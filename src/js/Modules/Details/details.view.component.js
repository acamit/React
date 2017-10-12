import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the pokemon details
 * @param {*} props 
 */
function DetailsView(props){
            return (
            <div className="row detailsComponent">
                <div className="col-md-6 col-xs-12">
                     <div className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                            <div type="text" className="form-control" id="name" placeholder="Name"  >{props.item.name}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type" className="col-sm-2 control-label">Type</label>
                            <div className="col-sm-10">
                            <div type="text" className="form-control" id="type" placeholder="Type" >{props.item.type} </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="trainer" className="col-sm-2 control-label">Trainer</label>
                            <div className="col-sm-10">
                            <div type="text" className="form-control" id="trainer" placeholder="Trainer" >{props.item.trainer}</div>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-default" onClick={props.handleEditClick}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="col-md-6 col-xs-12">    
                   <img src={props.item.imageUrl} alt={props.item.name} style={{height:'250px', width:'300px'}} className="img-thumbnail details-thumbnail" />
               </div>
            
        </div>);
    
}

DetailsView.propTypes={
    item:PropTypes.object,
    handleEditClick:PropTypes.func
};
DetailsView.defaultProps={
    item:{
        name:"",
        type:"",
        imageUrl:"",
        trainer:""
    }
};

export default DetailsView;