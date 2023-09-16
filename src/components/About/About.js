
import classes from "./About.module.css"
import {Card} from "@mui/material";

function About() {

    return(
        <div className={classes.About}>
        <h2>LET ME <span>INTRODUCE</span> MYSELF</h2>
        <Card variant={"outlined"} className={classes.card}>
            👋 Hi, I'm Carmel Bar, a passionate programmer in search of my first role.
            <br/>
            I enjoy creating with Node.js, React, Flutter and C#.
            <br/>
            My background includes hands-on team leadership and a versatile tech skills set.
            <br/>
            Excited to embark on this journey! 🚀
        </Card>
        </div>
    );
}

export default About;