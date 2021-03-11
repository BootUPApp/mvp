import React from 'react';
import axios from 'axios';

class GraduateEdit extends React.Component{

  state = {
    username: this.props.user.username,
    password: this.props.user.password,
    firstname: this.props.user.firstName,
    lastname: this.props.user.lastName,
    catchphrase: this.props.user.catchphrase,
    emailaddress: this.props.user.emailAddress,
    password: this.props.user.password,
    bootCampName: this.props.user.bootCampName,
    bootCampCity: this.props.user.bootCampCity,
    bootCampGraduation: this.props.user,
    InputList: this.props.user.InputList,
    industry: this.props.user.industry,
    yearsInIndustry: this.props.user.yearsInIndustry,
    languagesSpoken: this.props.user.languagesSpoken,
    currentlyLearning: this.props.user.currentlyLearning,
    githubProfile: this.props.user.githubProfile,
    linkedInProfile: this.props.user.linkedInProfile,
    companyname:this.props.user.companyname,
    message: '',
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
    username,
    emailaddress,
    catchphrase,
    InputList,
    githubProfile,
    linkedInProfile,
    currentlyLearning
    ) => {
    const id = this.props.match.params.id
    return axios.put(`/api/graduates/${id}`, {
    firstname,
    lastname,
    username,
    emailaddress,
    catchphrase,
    InputList,
    githubProfile,
    linkedInProfile,
    currentlyLearning
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
      username,
      emailaddress,
      catchphrase,
      InputList,
      githubProfile,
      linkedInProfile,
      currentlyLearning 
       } = this.state;
    this.updateRecruiter(
      firstname,
      lastname,
      username,
      emailaddress,
      catchphrase,
      InputList,
      githubProfile,
      linkedInProfile,
      currentlyLearning
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

          this.props.setUser(user);
          this.props.history.push(`/recruiter/dashboard/${user._id}`)
        }
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

  render() {

    const renderNewForm = this.state.InputList.map((x, i) => {
      return (
        <div className="skill" key={this.props.user._id}>
          <input
            name="skill"
  placeholder="Enter Your Skill"
            value={x.skill}
            onChange={e => this.handleInputChange(e, i)}
          />
          <input
            className="skill"
            name="rating"
  placeholder="Rate your Skill 1-5"
            value={x.rating}
            onChange={e => this.handleInputChange(e, i)}
          />
          <div className="btn-box">
            {this.state.InputList.length !== 1 &&  <button className="mr10" onClick={(i) => this.handleRemoveClick(i)}>Remove</button>}
            {this.state.InputList.length - 1 === i && <button onClick={this.handleAddClick}>Add another skill 👨‍💻</button>}
          </div>
        </div>
      );
    })

    // console.log(this.props.user)
    return (
      <div className='graduateProfile'>
        <h1>Update {this.props.user.username}'s profile, </h1>
      
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
            id="firstname"
          />
          <br/>
    <label htmlFor="lastname">Last name: </label>
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
            id="lastname"
          />
          <br/>
    <label htmlFor="InputList">Update your skills: </label>
          {renderNewForm}
    
          <label htmlFor="currentlyLearning">Currently learning: </label>
          <input
            type="text"
            name="currentlyLearning"
            value={this.state.currentlyLearning}
            onChange={this.handleChange}
            id="currentlyLearning"
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
          <label htmlFor="emailaddress">Email: </label>
          <input
            type="text"
            name="emailaddress"
            value={this.state.emailaddress}
            onChange={this.handleChange}
            id="emailaddress"
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
          <label htmlFor="githubProfile">Github Profile: </label>
          <input
            type="text"
            name="githubProfile"
            value={this.state.githubProfile}
            onChange={this.handleChange}
            id="githubProfile"
          />
          <br/>
          <label htmlFor="linkedInProfile">LinkedIn Profile: </label>
          <input
            type="text"
            name="linkedInProfile"
            value={this.state.linkedInProfile}
            onChange={this.handleChange}
            id="linkedInProfile"
          />
          <br/>
          {/* <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
          />
          <br/> */}
          <button type="submit">Submit changes</button>
          {this.state.message && (
          <h3>{this.state.message}</h3>
        )}
      </form>


        <button onClick={this.deleteUser}>Delete {this.props.user.username} profile</button>
      </div>
    )
  }
}

export default GraduateEdit;