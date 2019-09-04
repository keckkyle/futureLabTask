import React from 'react';
import logo from '../logo.svg';
import './login.css'
import Button from '../components/button'
import InputGroup from '../components/inputGroup'

class Login extends React.Component {
  state ={
      email: '',
      password: '',
      invalidEmail: '',
      invalidPassword: '',
  }

  handleInputChange = (name, value) => {
    this.setState({
        [name]: value,
    })
  }

  validateEmail = () => {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(emailRegEx.test(this.state.email)){
      this.setState({
          invalidEmail: '',
      })
      return true
    } else {
      this.setState({
        invalidEmail: 'Please enter a valid email.'
      })
      return false
    }
  }

  validatePassword = () => {
      if(this.state.password.length >= 1) {
          this.setState({
            invalidPassword: '',
          })
          return true
      } else {
          this.setState({
            invalidPassword: 'Please enter a password.'
          })
          return false
      }
  }

  onLogin = () => {
      if(this.validateEmail() && this.validatePassword()){
        this.props.updateUser(this.state.email)
      }
  }

  render(){
      return(
        <div className='page'>
          <div className='login-content'>
            <header>
                <img className='logo' src={logo} alt='logo' />
                <h2>Welcome Back</h2>
                <p className="headSubtext">Sign in to continue</p>
            </header>
            <InputGroup 
              type='email' 
              id="email" 
              name="email" 
              validate={this.state.invalidEmail} 
              inputChange={this.handleInputChange}
            >
              Email
            </InputGroup>
            <InputGroup 
              type='password' 
              id="password" 
              name="password" 
              validate={this.state.invalidPassword} viewToggle 
              inputChange={this.handleInputChange}
            >
              Password
            </InputGroup>
            <Button 
              onClick={this.onLogin} 
              color="#428aca"
            >
              Login
            </Button>
            <a href="#">Forgot password</a>
            <div className="new-user">
                <p>Don't have an account?</p>
                <a href="#">Sign up for an account.</a>
            </div>
          </div>
        </div>
      )
  }
}

export default Login;