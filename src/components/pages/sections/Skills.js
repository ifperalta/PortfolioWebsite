import React from "react";
import { svg } from "../../mockdata/data";
import { FiArrowRightCircle } from "react-icons/fi";

const Skills = () => {
    return (<div className="space-md border-bottom">
                <div className="container">
                        <div className="row ">
                                <div className="col-md-4 skills-co"> 
                                    <h2>Skills</h2><br />
                                    <h4>Get The Right Creative <br />Idea Or Solution</h4>
                                    <br /><br />
                                    <a href="/contact" className="btn btn-success btn-lg">Hire Me <FiArrowRightCircle /></a>
                                </div>
                                <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="headline-subtitle-sub">Aliquam erat volutpat. In egestas tincidunt ex, in iaculis velit consequat id. Donec dignissim sagittis massa. Etiam est lorem, congue ac ipsum in, aliquet consectetur leo. In ac imperdiet lorem. Etiam non varius ante, ac vestibulum tortor.</p>      
                                            </div>
                                        </div>
                                        <div className="row mt-4 justify-content-center">
                                                <div className="col-md-5 skills-ev">
                                                    <h4>Frontend</h4> 
                                                    <ul className="icon-skills">
                                                        <li><img src={svg[0].react} height="42" /></li>
                                                        <li><img src={svg[0].js} height="45" /></li>
                                                        <li><img src={svg[0].html} height="45" /></li>
                                                        <li><img src={svg[0].css} height="45" /></li>
                                                    </ul>                                                
                                                </div>
                                                <div className="col-md-5 skills-od">
                                                    <h4>Database</h4> 
                                                    <ul className="icon-skills">
                                                        <li><img src={svg[0].mysql} height="45" /></li>  
                                                    </ul>
                                                </div>
                                                <div className="col-md-5 skills-ev">
                                                    <h4>Backend</h4> 
                                                    <ul className="icon-skills">
                                                        <li><img src={svg[0].node} height="45" /></li>
                                                        <li><img src={svg[0].php} height="45" /></li>
                                                        <li><img src={svg[0].java} height="45" /></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-5  skills-od">
                                                    <h4>DevOps</h4> 
                                                    <ul className="icon-skills">
                                                        <li><img src={svg[0].git} width="45" /></li>
                                                        <li><img src={svg[0].docker} width="45" /></li>
                                                        <li><img src={svg[0].linux} width="45" /></li>
                                                        <li><img src={svg[0].aws} width="45" /></li>          
                                                    </ul>                       
                                                </div>
                                        </div>
                                </div>  
                        </div>      
                </div>
            </div> );
}   
export default Skills;