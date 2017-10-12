import React from "react";
import {Route, Switch, Link } from "react-router-dom";

import PropTypes from "prop-types";

import {getData} from "../../services/dataOperations";
import {GetAllPokemons} from "../../utils/actions";

import Home from "../Home/home.container";
import Search from "../Search/search-parent.container";
import Details from "../Details/details.container";

/**
 * The component to display application Content through the Route options 
 */
function Content(){
        return (
            <div className="row">
                <Switch>
                    <Route exact path="/"  component={()=><Home />} />
                    <Route path="/home"  component={()=><Home />} />
                    <Route path="/search" component={()=><Search />}  />
                    <Route path="/details/:id" component={(props)=><Details {...props} />} />               
                    <Route path="/details" component={(props)=><Details {...props}/>} />
                </Switch>
            </div>
        );
}

export default Content;