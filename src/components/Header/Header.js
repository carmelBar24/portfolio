import classes from "./Header.module.css"
function Header() {
    return(
        <nav className={classes.Header}>
            <span>Carmel Bar</span>
            <ul >
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Header;