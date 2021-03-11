import React from 'react'
import { Link } from 'react-router-dom';


export default function Recruiter() {
  return (
    <div className='accessPage'>
      <h1>Recruiter access</h1>
      <Link to={'/recruiter/login'}>Login</Link>
      <br/>
      <Link to={'/recruiter/signup'}>Signup</Link>
    </div>
  )
}
