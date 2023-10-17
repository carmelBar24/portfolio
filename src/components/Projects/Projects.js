import classes from "./Projects.module.css"
import ProjectCard from "../../ui/Project-card/Project-Card";

function Projects() {
    return(
        <div className={classes.Projects} id={"Projects"}>
            <span>Projects</span>
            <div className={classes.ProjectsCard} id={"Projects"}>
            <ProjectCard name={"Budget"} link={"https://github.com/carmelBar24/Budget"} image={'/assets/images/manage.jpg'} description={"This is a personal budgeting application that allows users to manage their expenses and budget. Users can register, log in, add costs, update costs, and view their budget based on category filter."}/>
            <ProjectCard name={"News"} link={"https://github.com/carmelBar24/news"} image={'/assets/images/news.png'} description={"News is a App to view the popular breaking news!. You can filter the search between dates  and you can search by keywords."}/>
                <ProjectCard name={"News"} link={"https://github.com/carmelBar24/news"} image={'/assets/images/news.png'} description={"News is a App to view the popular breaking news!. You can filter the search between dates  and you can search by keywords."}/>
                <ProjectCard name={"News"} link={"https://github.com/carmelBar24/news"} image={'/assets/images/news.png'} description={"News is a App to view the popular breaking news!. You can filter the search between dates  and you can search by keywords."}/>
                <ProjectCard name={"News"} link={"https://github.com/carmelBar24/news"} image={'/assets/images/news.png'} description={"News is a App to view the popular breaking news!. You can filter the search between dates  and you can search by keywords."}/>
                <ProjectCard name={"News"} link={"https://github.com/carmelBar24/news"} image={'/assets/images/news.png'} description={"News is a App to view the popular breaking news!. You can filter the search between dates  and you can search by keywords."}/>
                <ProjectCard name={"News"} link={"https://github.com/carmelBar24/news"} image={'/assets/images/news.png'} description={"News is a App to view the popular breaking news!. You can filter the search between dates  and you can search by keywords."}/>
            <ProjectCard name={"Brain Boost"} link={"https://github.com/carmelBar24/brain"} image={'/assets/images/brain.png'} description={"Brain Boost is a App to view summaries and optimize learning with tracking if you want.\n Login or SignUp using any account (P.S. Your credentials are safe!)\n and this will lead you to the feed page.\nYou can also check tasks as done and you can view the pdf files wherever you want."}/>
            </div>
        </div>

    );
}

export default Projects;