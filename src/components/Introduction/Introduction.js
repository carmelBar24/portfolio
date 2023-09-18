import classes from "./Introduction.module.css"
import {useTypeWriter} from "@vegadev/react-type-writer";
function Introduction() {
    const text = useTypeWriter({
        text: [
            "Software Developer",
            "MERN Stack Developer",
            "Java Script Instructor",
        ],
        infiniteLoop: true,
        blinker: "_",
        delay: 3000,
        blinkerDelay:100,
    });
    return (
        <div className={classes.introduction}>
            <div className={classes.content}>
                <span>Hello,</span>
                <span>I am Carmel Bar</span>
                <span style={{fontSize:"20px"}}>{text}</span>
                <button className={classes.button}>See My CV</button>
            </div>
            <img src='/assets/images/logo.jpg'  height={"500px"} width={"350px"} alt={"logo"}/>
        </div>
    );
}

export default Introduction;