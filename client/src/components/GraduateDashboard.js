import React from 'react'

// const Capitalise = (str) =>{
//   return str.charAt(0).toUpperCase() + str.slice(1);
//   }

export default function GraduateDashboard(props) {
  console.log(props.user)
  return (
    <div>
      <h1>Welcome to BootUP, {props.user.firstName}</h1>
    </div>
  )
}