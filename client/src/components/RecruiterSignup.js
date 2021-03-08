import React from 'react';
import {signupRecruiter} from '../services/auth'

class RecruiterSignup extends React.Component{

  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    companyName: '',
    profileImage: '',
    username: '',
    password: '',
    message: ''
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
      firstName,
      lastName,
      emailAddress,
      companyName,
      profileImage,
      username,
      password } = this.state;
    signupRecruiter(
      firstName,
      lastName,
      emailAddress,
      companyName,
      profileImage,
      username,
      password)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            firstName: '',
            lastName: '',
            emailAddress: '',
            companyName: '',
            profileImage: '',
            username: '',
            password: ''
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          
          console.log(user);
          this.setState({message: ''})

          console.log(user)
          this.props.setUser(user);
          this.props.history.push("/")
        }
      })
  }

  render() {
    return (
      <div>
        <h1>Recruiter Signup</h1>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">First name: </label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              id="firstName"
            />
            <br/>
            <label htmlFor="lastName">Last name: </label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              id="lastName"
            />
            <br/>
            <label htmlFor="emailAddress">Email address: </label>
            <input
              type="text"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              id="emailAddress"
            />
            <br/>
            <label htmlFor="companyName">Company name: </label>
            <input
              type="text"
              name="companyName"
              value={this.state.companyName}
              onChange={this.handleChange}
              id="companyName"
            />
            <br/>
            <label htmlFor="profileImage">Profile image: </label>
            <input
              type="file"
              name="profileImage"
              value={this.state.profileImage}
              onChange={this.handleChange}
              id="profileImage"
            />
            <br/>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
            />
            <br/>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
            />
            <br/>
            <button type="submit">Sign Up</button>
            {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
      </div>
    )
  }
}

export default RecruiterSignup;
