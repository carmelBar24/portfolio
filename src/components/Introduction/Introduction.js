import classes from "./Introduction.module.css"
function Introduction() {
    return (
        <div className={classes.introduction}>
            <div className={classes.content}>
                <span>Hello,</span>
                <span>I am Carmel Bar</span>
                <button className={classes.button}>See My CV</button>
            </div>
            <img src='/assets/images/logo.jpg'  height={"500px"} width={"350px"} alt={"logo"}/>
        </div>
    );
}

export default Introduction;