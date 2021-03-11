import React from 'react';
import {signupRecruiter} from '../services/auth'
import service from '../api/service';

class RecruiterSignup extends React.Component{

  state = {
    imageUrl: '',
    username: '',
    password: '',
    message: '',
    companyname:'',
    firstname:'',
    lastname: ''
  }


  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imageUrl', e.target.files[0]);
 
    service
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
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
      firstname,
      lastname,
      companyname,
      imageUrl,
      username,
      password, 
       } = this.state;
    signupRecruiter(
      firstname,
      lastname,
      companyname,
      imageUrl,
      username,
      password,
      )
      .then(user => {
        if (user.message) {
          this.setState({
            firstname:'',
            message: user.message,
            imageUrl: '',
            username: '',
            password: '',
            companyname: '',
            lastname: ''
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          
          console.log(user);
          this.setState({message: ''})

          this.props.setUser(user);
          this.props.history.push(`/graduate/dashboard/${user._id}`)
        }
      })
  }

  render() {
    console.log()
    return (
      <div className="recSignUpFrame">
        <h1>Recruiter Signup</h1>
      
        <form onSubmit={this.handleSubmit}>
        <span className="input input--hoshi">
            <input
            className="input__field input__field--hoshi"
              type="text"
              name="firstname"
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
              value={this.state.lastname}
              onChange={this.handleChange}
              id="lastname"
            />
        <label htmlFor="imageUrl">Image: </label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={e => this.handleFileUpload(e)}
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

<label htmlFor="companyname">Company name: </label>
          <input
            type="companyname"
            name="companyname"
            value={this.state.companyname}
            onChange={this.handleChange}
            id="companyname"/>
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
