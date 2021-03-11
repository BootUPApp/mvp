import React from 'react'
import { Link } from 'react-router-dom';

// const Capitalise = (str) =>{
//   return str.charAt(0).toUpperCase() + str.slice(1);
//   }

export default function RecruiterDashboard(props) {
  console.log(props.user)
  return (
    <div>
      <h1>Welcome to BootUP, {props.user.firstName}</h1>
      <Link to={'/graduates'}>View all graduates</Link> <br/>
      <Link to={`/graduates/edit/${props.user._id}`}>Edit details</Link>
    </div>
  )
}
