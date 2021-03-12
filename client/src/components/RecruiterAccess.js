import React from 'react'
import { Link } from 'react-router-dom';


export default function Recruiter() {
  return (

    <div className="recruiterAccess">
<div></div>





      <button><Link to={'/recruiter/login'}><h1>Login</h1></Link></button>
     
      <button><Link to={'/recruiter/signup'}><h1>Sign Up</h1></Link></button>

    <div className='accessPage'>
      <h1>Recruiter access</h1>
      
    </div>
    </div>
  )
}
