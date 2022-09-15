import React from "react";
import { NavLink } from "react-router-dom";


class Header extends  React.Component{
     render(){
        return (<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 nav-container">
                    <div className="container">
                            <div className="col-md-8">
                                <NavLink className="nav-item site-brand" to="/">Hello! I&apos;m Ian</NavLink>
                            </div>    
                            <div className="col-md-4">
                                <button className="navbar-toggler" type="button">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                                    <NavLink className="nav-item" to="/">Home</NavLink>
                                    <NavLink className="nav-item" to="/projects">Projects</NavLink>
                                    <NavLink className="nav-item" to="/contact">Contact</NavLink>
                                </div>
                            </div>    
                    </div>
                </nav>);
    }
}   
export default Header;