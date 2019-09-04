import React from 'react';
import './mentorCard.css'
import Button from './button'

class MentorCard extends React.Component{
  state = {}

  showProfile = (name,img,occ,org) => {
    this.props.updateInfo(name,img,occ,org)
    this.props.hideHomepage()
  }

  render(){
    const { img, name, occupation, organization, online } = this.props
    return(
      <div className='mentor-card'>
      <div className='card'>
          <div 
            className='circle'
            style={{backgroundImage: `url(${img})`}}
          >
          </div>
          <div>
              <h3 
                onClick={()=> (this.showProfile(name,img,occupation,organization))}
                className='mentor-name'
              >{name}</h3>
              <p>{occupation}</p>
              <p>{organization}</p>
          </div>
          <div className='last-session'>
              <p>Last session</p>
              <p>{online}</p>
          </div>
          <Button 
            color="#428aca"
          >Create appointment</Button>
      </div>
      </div>
    )
  }
}

export default MentorCard