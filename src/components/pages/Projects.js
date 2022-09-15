import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Loading from "../common/Loading";
import MyProjects from "./sections/MyProjects";

class Projects extends React.Component{
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
                         <Header activepage="projects"/>
                         <div className="container"> 
                            <header>
                                <div className="container b-bottom pd-bottom-75 mt-5">
                                    <div className="row d-flex align-content-center">
                                        <div className="col-md-12">
                                            <div className="headline-content">
                                                <h3 className="headline-title display-3">My Projects</h3><br />
                                                <p className="headline-subtitle">I made some of them for fun and to learn new things</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <MyProjects /> 
                            
                        </div>
                        
                     <Footer show={false} />         
                    </div>);
        }    
    }
}
export default Projects;