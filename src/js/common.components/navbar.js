import React from "react";
import {Link, NavLink} from "react-router-dom";
import img from "../../assets/images/navbar-background.png";

/**
 * Navigation bar for the app
 * @param {*} props 
 */
function Navbar(props){
    return (
    <div className="row">
      <header className="page-header">
          <img src={img} />
      </header>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/home" href="#">Saxo</NavLink>
          </div>
          <ul className="nav navbar-nav">
              <li><NavLink activeStyle={{color:'red'}} to="/home" href="#">Home</NavLink></li>
              <li><NavLink activeStyle={{color:'red'}}  to="/search">Search</NavLink></li>
              <li><NavLink activeStyle={{color:'red'}} to="/details">Details</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
    );
}
export default Navbar;