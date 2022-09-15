import React, { useEffect, useState } from "react";
import { projects } from "../../mockdata/data";

const Portfolio = () => {    
    const [category, selectCategory] = useState("all");
    const [newprojects, setProjects] = useState(projects);

    let filteredProjects = [];

    useEffect(() => {
        if (category === "all") {
            filteredProjects = projects;
        }else{    
            filteredProjects = projects.filter(item => item.category.toUpperCase() == category.toUpperCase());
        }
        setProjects(filteredProjects);

    }, [category]);

    return (<div className="space-md border-bottom">
                <div className="container">
                    <div id="portfolio-filters">
                        <ul id="filters" className="p-0 list-unstyled">
                            <li><label onClick={() => selectCategory("all")} value="all" className="active skills">All</label></li>
                            <li><label onClick={() => selectCategory("webapp")} value="webapp" className="skills">Web App</label></li>
                            <li><label onClick={() => selectCategory("mini")} value="mini" className="skills">Mini Projects</label></li>
                        </ul>
                    </div>
                </div>

                <div className="grid">
                    {newprojects.map((project, key) => {
                        return(
                            <div key={key} className={ project.category + " entry work-entry projects"}>
                                <img src={project.project_image1.url} />
                            </div>
                        );
                    })}
                </div>
                    
           </div>);
}   
export default Portfolio;