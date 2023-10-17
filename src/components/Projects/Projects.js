import classes from "./Projects.module.css"
import ProjectCard from "../../ui/Project-card/Project-Card";
import {List} from "@mui/material";

function Projects() {
    const projects = [
        <ProjectCard
            key={"p1"}
            id={"p1"}
            name={"Budget"}
            tech={["Node JS"]}
            link={"https://github.com/carmelBar24/Budget"}
            image={'/assets/images/manage.jpg'}
            description={"This is a personal budgeting application that allows users to manage their expenses and budget. \nUsers can register, log in, add costs, update costs, and view their budget based on category filter."}
        />,
        <ProjectCard
            key={"p2"}
            id={"p2"}
            name={"News"}
            tech={["React"]}
            link={"https://github.com/carmelBar24/news"}
            image={'/assets/images/news.png'}
            description={"News is an app to view the popular breaking news!\n You can filter the search between dates and search by keywords."}
        />,
        <ProjectCard
            key={"p3"}
            id={"p3"}
            name={"Brain Boost"}
            tech={["Flutter", "Dart", "FireBase"]}
            link={"https://github.com/carmelBar24/brain"}
            image={'/assets/images/brain.png'}
            description={"Brain Boost is an app to view summaries and optimize learning with tracking. You can log in or sign up using any account,\n and this will lead you to the feed page.\n You can also check tasks as done and view PDF files wherever you want."}
        />
    ];
    return(
        <div className={classes.Projects} id={"Projects"}>
            <span>Projects</span>
            <div className={classes.ProjectsCard} id={"Projects"}>
                <div style={{ overflowX: 'auto' , width:"90vw"}}>
                    <List>
                        {projects.map((p)=><li key={p.key}>{p}</li>)}
                    </List>
                </div>
            </div>
        </div>

    );
}

export default Projects;