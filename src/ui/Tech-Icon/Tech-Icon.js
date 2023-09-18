import classes from "./Tech-Icon.module.css"
function TechIcon({icon})
{
    return (
        <div className={classes.Icon}>
            {icon}
        </div>
    );
}

export default TechIcon;