import React from 'react';

const HPSection = (props) => (
  <div className='section'>
      <div className='section-head'>
        <h2>{props.head}</h2>
        <p className='headSubtext'>{props.sub}</p>
      </div>
      {props.children}
  </div>
)

export default HPSection