import React from 'react'
import {signupGraduate} from '../services/auth'
import service from '../api/service'

class GraduateSignup extends React.Component{

  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    ImageUrl: '',
    catchphrase: '',
    emailAddress: '',
    bootCampName: '',
    bootCampCity: '',
    bootCampGraduation: '',
    skill: '',
    rating: '',
    industry: '',
    yearsInIndustry: '',
    languagesSpoken: [],
    currentlyLearning: [],
    myGif: '',
    githubUsername: '',
    githubProfile: '',
    linkedInProfile: '',
    mediumProfile: '',
    githubId: '',
    companyName: '',
    message: '',
    InputList: [{ skill: "", rating: "" }],
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
    // console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }


 // handle input change
 handleInputChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...this.state.InputList];
  list[index][name] = value;
  this.setState({
    InputList: list
  })
};
 
// handle click event of the Remove button
 handleRemoveClick = (index) => {
  const list = [...this.state.InputList];
  list.splice(index, 1);
  this.setState((state,props) => ({
    inputList: state.list
  }))
};
 


// handle click event of the Add button
 handleAddClick = () => {
  this.setState({
    InputList: [...this.state.InputList, { skill: "", rating: "" }]
  })
};

  handleSubmit = event => {
    event.preventDefault();
    const {
      username,
      password,
      firstName,
      lastName,
      imageUrl,
      catchphrase,
      emailAddress,
      bootCampName,
      bootCampCity,
      bootCampGraduation,
      skill,
      rating,
      industry,
      yearsInIndustry,
      languagesSpoken,
      currentlyLearning,
      myGif,
      githubUsername,
      githubProfile,
      linkedInProfile,
      mediumProfile,
      githubId,
      companyName,
      InputList,
    } = this.state;
    console.log(this.state)
    signupGraduate(
      username,
      password,
      firstName,
      lastName,
      imageUrl,
      catchphrase,
      emailAddress,
      bootCampName,
      bootCampCity,
      bootCampGraduation,
      skill,
      rating,
      industry,
      yearsInIndustry,
      languagesSpoken,
      currentlyLearning,
      myGif,
      githubUsername,
      githubProfile,
      linkedInProfile,
      mediumProfile,
      githubId,
      companyName,
      InputList
      )
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
             password: '',
             firstName: '',
             lastName: '',
             imageUrl: '',
             catchphrase: '',
             emailAddress: '',
             bootCampName: '',
             bootCampCity: '',
             bootCampGraduation: '',
             skills: [],
             industry: '',
             yearsInIndustry: '',
             languagesSpoken: [],
             currentlyLearning: [],
             myGif: '',
             githubUsername: '',
             githubProfile: '',
             linkedInProfile: '',
             mediumProfile: '',
             githubId: '',
             companyName: '',
             InputList: [{skill: '', rating: ''}]
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          console.log(user);
          this.setState({message: ''})
          this.props.setUser(user);
          this.props.history.push(`/graduates`)
        }
      })
  }
  render() {
 
    
    const renderNewForm = this.state.InputList.map((x, i) => {
      return (
        <div className="skill">
          <input
            name="skill"
 placeholder="Enter Your Skill"
            value={x.skill}
            onChange={e => this.handleInputChange(e, i)}
          />
          <input
            className="skill"
            name="rating"
 placeholder="Rate your Skill"
            value={x.rating}
            onChange={e => this.handleInputChange(e, i)}
          />
          <div className="btn-box">
            {this.state.InputList.length !== 1 && <button
              className="mr10"
              onClick={(i) => this.handleRemoveClick(i)}>Remove</button>}
            {this.state.InputList.length - 1 === i && <button onClick={this.handleAddClick}>Add another skill 
👨‍💻</button>}
          </div>
        </div>
      );
    })
    
  return (
    <div>
      <h1>Graduate Signup</h1>
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
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          /><br/>
          <label htmlFor="emailAddress">Email address: </label>
          <input
            type="text"
            name="emailAddress"
            value={this.state.emailAddress}
            onChange={this.handleChange}
            id="emailAddress"
          />
          <br/>
          <label htmlFor="imageUrl">Profile image: </label>
          <input
            type="file"
            name="imageUrl"
            onChange={e => this.handleFileUpload(e)}
            id="imageUrl"
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
          <label htmlFor="catchphrase">Catchphrase: </label>
          <input
            type="text"
            name="catchphrase"
            value={this.state.catchphrase}
            onChange={this.handleChange}
            id="catchphrase"
          />
          <br/>
          <label htmlFor="bootCampName">Bootcamp name: </label>
          <input
            type="text"
            name="bootCampName"
            value={this.state.bootCampName}
            onChange={this.handleChange}
            id="bootCampName"
          />
          <br/>
          <label htmlFor="bootCampCity">Bootcamp city: </label>
          <input
            type="text"
            name="bootCampCity"
            value={this.state.bootCampCity}
            onChange={this.handleChange}
            id="bootCampCity"
          />
          <br/>
          <label htmlFor="bootCampGraduation">Graduation date: </label>
          <input
            type="date"
            name="bootCampGraduation"
            value={this.state.bootCampGraduation}
            onChange={this.handleChange}
            id="bootCampGraduation"
          />
          <br/>
          <label htmlFor="skill">Skill: </label>
          <input
            type="text"
            name="skill"
            value={this.state.skills}
            onChange={this.handleChange}
            id="skill"
          />
          <br/>
          <label htmlFor="rating">Rating: </label>
          <select
            name="rating"
            value={this.state.rating}
            onChange={this.handleChange}
            id="rating">
            <option defaultValue="1">1 – noob</option>
            <option value="2">2</option>
            <option value="3">3 – intermediate</option>
            <option value="4">4</option>
            <option value="5">5 – ninja</option>
          </select>
          <br/>
          {renderNewForm}
          <br/>
          <button onClick={this.toggleAnoterSkillField}>Add another Skill 📊</button>
          <br/>
          <label htmlFor="currentlyLearning">Currently learning: </label>
          <input
            type="text"
            name="currentlyLearning"
            value={this.state.currentlyLearning}
            onChange={this.handleChange}
            id="currentlyLearning"
          />
          <br/>
          <label htmlFor="industry">Industry: </label>
          <input
            type="text"
            name="industry"
            value={this.state.industry}
            onChange={this.handleChange}
            id="industry"
          />
          <br/>
          <label htmlFor="yearsInIndustry">Years in industry: </label>
          <input
            type="number"
            name="yearsInIndustry"
            value={this.state.yearsInIndustry}
            onChange={this.handleChange}
            id="yearsInIndustry"
          />
          <br/>
          <label htmlFor="languagesSpoken">Languages spoken: </label>
          <input
            type="text"
            name="languagesSpoken"
            value={this.state.languagesSpoken}
            onChange={this.handleChange}
            id="languagesSpoken"
          />
          <br/>
          <label htmlFor="myGif">Me as a gif URL: </label>
          <input
            type="text"
            name="myGif"
            value={this.state.myGif}
            onChange={this.handleChange}
            id="myGif"
          />
          <br/>
          <label htmlFor="githubUsername">GitHub username: </label>
          <input
            type="text"
            name="githubUsername"
            value={this.state.githubUsername}
            onChange={this.handleChange}
            id="githubUsername"
          />
          <br/>
          <label htmlFor="githubProfile">GitHub profile URL: </label>
          <input
            type="text"
            name="githubProfile"
            value={this.state.githubProfile}
            onChange={this.handleChange}
            id="githubProfile"
          />
          <br/>
          <label htmlFor="linkedInProfile">LinkedIn profile URL: </label>
          <input
            type="text"
            name="linkedInProfile"
            value={this.state.linkedInProfile}
            onChange={this.handleChange}
            id="linkedInProfile"
          />
          <br/>
          <label htmlFor="mediumProfile">Medium profile URL: </label>
          <input
            type="text"
            name="mediumProfile"
            value={this.state.mediumProfile}
            onChange={this.handleChange}
            id="mediumProfile"
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

export default GraduateSignup;