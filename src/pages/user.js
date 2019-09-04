import React from 'react';
import Homepage from './homepage'
import ProfilePage from './profilepage'
import Nav from '../components/navigation'

class User extends React.Component {
  state ={
    homepage: true,
  }

  hideHomepage = () => (
    this.setState({
      homepage: false,
    })
  )

  showHomepage = () => (
    this.setState({
      homepage: true,
    })
  )

  render(){
    return(
      <>
      {this.state.homepage ?
        <Homepage hideHomepage={this.hideHomepage}/>
        :
        <ProfilePage showHomepage={this.showHomepage}/>
      }
      <Nav 
        homepage={this.state.homepage}
        showHomepage={this.showHomepage}
      />
      </>
    )
  }
}

export default User;
