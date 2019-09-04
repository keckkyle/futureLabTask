import React from 'react';
import Homepage from './homepage'
import ProfilePage from './profilepage'
import Nav from '../components/navigation'

class User extends React.Component {
  state ={
    homepage: true,
    userName: '',
    userImage: '',
    userOccupation: '',
    userOrganization: '',
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

  updateUserInformation = (name, img, occ, org) => (
    this.setState({
      userName: name,
      userImage: img,
      userOccupation: occ,
      userOrganization: org,
    })
  )

  render(){
    return(
      <>
      {this.state.homepage ?
        <Homepage 
          hideHomepage={this.hideHomepage}
          updateInfo = {this.updateUserInformation}
        />
        :
        <ProfilePage 
          showHomepage={this.showHomepage}
          img = {this.state.userImage}
          name = {this.state.userName}
          occ = {this.state.userOccupation}
          org = {this.state.userOrganization}
        />
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
