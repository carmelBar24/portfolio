import classes from "./Header.module.css"
import { HashLink as Link} from "react-router-hash-link";
function Header() {
    return(

        <nav className={classes.Header}>
            <span>Carmel Bar</span>
            <ul>
                <li><Link to={"#About"}>About</Link></li>
                <li><Link to={"#Projects"}>Projects</Link></li>
                <li><Link to={"#Skills"}>Skills</Link></li>
                <li><Link to={"#Experience"}>Experience</Link></li>
                <li><Link to={"#Contact"}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Header;