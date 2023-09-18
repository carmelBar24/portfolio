import {VerticalTimeline}  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import TimeLineElement from "../../ui/TimeLineElement/TimeLineElement";

function Experience()
{
    return(
        <div id={"Experience"}>
        <VerticalTimeline>
            <TimeLineElement style={"main"} data={"present"} location={"Alice Code"} title={"Head of the guidance team"} description={"Management team of instructors in an association for the advancement of women and girls in scientific professions"}/>
            <TimeLineElement style={"sec"} data={"2022 - 2023"} location={"Alice Code"} title={"Instructor"} description={"Instructed and mentored girls in web development, focusing on HTML,CSS, and JavaScript technologies"}/>
            <TimeLineElement style={"sec"} data={"2022"} location={"Tori App"} title={"Developer"} description={"advanced application for managing medical appointments.build using flutter&firebase"}/>
            <TimeLineElement/>
        </VerticalTimeline>
        </div>
    );
}

export default Experience;