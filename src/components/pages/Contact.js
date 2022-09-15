import React from "react";
import { Form } from 'react-bootstrap';

import Header from "../common/Header";
import Footer from "../common/Footer";
import Loading from "../common/Loading";

class Contact extends React.Component{
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
                        <Header activepage="contact"/>
                            <div className="container">
                                    <header>
                                        <div className="container pd-bottom-75 mt-5">
                                            <div className="row d-flex align-content-center">
                                                <div className="col-md-12">
                                                    <div className="headline-content">
                                                        <h3 className="headline-title display-3">Contact</h3><br />
                                                        <p className="headline-subtitle">I love to hear from you. Let’s build something great together.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </header>

                                    <div className="contact">
                                            <div className="container">       
                                                <div className="row">               
                                                    <div className="col-md-8">
                                                    <Form>  
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Control type="email" placeholder="Name" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Control type="email" placeholder="Email" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Control placeholder="Message" className="contactTextArea" as="textarea" rows={3} />
                                                            </Form.Group>
                                                            <br /><br />
                                                            <button type="submit" className="btn btn-success ml-auto">Send Message</button>
                                                    </Form>    
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                        </div>
                    <Footer show={true} />           
                </div>);
        }            
    }
}
export default Contact;