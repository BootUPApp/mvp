import React from 'react'

export default function RecruiterDashboard(props) {
  console.log(props.user)
  return (
    <div>
      <h1>Welcome to BootUP, {props.user.firstName}</h1>
    </div>
  )
}
