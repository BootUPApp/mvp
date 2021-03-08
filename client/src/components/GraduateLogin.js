import React from 'react'

export default function GraduateLogin() {
  return (
    <div>
      <h1>Graduate Login</h1>
      <form>
        <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            // value={this.state.username}
            // onChange={this.handleChange}
            id="username"/>
          <br/>
        <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            // value={this.state.password}
            // onChange={this.handleChange}
            id="password"/>
          <br/>
          <button type="submit">Log in</button>
      </form>
    </div>
  )
}
