import {Modal} from "@mui/material";
import classes from "./Details.module.css"
import GitHub from '@mui/icons-material/GitHub';

function Details({open,handleClose,project}) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
           <div className={classes.modal}>
               <div className={classes.row}>
               <h1>{project.name}</h1>
               <a href={project.link}><GitHub style={{width:"40px",height:"40px"}}/></a>
               </div>
               <img src={project.image}/>
               <p style={{ whiteSpace: "pre-wrap"}}>{project.description}</p>
               <ul>{project.tech.map((t)=><li key={project.id}>{t}</li>)}</ul>
           </div>
        </Modal>
    );
}

export default Details;