import React from 'react'

export default function GraduateSignup() {
  return (
    <div>
      <h1>Graduate Signup</h1>
      <form >
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            name="firstName"
            // value={this.state.firstName}
            // onChange={this.handleChange}
            id="firstName"
          />
          <br/>
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            name="lastName"
            // value={this.state.lastName}
            // onChange={this.handleChange}
            id="lastName"
          />
          <br/>
          <label htmlFor="userName">Username: </label>
          <input
            type="text"
            name="userName"
            // value={this.state.userName}
            // onChange={this.handleChange}
            id="userName"
          /><br/>
          <label htmlFor="emailAddress">Email address: </label>
          <input
            type="text"
            name="emailAddress"
            // value={this.state.emailAddress}
            // onChange={this.handleChange}
            id="emailAddress"
          />
          <br/>
          <label htmlFor="profileImage">Profile image: </label>
          <input
            type="file"
            name="profileImage"
            // value={this.state.profileImage}
            // onChange={this.handleChange}
            id="profileImage"
          />
          <br/>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            // value={this.state.password}
            // onChange={this.handleChange}
            id="password"
          />
          <br/>
          <label htmlFor="catchphrase">Catchphrase: </label>
          <input
            type="text"
            name="catchphrase"
            // value={this.state.catchphrase}
            // onChange={this.handleChange}
            id="catchphrase"
          />
          <br/>
          <label htmlFor="bootCampName">Bootcamp name: </label>
          <input
            type="text"
            name="bootCampName"
            // value={this.state.bootCampName}
            // onChange={this.handleChange}
            id="bootCampName"
          />
          <br/>
          <label htmlFor="bootCampCity">Bootcamp city: </label>
          <input
            type="text"
            name="bootCampCity"
            // value={this.state.bootCampCity}
            // onChange={this.handleChange}
            id="bootCampCity"
          />
          <br/>
          <label htmlFor="bootCampGraduation">Graduation date: </label>
          <input
            type="date"
            name="bootCampGraduation"
            // value={this.state.bootCampGraduation}
            // onChange={this.handleChange}
            id="bootCampGraduation"
          />
          <br/>
          <label htmlFor="skills">Skill: </label>
          <input
            type="text"
            name="skills"
            // value={this.state.skills}
            // onChange={this.handleChange}
            id="skills"
          />
          <br/>
          <label htmlFor="rating">Rating: </label>
          <select
            name="rating"
            id="rating">
            <option defaultValue="1">1 – noob</option>
            <option value="2">2</option>
            <option value="3">3 – intermediate</option>
            <option value="2">4</option>
            <option value="2">5 – ninja</option>
          </select>
          <br/>
          <label htmlFor="currentlyLearning">Currently learning: </label>
          <input
            type="text"
            name="currentlyLearning"
            // value={this.state.currentlyLearning}
            // onChange={this.handleChange}
            id="currentlyLearning"
          />
          <br/>
          <label htmlFor="industry">Industry: </label>
          <input
            type="text"
            name="industry"
            // value={this.state.industry}
            // onChange={this.handleChange}
            id="industry"
          />
          <br/>
          <label htmlFor="yearsInIndustry">Years in industry: </label>
          <input
            type="number"
            name="yearsInIndustry"
            // value={this.state.yearsInIndustry}
            // onChange={this.handleChange}
            id="yearsInIndustry"
          />
          <br/>
          <label htmlFor="languagesSpoken">Languages spoken: </label>
          <input
            type="text"
            name="languagesSpoken"
            // value={this.state.languagesSpoken}
            // onChange={this.handleChange}
            id="languagesSpoken"
          />
          <br/>
          <label htmlFor="myGif">Me as a gif URL: </label>
          <input
            type="text"
            name="myGif"
            // value={this.state.myGif}
            // onChange={this.handleChange}
            id="myGif"
          />
          <br/>
          <label htmlFor="githubUsername">GitHub username: </label>
          <input
            type="text"
            name="githubUsername"
            // value={this.state.githubUsername}
            // onChange={this.handleChange}
            id="githubUsername"
          />
          <br/>
          <label htmlFor="githubProfile">GitHub profile URL: </label>
          <input
            type="text"
            name="githubProfile"
            // value={this.state.githubProfile}
            // onChange={this.handleChange}
            id="githubProfile"
          />
          <br/>
          <label htmlFor="linkedInProfile">LinkedIn profile URL: </label>
          <input
            type="text"
            name="linkedInProfile"
            // value={this.state.linkedInProfile}
            // onChange={this.handleChange}
            id="linkedInProfile"
          />
          <br/>
          <label htmlFor="mediumProfile">Medium profile URL: </label>
          <input
            type="text"
            name="mediumProfile"
            // value={this.state.mediumProfile}
            // onChange={this.handleChange}
            id="mediumProfile"
          />
          <br/>
          <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
