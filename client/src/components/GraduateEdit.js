import React from 'react';
import axios from 'axios';
// import { deleteUser } from '../services/auth'

class GraduateEdit extends React.Component{

  state = {
    imageUrl: '',
    username: '',
    password: '',
    message: '',
    companyname:'',
    firstname:'',
    lastname: ''
  }

  // handleDelete = event => {
  //   event.preventDefault();
  //   deleteUser()
  // }

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
        
        <button onClick={this.handleDelete}>Delete this profile</button>
      </div>
    )
  }
}

export default GraduateEdit;