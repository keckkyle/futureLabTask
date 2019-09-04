import React from 'react';
import './profilepage.css'
import man1 from '../images/man1.jpg'

const arrow = String.fromCharCode(8592)

const ProfilePage = (props) => (
  <div className='page'>
    <div className='top-bar'>
      <div onClick={props.showHomepage}>{arrow}</div>
    </div>
    <div className='user-container'>
      <div className='user'>
        <div 
          className='user-image'
          style={{backgroundImage: `url(${man1})`}}
        >
        </div>
        <div className='user-details'>
          <h3>Kyle Carpenter</h3>
          <p>Student</p>
          <p>INIT College</p>
        </div>
      </div>
    </div>
    <div className='user-bio'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quas. Sed temporibus sint impedit eius neque quo, asperiores dolorum quia aperiam recusandae atque beatae quibusdam ut reprehenderit debitis at dignissimos repudiandae quidem, obcaecati libero.</p>
    </div>
    <div className='user-skills'>
      <p className='skill-name'>Mathmatics</p>
      <div 
        className="skill-level"
        style={{width: '100%', backgroundColor: 'green'}}
      ></div>
      <p className='skill-name'>Science</p>
      <div 
        className="skill-level"
        style={{width: '60%', backgroundColor: '#428aca'}}
      ></div>
      <p className='skill-name'>English</p>
      <div 
        className="skill-level"
        style={{width: '75%', backgroundColor: 'grey'}}
      ></div>
    </div>
  </div>
)

export default ProfilePage