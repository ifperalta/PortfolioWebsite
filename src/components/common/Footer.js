import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {

    let credits = `Powered by Bootstrap but I added flavours by customizing the pages and built the website using React.`;
    
    return (<div className="footer pb-5 pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mt-2">
                                <div className="copy"> &copy; 2022 iamian.dev </div><br />
                                <div className="copy copywrite">
                                    { props.show ?  credits : "" }
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h3>Let us collaborate and build something great!</h3>
                                <div className="row mt-5">
                                    <div className="col-md-6">
                                        <h4>Let&apos;s connect</h4>
                                        <ul className="list-unstyled p-0">
                                            <li className="#"><a href="mailto:hello-ian@iamian.dev" data-bypass="">Hello@</a><br /> </li>
                                            <li className="#"><a href="https://ca.linkedin.com/in/ianperalta" data-bypass="">LinkedIn</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Quick links</h4>
                                        <ul className="list-unstyled p-0">
                                            <li><NavLink className="footer-nav-item" to="/contact">Contact</NavLink></li>
                                            <li><NavLink className="footer-nav-item" to="/projects">Projects</NavLink></li>
                                            <li><NavLink className="footer-nav-item" to="">Home</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
}   
export default Footer;