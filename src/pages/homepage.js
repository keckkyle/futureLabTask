import React from 'react';
import './homepage.css'

class HomePage extends React.Component {
  state = {}

  render(){
    return(
      <div className='page'>
        <section>
          <h2>My mentors</h2>
          <p className='headSubtext'>Your recent mentors</p>
        </section>
      </div>
    )
  }
}

export default HomePage