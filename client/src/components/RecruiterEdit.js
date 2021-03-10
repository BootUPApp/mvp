import React from 'react';
import axios from 'axios';
import { deleteUser } from '../services/auth'

class RecruiterEdit extends React.Component{

  state = {
    imageUrl: '',
    username: '',
    password: '',
    message: '',
    companyname:'',
    firstname:'',
    lastname: ''
  }

  deleteUser = (props) => {
    const id = this.props.match.params.id
    axios.delete(`/api/auth/user/${id}`)
      .then(() => {
        // we want to redirect to the home page
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
      // .then(() => {
      //   window.location.reload()
      // })
  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        
        <button onClick={this.deleteUser}>Delete this profile</button>
      </div>
    )
  }
}

export default RecruiterEdit;