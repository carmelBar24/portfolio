import {VerticalTimeline ,VerticalTimelineElement}  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

function Experience()
{
    return(
        <VerticalTimeline>
            <VerticalTimelineElement
                contentStyle={{ background: '#7bdff2', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid   #7bdff2' }}
                date="present"
                iconStyle={{ background:  '#7bdff2', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Head of the guidance team</h3>
                <h5 className="vertical-timeline-element-subtitle">Alice Code</h5>
                <p>
                    Management team of instructors in an association for the advancement of women and girls in scientific professions
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2022 - 2023"
                iconStyle={{ background:  '#7bdff2', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Instructor</h3>
                <h5 className="vertical-timeline-element-subtitle">Alice Code</h5>
                <p>
                    Instructed and mentored girls in web development, focusing on HTML,CSS, and JavaScript technologies
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2022"
                iconStyle={{ background:  '#7bdff2', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Developer</h3>
                <h5 className="vertical-timeline-element-subtitle">Tori App</h5>
                <p>
                    advanced application for managing medical appointments.
                    build using flutter&firebase
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: '#f7d6e0', color: '#fff' }}
            />
        </VerticalTimeline>
    );
}

export default Experience;