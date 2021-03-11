import React from 'react';
import axios from 'axios';

class RecruiterEdit extends React.Component{

  state = {
    username: this.props.user.username,
    password: this.props.user.password,
    message: '',
    companyname:this.props.user.companyname,
    firstname:this.props.user.firstName,
    lastname: this.props.user.lastName
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

  updateRecruiter = (
    firstname,
    lastname,
    companyname,
    username) => {
    const id = this.props.match.params.id
    return axios.put(`/api/recruiter/${id}`, {
    firstname,
    lastname,
    companyname,
    username,
    imageUrl: this.props.user.imageUrl
  }).then(response => {
  return response.data
  }).catch(error => {
  return error
  })
  }
    

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      companyname,
      username,
      password 
       } = this.state;
    this.updateRecruiter(
      firstname,
      lastname,
      companyname,
      username,
      password
      )
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          
          // console.log(user);
          this.setState({message: ''})

          // this.props.setUser(user);
          this.props.history.push(`/recruiter/dashboard/${user._id}`)
        }
      })
  }

  render() {
    console.log(this.props.user)
    return (
      <div>
        <h1>Update {this.props.user.username}'s profile, </h1>
      
      <form onSubmit={this.handleSubmit}>
      <span className="input input--hoshi">
          <input
          className="input__field input__field--hoshi"
            type="text"
            name="firstname"
            // defaultValue={this.props.user.firstName}
            value={this.state.firstname}
            onChange={this.handleChange}
            id="firstname"
          />
          <label htmlFor="firstname" className="input__label input__label--hoshi"><span className="input__label-content input__label-content--hoshi">Firstname</span> </label>
    </span>
    <label htmlFor="lastname">lastname: </label>
          <input
            type="text"
            name="lastname"
            // defaultValue={this.props.user.lastName}
            value={this.state.lastname}
            onChange={this.handleChange}
            id="lastname"
          />
          <br/>

    <label htmlFor="companyname">Company name: </label>
        <input
          type="companyname"
          name="companyname"
          // defaultValue={this.props.user.companyname}
          value={this.state.companyname}
          onChange={this.handleChange}
          id="companyname"/>
          <br/>
    <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            // defaultValue={this.props.user.lastName}
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          />
          <br/>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            // defaultValue={this.props.user.lastName}
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
          />
          <br/>
          <button type="submit">Submit changes</button>
          {this.state.message && (
          <h3>{this.state.message}</h3>
        )}
      </form>


        <button onClick={this.deleteUser}>Delete {this.props.user.username}'s profile</button>
      </div>
    )
  }
}

export default RecruiterEdit;