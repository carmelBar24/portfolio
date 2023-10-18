import {VerticalTimelineElement}  from 'react-vertical-timeline-component'

function TimeLineElement({title,location,description,style,data})
{
    if(style===undefined)
    {
        return <VerticalTimelineElement
            iconStyle={{ background: '#f7d6e0', color: '#fff' }}
        />
    }
    return(
        <VerticalTimelineElement
            contentStyle={style==="main"?{ background: '#7bdff2', color: '#fff'}:{}}
            contentArrowStyle={style==="main"? {borderRight: '7px solid   #7bdff2' }:{}}
            date={data}
            iconStyle={{ background:'#7bdff2', color: '#fff'}}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
           <h5 className="vertical-timeline-element-subtitle">{location}</h5>
         <p>
                {description}
            </p>
        </VerticalTimelineElement>
    );
}

export default TimeLineElement;