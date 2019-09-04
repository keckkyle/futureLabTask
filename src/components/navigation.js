import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendar, faBell, faCog, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const home = <FontAwesomeIcon icon={faHome} />
const calendar = <FontAwesomeIcon icon={faCalendar} />
const bell = <FontAwesomeIcon icon={faBell} />
const cog = <FontAwesomeIcon icon={faCog} />
const paper = <FontAwesomeIcon icon={faNewspaper} />

const Nav = (props) => (
    <div className='nav-bar'>
        <div 
          className='nav-item'
          style={props.homepage ? {backgroundColor: '#dfdfdf'} : {}}
          onClick={props.showHomepage}
        >
        <p>{home}</p>
        </div>
        <div className='nav-item'>
        <p>{calendar}</p>
        </div>
        <div className='nav-item'>
        <p>{paper}</p>
        </div>
        <div className='nav-item'>
        <p>{bell}</p>
        </div>
        <div className='nav-item'>
        <p>{cog}</p>
        </div>
    </div>
)

export default Nav