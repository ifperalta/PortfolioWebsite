import React, { Fragment, useEffect, useState } from "react";
import { projects } from "../../mockdata/data";
import { FiArrowRightCircle } from "react-icons/fi";

// Loads all web apps
const Webapp = () => {
    const [category] = useState("webapp");
    const [projectlists, setProjects] = useState(projects);
    let filteredProjects = [];

    useEffect(() => {
        filteredProjects = projects.filter(item => item.category.toUpperCase() == category.toUpperCase());
        setProjects(filteredProjects);
    }, [category]);
    
    return (<div>
                <div className="container border-bottom pd-bottom-50 pt-5">
                    <div className="row d-flex justify-content-start">
                        <div className="col-md-12">
                            <h3 className="headline-title mb-5">Web App</h3> 
                        </div>    
                    </div>
                    {projectlists.map((project, key) => {
                        return(<div key={key} className="row d-flex pb-5 justify-content-start mt-4">
                                    <div className="col-md-2">
                                        <ul className="list-unstyled project-intro mt-3">
                                            <li className="title"><b>Technologies</b></li>
                                            <li>Backend: {project.work.backend}</li>
                                            <li>Frontend: {project.work.frontend}</li>
                                            <li>Database: {project.work.database}</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-7 offset-md-1">
                                        <h3>{project.project_name}</h3>
                                        <p className="h5">{project.project_description}</p>
                                        <br />
                                        <div className="row mb-4">
                                            <div className="col-md-6 demo-img">
                                                <img src={project.project_image1.url} />    
                                            </div>
                                            <div className="col-md-6  demo-img">
                                                <img src={project.project_image2.url} />    
                                            </div>
                                        </div>
                                        <a href={project.project_url}><button  className="btn btn-dark">Source Code <FiArrowRightCircle /></button></a>
                                    </div>
                                </div>); 
                    })}
                </div>
            </div>);
}

// Loads all mini projects
const MiniProjects = () => {
    const [category] = useState("mini");
    const [projectlists, setProjects] = useState(projects);
    let filteredProjects = [];

    useEffect(() => {
        filteredProjects = projects.filter(item => item.category.toUpperCase() == category.toUpperCase());
        setProjects(filteredProjects);
    }, [category]);
    
    return (<div className="container border-bottom pd-bottom-50">
                <div className="row d-flex justify-content-start">
                    <div className="col-md-12">
                        <h3 className="headline-title mb-5">Mini Projects</h3> 
                    </div>    
                </div>
                <div className="row d-flex justify-content-start mt-4">
                    {projectlists.map((project, key) => {
                    return(<div key={key} className="col-md-4 p-3">
                                    <h4>{project.project_name}</h4>
                                    <br />
                                    <div className="row mb-4">
                                        <div className="col-md-12 demo-img-mini">
                                            <img src={project.project_image1.url} />    
                                        </div>
                                    </div>
                                    <p className="w-90">{project.project_description}</p>
                                    <a href={project.project_url}><button className="btn btn-dark">Source Code <FiArrowRightCircle /></button></a>
                            </div>); 
                    })}
                </div>
        </div>);
}


// Loads all templates
/*
const Templates = () => {
    const [category] = useState("prototype");
    const [projectlists, setProjects] = useState(projects);
    let filteredProjects = [];

    useEffect(() => {
        filteredProjects = projects.filter(item => item.category.toUpperCase() == category.toUpperCase());
        setProjects(filteredProjects);
    }, [category]);
    
    return (<div className="container border-bottom pd-bottom-50">
                <div className="row d-flex justify-content-start">
                    <div className="col-md-12">
                        <h3 className="headline-title mb-5">App Template</h3> 
                    </div>    
                </div>    

                {projectlists.map((project, key) => {
                return(<div key={key} className="row d-flex justify-content-start mini">
                            <div className="col-md-4">
                                <h4>{project.project_name}</h4>
                                <p>{project.project_description}</p>
                                <a href={project.project_url}><button className="btn btn-dark">Source Code <FiArrowRightCircle /></button></a>
                            </div>    
                            <div className="col-md-4 demo-img">
                                <img src={project.project_image1.url} />    
                            </div>
                            <div className="col-md-4  demo-img">
                                <img src={project.project_image2.url} />    
                            </div>
                        </div>); 
                })}
            </div>);
}*/

const About = () => {
    return(<div className=" bg-light container">     
                <div className="row d-flex justify-content-start mini">
                    <div className="col-md-7">
                        <h4>About this portfolio website</h4>
                        <p>This website is powered with Bootstrap. I added flavours by customizing the pages and built the website using React.</p><br />
                    </div>
                    <div className="col-md-2 pt-4">
                        <ul className="list-unstyled">
                            <li className="title"><b>Frontend</b></li>
                            <li>React and Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-md-3 pt-4">
                        <ul className="list-unstyled">
                            <li className="title"><b>DevOps</b></li>
                            <li>AWS EC2, Linux, Git, Docker and Jenkins</li>
                        </ul>
                    </div>
                </div>
            </div>);
}

const MyProjects = () => {
    return (<Fragment>
                <Webapp />
                <MiniProjects />
                <About />
            </Fragment>);
}

export default MyProjects;