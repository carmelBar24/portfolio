import classes from "./Contact.module.css"
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
function Contact()
{
    return(
        <div className={classes.Contact} id={"Contact"}>
            <span>FIND ME ON</span>
            <b>Feel free to connect with me</b>
            <mark style={{backgroundColor:"#7bdff2" ,fontSize:"18px", borderRadius:"15px", padding:"5px"}}>Carmelbar9@gmail.com</mark>
            <div className={classes.Icons}>
            <a href={"https://www.linkedin.com/in/carmelbar/"}><LinkedIn style={{fontSize:"30px"}}/></a>
            <a href={"https://github.com/carmelBar24"}><GitHub style={{fontSize:"30px"}}/></a>
            </div>
        </div>
    );
}

export default Contact;