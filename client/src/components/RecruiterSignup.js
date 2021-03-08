import React from 'react'

export default function RecruiterSignup() {
  return (
    <div>
      <h1>Recruiter Signup</h1>
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
          <label htmlFor="emailAddress">Email address: </label>
          <input
            type="text"
            name="emailAddress"
            // value={this.state.emailAddress}
            // onChange={this.handleChange}
            id="emailAddress"
          />
          <br/>
          <label htmlFor="companyName">Company name: </label>
          <input
            type="text"
            name="companyName"
            // value={this.state.companyName}
            // onChange={this.handleChange}
            id="companyName"
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
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            // value={this.state.username}
            // onChange={this.handleChange}
            id="username"
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
          <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
