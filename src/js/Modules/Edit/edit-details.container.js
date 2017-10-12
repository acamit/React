import {connect} from "react-redux";
import {UpdatePokemon} from "../../utils/actions";

import EditDetailsWrapper from "./edit-details.wrapper";
const mapStateToProps = (state, ownProps)=>{
    return {
        item:state.pokemons[ownProps.item.id], 
        error:state.error
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        handleFormSubmit:(pokemon)=>{
            dispatch(UpdatePokemon(pokemon));
        }
    };
};

/**
 * Container component for edit details module
 */
const EditDetails = connect(mapStateToProps, mapDispatchToProps)(EditDetailsWrapper);

export default EditDetails;