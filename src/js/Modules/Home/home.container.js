import {connect} from "react-redux";
import {GetAllPokemons} from "../../utils/actions";

import HomeWrapper from "./home.wrapper";

const matchStateToProps= (state)=>{
    return {
        pokemons:Object.values(state.pokemons), 
        error:state.error
    };
};
/**
 * Container for the home component
 */
const Home = connect(matchStateToProps, {GetAllPokemons})(HomeWrapper);
export default Home;