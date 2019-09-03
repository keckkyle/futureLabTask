import React from 'react';
import './button.css'

const arrow = String.fromCharCode(8594)

const Button = (props) => (
    <div className="arrow-button" style={{backgroundColor: props.color}} onClick={props.onClick}>
        <div className='btn-text'>{props.children}</div>
        <div className='arrow'>{arrow}</div>
    </div>
)

export default Button
