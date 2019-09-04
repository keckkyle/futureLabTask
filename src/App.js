import React from 'react';
import './App.css';
import Login from './pages/login'
import User from './pages/user'

class App extends React.Component {
  state ={
    currentUser: "hello",
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
        <User />
      }
      </>
    )
  }
}

export default App;
