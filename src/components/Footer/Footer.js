import classes from "./Footer.module.css"
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
function Footer() {
    return(
        <div className={classes.Footer}>
         <div>Designed and Developed by Carmel Bar</div>
         <div>Copyright © 2023</div>
            <div>
                <a href={"https://www.linkedin.com/in/carmelbar/"}><LinkedIn className={classes.Icons}/></a>
                <a href={"https://github.com/carmelBar24"}><GitHub className={classes.Icons}/></a>
            </div>
        </div>
    );
}

export default Footer;