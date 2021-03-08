import React from 'react'
import {loginRecruiter} from '../services/auth';


class RecruiterLogin extends React.Component {

  state = {
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
    const { username, password } = this.state;
    loginRecruiter(username, password)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            password: ''
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          console.log(user)
          this.props.setUser(user);
          this.props.history.push("/recruiter")
        }
      })
  }

  render(){

  return (
    <div>
      <h1>Recruiter Login</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"/>
          <br/>
        <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"/>
          <br/>
          <button type="submit">Log in</button>
      </form>
    </div>
    )
  }
}

export default RecruiterLogin;