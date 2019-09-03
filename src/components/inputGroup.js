import React from 'react';
import './inputGroup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'

const eye = <FontAwesomeIcon icon={faEye} />

class InputGroup extends React.Component{
  state = {
    show: false,
  }

  toggleShow = () => {
      this.setState({
          show: !this.state.show,
      })
  }

  handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.props.inputChange(name,value)
  }

  render(){
      const { children, viewToggle, type, name, validate } = this.props
    return(
      <div className='input-group'>
        <label>
            {children}
            {viewToggle ? 
              <p onClick={this.toggleShow}className="show">
                {eye} Show
              </p> 
              : 
              <></>
            }
        </label>
        <input name={name} type={this.state.show ? 'text' : type } onChange={this.handleInputChange}/>
        {validate ? <small>{validate}</small>:
        <></>}
      </div> 
    )
  }
}



export default InputGroup