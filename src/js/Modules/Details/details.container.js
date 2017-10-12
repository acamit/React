import {connect} from "react-redux";
import DetailsWrapper from "./details.wrapper";
import {GetAllPokemons} from "../../utils/actions";


const mapStateToProps = (state, ownProps)=>{
    let retVal = Object.assign({}, ownProps, {pokemons:state.pokemons, error:state.error});
    return retVal;
};

const mapDispatchToProps = (dispatch)=>{
    return {
        GetAllPokemons:()=>{dispatch(GetAllPokemons());}
    };
};

/**
 * Container component for details module
 */
const Details = connect(mapStateToProps,mapDispatchToProps )(DetailsWrapper);

export default Details;