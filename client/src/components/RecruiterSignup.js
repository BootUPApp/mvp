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
      <div className="recWrapper">
      <div className="recSignUpFrame">
        <h1 style={{color: 'white'}}>Recruiter Signup</h1>
      
        <form onSubmit={this.handleSubmit}>
        <span className="input input--chisato">
            <input
            className="input__field input__field--chisato"
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
              id="firstname"
            />
            <label htmlFor="firstname" className="input__label input__label--chisato"><span className="input__label-content input__label-content--chisato">Firstname</span> </label>
      </span>

      <span className="input input--chisato">

            <input
              className="input__field input__field--chisato"
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
              id="lastname"
            />
            <label htmlFor="lastname" className="input__label input__label--chisato"><span className="input__label-content input__label-content--chisato">Lastname</span></label>
            </span>
            <span className="input input--chisato">
        
            <label htmlFor="imageUrl"><span className="input__label-content input__label-content--chisato">Image</span></label>
          <input
          className="file"
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={e => this.handleFileUpload(e)}
          />
          
            </span>
            <br/>
            <span className="input input--chisato">
      
            <input
             className="input__field input__field--chisato"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
            />
              <label htmlFor="username" className="input__label input__label--chisato"><span className="input__label-content input__label-content--chisato">Username</span> </label>
               </span>
         

            <span className="input input--chisato">
            
            <input
            className="input__field input__field--chisato"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
            />
            <label htmlFor="password" className="input__label input__label--chisato"><span className="input__label-content input__label-content--chisato">Password</span> </label>
     </span>

     <span className="input input--chisato">

          <input
          className="input__field input__field--chisato"
            type="companyname"
            name="companyname"
            value={this.state.companyname}
            onChange={this.handleChange}
            id="companyname"/>
            <label htmlFor="companyname" className="input__label input__label--chisato"><span className="input__label-content input__label-content--chisato">Company Name</span></label>
                 </span>
            <br/>
            <button style={{border: 'none', borderRadius: '5px', width: '40%', marginTop: '50px', backgroundColor: '#3100f9', position: 'relative', left: '-17px'}} type="submit"><h2 style={{color: 'white'}}>Sign Up</h2></button>
            {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
          </form>
        </div>
        <div className="recSignUpPic"></div>
      </div>
    )
  }
}

export default RecruiterSignup;
