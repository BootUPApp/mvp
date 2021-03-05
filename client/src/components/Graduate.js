import React from 'react'
import { Link } from 'react-router-dom';

export default function Graduate() {
  return (
    <div>
      <h1>Graduate</h1>
      <Link to={'/graduate/login'}>Login</Link>
      <br/>
      <Link to={'/graduate/signup'}>Signup</Link>
    </div>
  )
}
