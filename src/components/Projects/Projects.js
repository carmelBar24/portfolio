import classes from "./Projects.module.css"
import {List} from "@mui/material";
import {useEffect, useState} from "react";
import ProjectCard from "../../ui/Project-card/Project-Card";

function Projects() {
    const [projects,setProjects]=useState([]);

    async function fetchProjects() {
        const response=await fetch("https://carmelbar-56961-default-rtdb.firebaseio.com/projects.json");
        const data=await response.json();
        const loadedProjects=[];

        for(const key in data)
        {
            loadedProjects.push({
                id:key,
                name:data[key].name,
                description:data[key].description,
                tech:data[key].tech,
                link:data[key].link,
                image:data[key].image,
            })
        }
        setProjects(loadedProjects);
    }
    useEffect(() => {
       fetchProjects();
    },[]);
    return(
        <div className={classes.Projects}>
            <span>Projects</span>
            <div className={classes.ProjectsCard} >
                    <List className={classes.list}>
                        {projects.map((p)=><li key={p.id}>{<ProjectCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            tech={p.tech}
                            link={p.link}
                            image={p.image}
                            description={p.description}/>}</li>)}
                    </List>
            </div>
        </div>

    );
}

export default Projects;