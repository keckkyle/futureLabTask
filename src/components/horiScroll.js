import React from 'react'
import './horiScroll.css'

class HoriScroll extends React.Component {
  state = {
      cards: this.props.children,
      scrollBarPosition: '0%',
  }
  horiScroll = React.createRef()

  handleScroll = (e) => {
      const width = e.target.scrollWidth;
      const position = e.target.scrollLeft;
      const scrollPercent = Math.floor((position/(width-window.innerWidth)) * 100)
      this.setState({
          scrollBarPosition: `${scrollPercent}%`,
      })
  }

  render(){
    return(
      <div>
        <div 
          ref={this.horiScroll} 
          onScroll={this.handleScroll}
          className='horizontal-scroll-box'
        >
          {this.props.children}
        </div>
        <div className='scroll-bar'>
            <div className="scroll-dots">
                {this.state.cards.map((value, index)=>
                  <div className='dot' key={index}></div>
                )}
            </div>
              <div 
                className="bar"
                style={{width: this.state.scrollBarPosition}}
              ></div>
        </div>
      </div>
    )
  }
}

export default HoriScroll