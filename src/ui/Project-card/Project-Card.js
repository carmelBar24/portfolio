import classes from "./Project-Card.module.css"
import {Card} from "@mui/material";
import {useState} from "react";
import Details from "../../components/Details/Details";

function ProjectCard({name,description,link,image,tech,id}) {
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
       <Card className={classes.project} hoverable={"true"} onClick={handleOpen}>
           <h2>{name}</h2>
           <img src={image} alt={"logo"}/>
       </Card>
    <Details handleClose={handleClose} open={open} project={{name,description,link,image,tech,id}}/></>
    );
}
export default ProjectCard;