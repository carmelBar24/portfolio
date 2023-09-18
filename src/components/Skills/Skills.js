import classes from "./Skills.module.css"
import { BiLogoFlutter,BiLogoReact,BiLogoJavascript,BiLogoCPlusPlus,BiLogoFirebase ,BiLogoMongodb} from 'react-icons/bi';
import {SiCsharp,SiMysql} from 'react-icons/si';
import {FaNode,FaHtml5,FaCss3Alt} from 'react-icons/fa';
import TechIcon from "../../ui/Tech-Icon/Tech-Icon";
function Skills(){
    return(
        <div className={classes.Skills} id={"Skills"}>
       <span>Skills</span>
         <div className={classes.Icons}>
             <TechIcon icon={<BiLogoFlutter/>}/>
             <TechIcon icon={<BiLogoReact/>}/>
             <TechIcon icon={<BiLogoJavascript/>}/>
             <TechIcon icon={<FaHtml5/>}/>
             <TechIcon icon={<FaCss3Alt/>}/>
             <TechIcon icon={ <FaNode/>}/>
             <TechIcon icon={<SiCsharp/>}/>
             <TechIcon icon={<BiLogoCPlusPlus/>}/>
             <TechIcon icon={<BiLogoFirebase/>}/>
             <TechIcon icon={ <BiLogoMongodb/>}/>
             <TechIcon icon={<SiMysql/>}/>
         </div>
        </div>

    );
}

export default Skills;