import {Modal} from "@mui/material";
import classes from "./Details.module.css"

function Details({open,handleClose,project}) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
           <div className={classes.modal}>
               <h1>{project.name}</h1>
               <img src={project.image}/>
               <p>{project.description}</p>
               <a href={project.link}>Github</a>
           </div>
        </Modal>
    );
}

export default Details;