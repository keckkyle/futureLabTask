import React from 'react';
import './mentorCard.css'
import Button from './button'

const MentorCard = (props) => (
    <div className='mentor-card'>
    <div className='card'>
        <div 
          className='circle'
          style={{backgroundImage: `url(${props.img})`}}
        >
        </div>
        <div>
            <h3 className='mentor-name'>{props.name}</h3>
            <p>{props.occupation}</p>
            <p>{props.organization}</p>
        </div>
        <div className='last-session'>
            <p>Last session</p>
            <p>{props.online}</p>
        </div>
        <Button 
          color="#428aca"
        >Create appointment</Button>
    </div>
    </div>
)

export default MentorCard