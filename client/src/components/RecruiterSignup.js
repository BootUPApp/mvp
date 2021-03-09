import React from 'react';
import {signupRecruiter} from '../services/auth'
import axios from 'axios';

class RecruiterSignup extends React.Component{

  state = {
    imgPath: '',
    username: '',
    password: '',
    message: ''
  }


 handleFileUpload = (event) => {

  console.log('Target File is', event.target.files[0])

  const handleFileData = new FormData()
  handleFileData.append('photo', event.target.files[0])

  const options = {
    method: 'POST',
    body: handleFileData,
  };

  return fetch('https://api.Cloudinary.com/v1_1/detiwkwhu/image/upload', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err));



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
      username,
      password, imgPath } = this.state;
    signupRecruiter(
      username,
      password,
      imgPath)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            imgPath: '',
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
        <label htmlFor="imgPath">Image: </label>
          <input
            type="file"
            id="imgPath"
            name="imgPath"
            onChange= {event => this.handleFileUpload(event)}
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
