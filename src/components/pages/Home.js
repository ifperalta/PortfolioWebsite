import React from "react";
import { NavLink } from "react-router-dom";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Loading from "../common/Loading";

import { FiArrowRightCircle } from "react-icons/fi";

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isloading: true
        };
    }

    async componentDidMount(){
        setTimeout(() => {
            this.setState({ isloading: false });  
        }, 1000);
    }

    render(){

        if(this.state.isloading){
            return <Loading />;

        }else{
            return(<div>
                        <Header activepage="home" />
                        <div className="container"> 
                            <header>
                                <div className="container b-bottom pd-bottom-75 mt-5">
                                    <div className="row d-flex align-content-center">
                                        <div className="col-md-12">
                                            <div className="headline-content">
                                                <h3 className="headline-title display-3">I&apos;m a Full Stack Developer</h3><br />
                                                <p className="headline-subtitle">
                                                    <b>Let us collaborate and build something great! </b><br /><br />
                                                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                                                </p>
                                                <br />
                                                <NavLink className="btn btn-success nav-margin-right" to="/projects"> <FiArrowRightCircle /> Projects</NavLink>
                                                <NavLink className="btn btn-primary" to="/contact"><FiArrowRightCircle /> Contact</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <Portfolio />
                            <Skills />                
                        </div>
                        <Footer show={true} />       
                    </div>);
        }            
    }
}
export default Homepage;