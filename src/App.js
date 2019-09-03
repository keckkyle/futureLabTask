import React from 'react';
import './App.css';
import Login from './pages/login'
import HomePage from './pages/homepage'

class App extends React.Component {
  state ={
    currentUser: 'keckkyle@gmail.com',
  }

  updateUser = (user) => {
    this.setState({
      currentUser: user,
    })
  }

  render(){
    return(
      <>
      {!this.state.currentUser ?
        <Login updateUser={this.updateUser}/>
        :
        <HomePage />
      }
      </>
    )
  }
}

export default App;
