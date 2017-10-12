import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Tile(props){
    return (
         <div className="col-sm-4 col-md-3 tile">
            <div className="thumbnail">
              <Link to={"/details/"+props.id} >
                <img className="img-responsive tileImg" src={props.imageUrl} alt=""  />
                <div className="caption tile-caption">
                  <div className="row">
                      <div className="col-md-6">
                        <h4>{props.name}</h4>
                        <p>Trainer: {props.trainer}</p>
                      </div>
                      <div className="col-md-6">
                          <p className="label label-primary tile-label">Type: {props.type}</p>
                      </div>
                      
                  </div>
                </div>
              </Link>
            </div>
       </div>
    );
}
Tile.propTypes={
    imageUrl:PropTypes.string,
    type:PropTypes.string,
    trainer:PropTypes.string,
    name:PropTypes.string,
    id:PropTypes.string
};


export default Tile;