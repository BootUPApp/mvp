import React from 'react';
import {signupRecruiter} from '../services/auth'
import service from '../api/service';

class RecruiterSignup extends React.Component{

  state = {
    imgPath: '',
    username: '',
    password: '',
    message: ''
  }


  handleImageUpload = () => {

    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
    // replace this with your upload preset name
    formData.append('imgPath', 'qv5rfbwg');
    const options = {
      method: 'POST',
      body: formData,
    };
    
    // replace cloudname with your Cloudinary cloud_name
    return fetch('https://api.Cloudinary.com/v1_1/detiwkwhu/image/upload', options)
      .then(res => res.json())
      .then(res => {
        this.setState({
          imgPath: res.secure_url,
        })
      })
      .catch(err => console.log(err));
  };

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
            onChange={this.handleFileUpload}
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
